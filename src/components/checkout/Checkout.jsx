import paymentPaypal from "../../assets/imgs/theme/icons/payment-paypal.svg";
import paymentVisa from "../../assets/imgs/theme/icons/payment-visa.svg";
import paymentMaster from "../../assets/imgs/theme/icons/payment-master.svg";
import paymentZapper from "../../assets/imgs/theme/icons/payment-zapper.svg";
import { Slide, toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
// import env from "react-dotenv";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useCallback } from "react";
import useRazorpay from "react-razorpay";
import { useDispatch } from "react-redux";
const dummyData = [
  {
    id: 1,
    price: 35,
    name: "Item 1",
    image: "src/assets/drive-download-20240310T091457Z-001/ST 353 - White/img1.jpg",
  },
  {
    id: 2,
    price: 40,
    name: "Item 2",
    image: "src/assets/drive-download-20240310T091457Z-001/ST 353 - White/img7.jpg",
  },
  {
    id: 3,
    price: 35,
    name: "Item 3",
    image: "src/assets/drive-download-20240310T091457Z-001/ST 353 - White/img3.jpg",
  },
];
const Checkout = () => {
  const [cartdata, setCartdata] = useState([]);
  const user = JSON.parse(localStorage.getItem("userData"));

  const dispatch=useDispatch();
  const checkoutHandler = () => {
    if (!user) {
      toast.error("you need to login first", {
        position: "top-right",
      });
    }
  };
  // console.log(process.env.REACT_APP_RAZORPAY_API_KEY)
  const calculateTotalPrice = (cart) => {
    // Initialize total price
    let totalPrice = 0;

    // Iterate over each item in the cart
    cartdata.forEach((item) => {
      // Multiply the price of the item by its quantity and add it to the total price
      totalPrice += item.price * item.quantity;
    });

    // Return the total price
    return totalPrice;
  };
  const formSubmitHandler = async (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cartItems"));
    console.log(cart);
    if (cart) {
      setCartdata(cart);
    }
  }, []);

  const [Razorpay] = useRazorpay();

  const handlePayment = async (params) => {

    // const options={
    //   amount: `2764`, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    //   currency: "INR",
    //   name: "Piyush Garg",
    //       email: "youremail@example.com",
    //       contact: "9999999999",
    // }
    // dispatch(checkoutHandler())
    // const order = await createOrder(params); //  Create order on your backend

    const options = {
      key: `rzp_test_ANUFMvZM8vKYvG`,
      secret:`fBqD6BCsoWrI9Aqb8PlTkucH`, // Enter the Key ID generated from the Dashboard
      amount: `2764`, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Tags Footwear",
      description: "Test Transaction",
      image: "https://drive.google.com/file/d/1LSbvJ5NetEo-0b86Eo3Q8LeFIRHOAsSY/view?usp=sharing",
      order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Piyush Garg",
        email: "youremail@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new Razorpay(options);

    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });

    rzp1.open();
  
  };

  return (
    <>
      <ToastContainer />
      <main className="main">
        <div className="page-header breadcrumb-wrap">
          <div className="container">
            <div className="breadcrumb">
              <Link to="/" rel="nofollow">
                <i className="fi-rs-home mr-5"></i>Home
              </Link>
              <span></span> Shop
              <span></span> Checkout
            </div>
          </div>
        </div>
        <div className="container mb-80 mt-50">
          <div className="row">
            <div className="col-lg-8 mb-40">
              <h1 className="heading-2 mb-10">Checkout</h1>
              <div className="d-flex justify-content-between">
                <h6 className="text-body">
                  There are <span className="text-brand">{cartdata.length || 0}</span> products in your cart
                </h6>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <div className="row mb-50">
                <div className="col-lg-6 mb-sm-15 mb-lg-0 mb-md-3">
                  {!user && (
                    <div className="toggle_info">
                      <span>
                        <i className="fi-rs-user mr-10"></i>
                        <span className="text-muted font-lg">Already have an account?</span>{" "}
                        <a data-bs-toggle="collapse" className="collapsed font-lg" aria-expanded="false">
                          <Link to="/login">Click here to login</Link>
                        </a>
                      </span>
                    </div>
                  )}
                  <div className="panel-collapse collapse login_form" id="loginform">
                    <div className="panel-body">
                      <p className="mb-30 font-sm">
                        If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to
                        the Billing &amp; Shipping section.
                      </p>
                      <form method="post">
                        <div className="form-group">
                          <input type="text" name="email" placeholder="Username Or Email" />
                        </div>
                        <div className="form-group">
                          <input type="password" name="password" placeholder="Password" />
                        </div>
                        <div className="login_footer form-group">
                          <div className="chek-form">
                            <div className="custome-checkbox">
                              <input className="form-check-input" type="checkbox" name="checkbox" id="remember" value="" />
                              <label className="form-check-label" htmlFor="remember">
                                <span>Remember me</span>
                              </label>
                            </div>
                          </div>
                          <Link to="/forgot_password">Forgot password?</Link>
                        </div>
                        <div className="form-group">
                          <button className="btn btn-md" name="login">
                            Log in
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <form className="apply-coupon" onClick={formSubmitHandler}>
                    <input type="text" placeholder="Enter Coupon Code..." />
                    <button className="btn  btn-md" name="login">
                      Apply Coupon
                    </button>
                  </form>
                </div>
              </div>
              <div className="row">
                <h4 className="mb-30">Billing Details</h4>
                <form method="post" onSubmit={formSubmitHandler}>
                  <div className="row">
                    <div className="form-group col-lg-6">
                      <input type="text" required="" name="fname" placeholder="First name *" />
                    </div>
                    <div className="form-group col-lg-6">
                      <input type="text" required="" name="lname" placeholder="Last name *" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-lg-6">
                      <input type="text" name="billing_address" required="" placeholder="Address *" />
                    </div>
                    <div className="form-group col-lg-6">
                      <input type="text" name="billing_address2" required="" placeholder="Address line2" />
                    </div>
                  </div>
                  <div className="row shipping_calculator">
                    <div className="form-group col-lg-6">
                      <div className="custom_select">
                        <select className="form-control select-active" required>
                          <option value="">Select an option...</option>
                          <option value="IND" selected>
                            India
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group col-lg-6">
                      <input required="" type="text" name="city" placeholder="City / Town *" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-lg-6">
                      <input required="" type="text" name="zipcode" placeholder="Postcode / ZIP *" />
                    </div>
                    <div className="form-group col-lg-6">
                      <input required="" type="text" name="phone" placeholder="Phone *" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-lg-6">
                      <input required type="text" name="cname" placeholder="Company Name" />
                    </div>
                    <div className="form-group col-lg-6">
                      <input required="" type="text" name="email" placeholder="Email address *" />
                    </div>
                  </div>
                  <div className="form-group mb-30">
                    <textarea rows="5" placeholder="Additional information"></textarea>
                  </div>

                  <div id="collapsePassword" className="form-group create-account collapse in">
                    <div className="row">
                      <div className="col-lg-6">
                        <input required="" type="password" placeholder="Password" name="password" />
                      </div>
                    </div>
                  </div>
                  <div className="ship_detail">
                    <div className="form-group">
                      <div className="chek-form"></div>
                    </div>
                    <div id="collapseAddress" className="different_address collapse in">
                      <div className="row">
                        <div className="form-group col-lg-6">
                          <input type="text" required="" name="fname" placeholder="First name *" />
                        </div>
                        <div className="form-group col-lg-6">
                          <input type="text" required="" name="lname" placeholder="Last name *" />
                        </div>
                      </div>
                      <div className="row shipping_calculator">
                        <div className="form-group col-lg-6">
                          <input required="" type="text" name="cname" placeholder="Company Name" />
                        </div>
                        <div className="form-group col-lg-6">
                          <div className="custom_select w-100">
                            <select className="form-control select-active">
                              <option value="">Select an option...</option>
                              <option value="Ind" selected>
                                India
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-lg-6">
                          <input type="text" name="billing_address" required placeholder="Address *" />
                        </div>
                        <div className="form-group col-lg-6">
                          <input type="text" name="billing_address2" required="" placeholder="Address line2" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-lg-6">
                          <input required="" type="text" name="state" placeholder="State / County *" />
                        </div>
                        <div className="form-group col-lg-6">
                          <input required="" type="text" name="city" placeholder="City / Town *" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-lg-6">
                          <input required="" type="text" name="zipcode" placeholder="Postcode / ZIP *" />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="border p-40 cart-totals ml-30 mb-50">
                <div className="d-flex align-items-end justify-content-between mb-30">
                  <h4>Your Order</h4>
                  <h6 className="text-muted">Subtotal</h6>
                </div>
                <div className="divider-2 mb-30"></div>
                <div className="table-responsive order_table checkout">
                  <div className="table-responsive order_table checkout">
                    <table className="table no-border">
                      <tbody>
                        {cartdata.map((item, index) => (
                          <tr key={index}>
                            <td className="image product-thumbnail">
                              <img src={item.productImage} alt="#" />
                            </td>
                            <td>
                              <h6 className="w-160 mb-5">
                                <Link className="text-heading" to={`/products/${item.productId}`}>
                                  {item.title}
                                </Link>
                              </h6>
                              <div className="product-rate-cover">
                                <div className="product-rate d-inline-block">
                                  <div className="product-rating" style={{ width: "90%" }}></div>
                                </div>
                                <span className="font-small ml-5 text-muted"> (4.0)</span>
                              </div>
                            </td>
                            <td>
                              <h6 className="text-muted pl-20 pr-20">x 1</h6>
                            </td>
                            <td>
                              <h4 className="text-brand">&#x20B9;{item.price}</h4>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                        <h3>Total </h3>
                        <h3> &#x20B9;{calculateTotalPrice(cartdata)}</h3>
                      </div>
                    </table>
                  </div>
                </div>
              </div>
              <div className="payment ml-30">
                <h4 className="mb-30">Payment</h4>
                <div className="payment_option">
                  <div className="custome-radio">
                    <input
                      className="form-check-input"
                      required
                      type="radio"
                      name="payment_option"
                      id="exampleRadios3"
                      defaultChecked={true}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios3"
                      data-bs-toggle="collapse"
                      data-target="#bankTranfer"
                      aria-controls="bankTranfer"
                    >
                      Direct Bank Transfer
                    </label>
                  </div>
                  <div className="custome-radio">
                    <input
                      className="form-check-input"
                      required=""
                      type="radio"
                      name="payment_option"
                      id="exampleRadios4"
                      defaultChecked=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios4"
                      data-bs-toggle="collapse"
                      data-target="#checkPayment"
                      aria-controls="checkPayment"
                    >
                      Cash on delivery
                    </label>
                  </div>
                  <div className="custome-radio">
                    <input
                      className="form-check-input"
                      required=""
                      type="radio"
                      name="payment_option"
                      id="exampleRadios5"
                      defaultChecked=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios5"
                      data-bs-toggle="collapse"
                      data-target="#paypal"
                      aria-controls="paypal"
                    >
                      Online Getway
                    </label>
                  </div>
                </div>
                <div className="payment-logo d-flex">
                  <img className="mr-15" src={paymentMaster} alt="" />
                  <img className="mr-15" src={paymentPaypal} alt="" />
                  <img className="mr-15" src={paymentVisa} alt="" />
                  <img src={paymentZapper} alt="" />
                </div>
                <button className="btn btn-fill-out btn-block mt-30" onClick={handlePayment}>
                  Place an Order<i className="fi-rs-sign-out ml-15"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Checkout;

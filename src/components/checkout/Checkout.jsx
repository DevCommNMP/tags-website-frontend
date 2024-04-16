import paymentPaypal from "../../assets/imgs/theme/icons/payment-paypal.svg";
import paymentVisa from "../../assets/imgs/theme/icons/payment-visa.svg";
import paymentMaster from "../../assets/imgs/theme/icons/payment-master.svg";
import paymentZapper from "../../assets/imgs/theme/icons/payment-zapper.svg";
import { Slide, toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useCallback } from "react";
import useRazorpay from "react-razorpay";
import { useDispatch } from "react-redux";
import { CheckoutHandler } from "../../redux/actions/checkoutActions/checkoutActions";
import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [cartdata, setCartdata] = useState([]);
  const user = JSON.parse(localStorage.getItem("userData"));
  const [Razorpay] = useRazorpay();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    billing_address: "",
    billing_address2: "",
    city: "",
    zipcode: "",
    phone: "",
    state: "",
    email: "",
    additionalInfo: "",
  });

  const handleChange = async(e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  
    if (name === "zipcode" && value.length === 6) {
      setLoading(true);
<<<<<<< Updated upstream
      try {
        const response = await axios.post(`${baseUrl}/api/picodedata`, { pincode: value });
        console.log(response.data.success);
        if (response.data.success) {
          const { state, city } = response.data.data[0]; // Corrected 'response.data.datadata[0]' to 'response.data.data[0]'
          setFormData(prevState => ({
            ...prevState,
            state: state || "",
            city: city || ""
          }));
        } else {
          setFormData(prevState => ({
=======
      axios
        .post(`http://localhost:5000/api/picodedata`, { pincode: value })
        .then((response) => {
          console.log(response.data);
          setFormData((prevState) => ({
            ...prevState,
            state: response.data[0].state,
            city: response.data[0].city,
          }));
          setLoading(false);
          // Handle the pincode data received from the server
        })
        .catch((error) => {
          setLoading(false);
          setFormData((prevState) => ({
>>>>>>> Stashed changes
            ...prevState,
            state: "",
            city: "",
          }));
<<<<<<< Updated upstream
          toast.error("Please enter a valid pincode");
        }
      } catch (error) {
        setLoading(false);
        setFormData(prevState => ({
          ...prevState,
          state: "",
          city: ""
        }));
        toast.error("Please enter a valid pincode");
        // console.error("Error fetching pincode data:", error);
      } finally {
        setLoading(false);
      }
    }
  }
    
=======
          toast.error("please enter valid pincode");
          console.error("Error fetching pincode data:", error);
          // Handle errors if any
        });
    }
  };

>>>>>>> Stashed changes
  const paymentHandler = async () => {
    if (!user) {
      toast.error("you need to login first", {
        position: "top-right",
      });
      return;
    }
    if (
      formData.fname.length < 3 ||
      formData.lname.length < 3 ||
      !formData.billing_address ||
      formData.city.length < 3 ||
      !formData.state ||
      !formData.zipcode ||
      !formData.phone ||
      !formData.email
    ) {
      toast.error(
        "Please fill the billing details correctly with valid first name, valid last name, valid billing address, valid city name, valid state name, valid zipcode, valid phone number, and valid email"
      );
      return;
    }
    if (formData.zipcode.length !== 6 || isNaN(formData.zipcode)) {
      toast.error("Please enter a valid 6-digit zipcode");
      return;
    }
    if (formData.phone.length !== 10 || isNaN(formData.phone)) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }
    const isEmailValid = (email) => {
      // Regular expression for email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
    const isValid = isEmailValid(formData.email);
    if (!isValid) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);
    try {
      const { data } = await axios.get(`${baseUrl}/api/getkeys`);

      // const res = await axios.post(`${baseUrl}/api/checkout`, {
      //   amount: totalPrice*100,
      //   userEmail: user.email,
      //   cartdata,
      //   formData
      // });o

      async function displayRazorpay() {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

        if (!res) {
          alert("Razropay failed to load!!");
          return;
        }
        const { data } = await axios.get(`${baseUrl}/api/getkeys`);
        const res1 = await axios.post(`${baseUrl}/api/checkout`, {
          amount: totalPrice,
          userEmail: user.email,
          cartdata,
          formData,
        });
        // console.log(res1)

        const options = {
          key: data.key, // Enter the Key ID generated from the Dashboard
          amount: res1.data.order.amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          currency: "INR",
          name: "Acme Corp",
          description: "Test Transaction",
          image: "https://example.com/your_logo",
          order_id: res1.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
          callback_url: "http://localhost:1769/verify",
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      }
      displayRazorpay();
    } catch (error) {
      console.error("Payment Error: ", error);
      toast.error("Payment failed. Please try again later.");
    }
    setLoading(false);
  };


  let totalPrice = 0;
  cartdata.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });

  let totalTax = 0;
  cartdata.forEach((item) => {
    totalTax += item.price <= 1000 ? (item.price * 0.12 * item.quantity) : (item.price * 0.18 * item.quantity);
  });
  
  const formSubmitHandler = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cartItems"));
    if (cart) {
      setCartdata(cart);
    }
  }, []);

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
                      <input
                        type="text"
                        required="true"
                        name="fname"
                        placeholder="First name *"
                        value={formData.fname}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group col-lg-6">
                      <input
                        type="text"
                        required="true"
                        name="lname"
                        placeholder="Last name *"
                        value={formData.lname}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-lg-6">
                      <input
                        type="text"
                        name="billing_address"
                        required="true"
                        placeholder="Address *"
                        value={formData.billing_address}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group col-lg-6">
                      <input
                        type="text"
                        name="billing_address2"
                        required=" true"
                        placeholder="Address line2"
                        value={formData.billing_address2}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row shipping_calculator">
                    <div className="form-group col-lg-6">
                      <div className="custom_select">
                        <select className="form-control select-active" required value={formData.country} onChange={handleChange}>
                          <option value="">Select an option...</option>
                          <option value="IND" selected>
                            India
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group col-lg-6">
                      <input
                        required=""
                        type="text"
                        name="city"
                        placeholder="City / Town *"
                        value={formData.city}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-lg-6">
                      <input required="" type="text" name="state" placeholder="State *" value={formData.state} onChange={handleChange} />
                    </div>
                    <div className="form-group col-lg-6">
                      <input
                        required
                        type="number"
                        name="zipcode"
                        placeholder="Postcode / ZIP *"
                        maxLength={6}
                        value={formData.zipcode}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-lg-6">
                      <input
                        required=""
                        type="number"
                        name="phone"
                        placeholder="Phone *"
                        max={10}
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group col-lg-6">
                      <input
                        required=""
                        type="text"
                        name="email"
                        placeholder="Email address *"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group mb-30">
                    <textarea
                      rows="5"
                      placeholder="Additional information"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                    ></textarea>
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
                          <input
                            type="text"
                            required
                            name="fname"
                            placeholder="First name *"
                            value={formData.fname}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group col-lg-6">
                          <input
                            type="text"
                            required
                            name="lname"
                            placeholder="Last name *"
                            value={formData.lname}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="row shipping_calculator">
                        {/* <div className="form-group col-lg-6">
                          <input required="" type="text" name="cname" placeholder="Company Name" />
                        </div> */}
                        <div className="form-group col-lg-6">
                          <div className="custom_select w-100">
                            <select className="form-control select-active">
                              <option value={formData.country} onChange={handleChange} required>
                                Select an option...
                              </option>
                              <option value="Ind" selected>
                                India
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-lg-6">
                          <input
                            type="text"
                            name="billing_address"
                            required
                            placeholder="Address *"
                            value={formData.billing_address}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group col-lg-6">
                          <input
                            type="text"
                            name="billing_address2"
                            required=""
                            placeholder="Address line2"
                            value={formData.billing_address2}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-lg-6">
                          <input
                            required=""
                            type="text"
                            name="state"
                            placeholder="State / County *"
                            value={formData.state}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group col-lg-6">
                          <input
                            required=""
                            type="text"
                            name="city"
                            placeholder="City / Town *"
                            value={formData.town}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-lg-6">
                          <input
                            required=""
                            type="text"
                            name="zipcode"
                            placeholder="Postcode / ZIP *"
                            value={formData.zipcode}
                            onChange={handleChange}
                          />
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
                              
                            <h4 className="text-brand">&#x20B9;{item.price} </h4>     <span style={{}}>
    Tax &#x20B9;{item.price <= 1000 ? (((item.price * 0.12)).toFixed(0))*item.quantity : (((item.price * 0.18)).toFixed(0))}
  </span></td>
                          </tr>
                        ))}
                      </tbody>
                      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                        <h4> Sub Total = </h4>
                        <h4> &#x20B9;{totalPrice}</h4>
                       
                        
                       
                      </div>
                      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                      
                        <h4> Total Tax = </h4>
                        <h4> &#x20B9;{totalTax.toFixed(0)}</h4>
                        
                       
                      </div>
                      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                      
                      <h4> Total Amount = </h4>
                      <h4> &#x20B9;{(totalPrice+totalTax).toFixed(0)}</h4>
                      
                     
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
                    {/* <label
                      className="form-check-label"
                      htmlFor="exampleRadios4"
                      data-bs-toggle="collapse"
                      data-target="#checkPayment"
                      aria-controls="checkPayment"
                    >
                      Cash on delivery
                    </label> */}
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
                    {/* <label
                      className="form-check-label"
                      htmlFor="exampleRadios5"
                      data-bs-toggle="collapse"
                      data-target="#paypal"
                      aria-controls="paypal"
                    >
                      Online Getway
                    </label> */}
                  </div>
                </div>
                <div className="payment-logo d-flex">
                  <img className="mr-15" src={paymentMaster} alt="" />
                  {/* <img className="mr-15" src={paymentPaypal} alt="" /> */}
                  <img className="mr-15" src={paymentVisa} alt="" />
                  {/* <img src={paymentZapper} alt="" /> */}
                </div>
                <button className="btn btn-fill-out btn-block mt-30" onClick={paymentHandler}>
                  {loading ? "Loading" : " Place an Order"}
                  <i className="fi-rs-sign-out ml-15"></i>
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

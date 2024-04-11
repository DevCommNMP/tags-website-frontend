import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  const cartProductHandler = (id) => {
    navigate(`/products/${id}`);
  };

  const cartItemRemoveHandler = (productId) => {
    let cart = JSON.parse(localStorage.getItem("cartItems"));

    if (cart) {
      const updatedCart = cart.filter((item) => item.productId !== productId);
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      setCartData(updatedCart);

      toast.success("Product removed from cart successfully !", {
        position: "top-right",
      });
    } else {
      toast.error("Something went wrong, try again !", {
        position: "top-right",
      });
    }
  };

  const checkoutHandler = () => {
    navigate("/checkout");
  };

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartData(cart);
  }, []);

  const handleProductClick = (productId) => {
    const clickedItem = cartData.find((item) => item.productId === productId);
    if (clickedItem) {
      navigate(`/products/${productId}`);
    }
  };

  const aggregatedCartItems = cartData.reduce((acc, curr) => {
    const existingItem = acc.find((item) => item.productId === curr.productId);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...curr, quantity: 1 });
    }
    return acc;
  }, []);

  return (
    <>
      <Header />
      <ToastContainer />
      <main className="main">
        <div className="page-header breadcrumb-wrap">
          <div className="container">
            <div className="breadcrumb">
              <Link to="/">
                <i className="fi-rs-home mr-5"></i>Home
              </Link>
              <span></span> cart <span></span>
            </div>
          </div>
        </div>
        <div className="container mb-30 mt-50">
          <div className="row">
            <div className="col-xl-10 col-lg-12 m-auto">
              <div className="mb-50">
                <h1 className="heading-2 text-center mb-10">Your Cart</h1>
                <h6 className="text-center text-body">
                  {aggregatedCartItems.length > 0 && `There are ${aggregatedCartItems.length} products in this list`}
                </h6>
              </div>
              {aggregatedCartItems.length === 0 ? (
                <div>
                  <h6>
                    Empty cart, full potential! <br />
                    <Link to="/">Explore our stylish selection of footwear</Link> and transform your shopping experience into a fashion
                    adventure. <br />
                  </h6>
                </div>
              ) : (
                <div className="table-responsive shopping-summery">
                  <table className="table table-wishlist">
                    <thead>
                      <tr className="main-heading">
                        <th scope="col" colSpan="2" className="pl-30">
                          Product
                        </th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Action</th>
                        <th scope="col" className="end">
                          Remove
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {aggregatedCartItems.map((item, index) => (
                        <tr className="pt-30" key={index}>
                          <td className="pl-30 image product-thumbnail pt-40">
                            <img src={item.productImage} alt="#" />
                          </td>
                          <td className="product-des product-name">
                            <h6 onClick={() => handleProductClick(item.productId)}>
                              <a className="product-name mb-10">{item.title}</a>
                            </h6>
                            <div className="product-rate-cover">
                              <div className="product-rate d-inline-block">
                                <div className="product-rating" style={{ width: "90%" }}></div>
                              </div>
                              <span className="font-small ml-5 text-muted">Rating (4.0)</span>
                            </div>
                          </td>
                          <td className="price" data-title="Price">
                            <h3 className="text-brand">{item.price}</h3>
                          </td>
                          <td className="text-center detail-info" data-title="Stock">
                            <span className="stock-status in-stock mb-0">{item.quantity}</span>
                          </td>
                          <td className="text-right" data-title="Cart">
                            <button className="btn btn-sm" onClick={() => cartProductHandler(item.productId)}>
                              View Product
                            </button>
                          </td>
                          <td className="action text-center" data-title="Remove" onClick={() => cartItemRemoveHandler(item.productId)}>
                            <a className="text-body">
                              <i className="fi-rs-trash"></i>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              <Link to={aggregatedCartItems.length === 0 ? "/all-categories" : "/checkout"}>
                <Button style={{ textAlign: "center", marginTop: "50px" }} onClick={checkoutHandler}>
                  {aggregatedCartItems.length === 0 ? "Browse All Categories" : "Proceed to checkout"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Cart;

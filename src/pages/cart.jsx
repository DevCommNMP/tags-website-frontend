import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Link, useNavigate } from "react-router-dom";
import { discount as globalDiscount } from "../utils/baseUrl";

import { toast, ToastContainer } from "react-toastify";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [aggregatedCartItems, setAggregatedCartItems] = useState([]);
  const navigate = useNavigate();
  const [productIdToDelete, setProductIdToDelete] = useState(null);
  const [show, setShow] = useState(false);
  const [loading, setloading] = useState(false);
  const[soldOut,setSoldOut]=useState(false);
  const fetchCartData = () => {
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartData(cart);
    const aggregatedItems = aggregateCartItems(cart);
    setAggregatedCartItems(aggregatedItems);
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetchCartData();
  }, []);

  const cartProductHandler = (id) => {
    navigate(`/products/${id}`);
  };

  const cartItemRemoveHandler = (productId) => {
    let cart = JSON.parse(localStorage.getItem("cartItems"));

    if (cart) {
      const updatedCart = cart.filter((item) => item.productId !== productId);
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      setCartData(updatedCart);
      const aggregatedItems = aggregateCartItems(updatedCart);
      setAggregatedCartItems(aggregatedItems);

      toast.success("Product removed from cart successfully !", {
        position: "top-right",
      });
    } else {
      toast.error("Something went wrong, try again !", {
        position: "top-right",
      });
    }
  };
  const deleteHandler = (productId) => {
    setShow(!show);
    setProductIdToDelete(productId);
  };
  const deleteproductHandler = () => {
    setloading(true);
    // console.log("product deleted successfully");
    cartItemRemoveHandler(productIdToDelete);
    setloading(false);
    setShow(!show);
  };
  const handleQuantityChange = (productId, action) => {
    const updatedCart = cartData.map((item) => {
      if (item.productId === productId) {
    
        // Check if the item has sizesAvailable and action is "increase"
        if (action === "increase" && item.product.sizesAvailable) {
          // console.log(item.product.sizesAvailable)
          const availableSize = item.product.sizesAvailable.find(sizeItem => sizeItem.size === item.size);
          // console.log(availableSize)
          // Check if the selected size is in sizesAvailable and its quantity is less than item.quantity
          if (availableSize && availableSize.quantity >= item.quantity) {

            return { ...item, quantity: item.quantity + 1 };;// Do not increase quantity if conditions are met
          }
          else{
toast.error(`Only ${item.quantity} quantity available in stock.`)
          }
        }
        else if (action === "decrease" && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item; // Return unchanged item if productId doesn't match or action is invalid
    });
  

    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    setCartData(updatedCart);
    const aggregatedItems = aggregateCartItems(updatedCart);
    setAggregatedCartItems(aggregatedItems);
  };

  const checkoutHandler = () => {
    navigate("/checkout");
  };

  const aggregateCartItems = (cart) => {
    return cart.reduce((acc, curr) => {
      const existingItemIndex = acc.findIndex((item) => item.productId === curr.productId);
      if (existingItemIndex !== -1) {
        acc[existingItemIndex].quantity += curr.quantity;
      } else {
        acc.push({ ...curr });
      }
      return acc;
    }, []);
  };


  const handleProductClick = (productId) => {
    const clickedItem = cartData.find((item) => item.productId === productId);
    if (clickedItem) {
      navigate(`/products/${productId}`);
    }
  };

  const calculatePrice = (item) => {
    const sellingPrice = item.discount
      ? item.SellingPrice * (1 - item.discount / 100)
      : item.SellingPrice * (1 - globalDiscount / 100);
  

  
    const finalPrice = (sellingPrice).toFixed(0);
  
    return finalPrice;
  };
  useEffect(() => {
    

  const hasSoldOutItem = cartData.some(item => item.size === 0);

  setSoldOut(hasSoldOutItem);
  // console.log(soldOut)

  }, [aggregateCartItems])
  

  
  return (
    <>
      {show ? (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Warning !</Modal.Title>
          </Modal.Header>
          <Modal.Body> You will not be able to retrieve the product after deletion.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={deleteproductHandler} disabled={loading}>
              {loading ? "Loading" : "Delete"}
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        ""
      )}
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
                            
                            {(item.size==0||item.color=="" )? <p style={{color:"red"}}>Soldout<span style={{color:"black"}}>(Please Select different color or size)</span></p>:<p style={{color:"green"}}>In Stock</p>}
                            <div className="product-rate-cover">
                              <div className="product-rate d-inline-block">
                                <div className="product-rating" style={{ width: "90%" }}></div>
                              </div>
                              <span className="font-small ml-5 text-muted">{item.description}</span>
                            </div>
                          </td>
                          <td className="price" data-title="Price">
                            <h3 className="text-brand">
                              {" "}
                              <span>
                                &#8377;{" "}
                                {item.price}
                              </span>
                            </h3>
                            
                          </td>
                          <td className="text-center detail-info" data-title="Stock">
                            <div className="quantity">
                              <button className="btn btn-sm" onClick={() => handleQuantityChange(item.productId, "decrease")}>
                                -
                              </button>
                              <span className="stock-status in-stock mb-0">{item.quantity}</span>
                              <button className="btn btn-sm" onClick={() => handleQuantityChange(item.productId, "increase")}>
                                +
                              </button>
                            </div>
                          </td>
                          <td className="text-right" data-title="Cart">
                            <button className="btn btn-sm" onClick={() => cartProductHandler(item.productId)}>
                              View Product
                            </button>
                          </td>
                          <td className="action text-center" data-title="Remove" onClick={() => deleteHandler(item.productId)}>
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
              <h5 style={{color:"red"}}>{soldOut? "Plese remove the item that is out of stock or select defferent color/size":""}</h5>
              <Link to={aggregatedCartItems.length === 0 ? "/all-categories" : "/checkout"}>
                <Button style={{ textAlign: "center", marginTop: "50px" }} onClick={checkoutHandler} disabled={soldOut}>
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

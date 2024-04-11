import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Link, useNavigate } from "react-router-dom";
import { Slide, toast, ToastContainer } from "react-toastify";
import { Button } from "react-bootstrap";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // Function to aggregate duplicate items
  const aggregateCartItems = (items) => {
    const aggregatedItems = items.reduce((acc, curr) => {
      const existingItem = acc.find((item) => item.productId === curr.productId);
      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if item already exists
      } else {
        acc.push({ ...curr, quantity: 1 }); // Add new item with quantity 1
      }
      return acc;
    }, []);
    return aggregatedItems;
  };

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const aggregatedCartItems = aggregateCartItems(storedCartItems);
    setCartItems(aggregatedCartItems);
  }, []);

  // Function to handle clicking on a product name
  const handleProductClick = (productId) => {
    const clickedItem = cartItems.find((item) => item.productId === productId);
    if (clickedItem) {
      navigate(`/products/${productId}`);
    }
  };

  // Function to handle checkout
  const checkoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <>
      {/* Header, ToastContainer, and main content */}
      {cartItems.length === 0 ? (
        // Empty cart message
        <div>
          <h6>
            Empty cart, full potential! <br />
            <Link to="/">Explore our stylish selection of footwear</Link> and transform your shopping experience into a fashion adventure.
          </h6>
        </div>
      ) : (
        // Render aggregated cart items
        <div className="table-responsive shopping-summery">
          <table className="table table-wishlist">
            {/* Table header */}
            <thead>
              <tr className="main-heading">
                {/* Header cells */}
                <th scope="col" colSpan="2" className="pl-30">
                  Product
                </th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {/* Render aggregated items */}
              {cartItems.map((item, index) => (
                <tr className="pt-30" key={index}>
                  {/* Render item details */}
                  <td className="pl-30 image product-thumbnail pt-40">
                    {/* Render product image */}
                    <img src={item.productImage} alt="#" />
                  </td>
                  <td className="product-des product-name">
                    {/* Render product name with quantity */}
                    <h6 onClick={() => handleProductClick(item.productId)}>
                      <a className="product-name mb-10">{item.title}</a>
                    </h6>
                    {/* Render product rating */}
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div className="product-rating" style={{ width: "90%" }}></div>
                      </div>
                      <span className="font-small ml-5 text-muted">Rating (4.0)</span>
                    </div>
                  </td>
                  <td className="price" data-title="Price">
                    {/* Render product price */}
                    <h3 className="text-brand">{item.price}</h3>
                  </td>
                  <td className="text-center detail-info" data-title="Stock">
                    {/* Render product quantity */}
                    <span className="stock-status in-stock mb-0">{item.quantity}</span>
                  </td>
                  {/* Action buttons */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {/* Checkout button */}
      <Link to={cartItems.length === 0 ? "/all-categories" : "/checkout"}>
        <Button style={{ textAlign: "center", marginTop: "50px" }} onClick={checkoutHandler}>
          {cartItems.length === 0 ? "Browse All Categories" : "Proceed to checkout"}
        </Button>
      </Link>
      {/* Footer */}
    </>
  );
};

export default Cart;

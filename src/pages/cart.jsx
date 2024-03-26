import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Link, useNavigate } from "react-router-dom";
import { Slide, toast, ToastContainer } from "react-toastify";
const Cart = () => {
    const [cartdata, setCartdata] = useState([]);
const navigate = useNavigate();
    const cartProductHandler=(id)=>{
navigate(`/products/${id}`)
    }

 const cartItemRemoveHandler = async (productId) => {
  // Step 1: Retrieve the cart from localStorage
  let cart = JSON.parse(localStorage.getItem("cartItems"));

  // Check if cart exists in localStorage
  if (cart) {
    // Step 2: Modify the cart by removing the desired item (assuming productId is the unique identifier)
    const itemIdToRemove = productId;
    cart = cart.filter(item => item.productId !== itemIdToRemove);

    // Step 3: Update the cart in localStorage with the modified version
    localStorage.setItem("cartItems", JSON.stringify(cart));
    setCartdata(cart); // Optionally update state if needed

    // Optionally, log the updated cart to the console
  
    toast.success("Product rmoved from cart successfully !", {
        position: "top-right",
      });
  } else {
    toast.error("Something went wrong try again !", {
        position: "top-right",
      });
   
  }
};

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cartItems"));
    console.log(cart)
    if (cart) {
      setCartdata(cart);
    }
  }, []);

  return (
    <>
      <Header />
     <ToastContainer/>
      <main className="main">
        <div className="page-header breadcrumb-wrap">
          <div className="container">
            <div className="breadcrumb">
              <a href="index.html" rel="nofollow">
                <i className="fi-rs-home mr-5"></i>Home
              </a>
              <span></span> cart <span></span> 
            </div>
          </div>
        </div>
        <div className="container mb-30 mt-50">
          <div className="row">
            <div className="col-xl-10 col-lg-12 m-auto">
              <div className="mb-50">
                <h1 className="heading-2 mb-10">Your  Cart</h1>
                <h6 className="text-body">
                  There are <span className="text-brand">{cartdata.length}</span> products in this list
                </h6>
              </div>
              <div className="table-responsive shopping-summery">
                <table className="table table-wishlist">
                  <thead>
                    <tr className="main-heading">
                      <th className="custome-checkbox start pl-30">
                        <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox11" value="" />
                        <label className="form-check-label" htmlFor="exampleCheckbox11"></label>
                      </th>
                      <th scope="col" colSpan="2">
                        Product
                      </th>
                      <th scope="col">Price</th>
                      {/* <th scope="col">Stock Status</th> */}
                      <th scope="col">Action</th>
                      <th scope="col" className="end">
                        Remove
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                {cartdata.map((item,index)=>(
                        <tr className="pt-30" key={index}>
                        <td className="custome-checkbox pl-30">
                          <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" value="" />
                          <label className="form-check-label" htmlFor="exampleCheckbox1"></label>
                        </td>
                        <td className="image product-thumbnail pt-40">
                          <img src={item.productImage} alt="#" />
                        </td>
                        <td className="product-des product-name">
                          <h6 onClick={()=>cartProductHandler(item.productId)}>
                            <a className="product-name mb-10">
                             {item.title}
                            </a>
                          </h6>
                          <div className="product-rate-cover">
                            <div className="product-rate d-inline-block">
                              <div className="product-rating" style={{width:'90%'}}></div>
                            </div>
                            <span className="font-small ml-5 text-muted">Rating (4.0)</span>
                          </div>
                        </td>
                        <td className="price" data-title="Price">
                        <h3 className="text-brand">{item.price}</h3>

                        </td>
                        {/* <td className="text-center detail-info" data-title="Stock">
                          <span className="stock-status in-stock mb-0"> In Stock </span>
                        </td> */}
                        <td className="text-right" data-title="Cart">
                     
                          <button className="btn btn-sm" onClick={()=>cartProductHandler(item.productId)}>View Product</button>
                       
                        </td>
                        <td className="action text-center" data-title="Remove" onClick={()=>cartItemRemoveHandler(item.productId)}>
                          <a className="text-body">
                            <i className="fi-rs-trash"></i>
                          </a>
                        </td>
                      </tr>
                ))}
                   
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Cart;

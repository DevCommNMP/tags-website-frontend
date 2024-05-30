import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import { fetchParticularProduct } from "../redux/actions/product/productActions";
import { addToCart } from "../redux/actions/cart/cartActions";
import { toast, ToastContainer } from "react-toastify";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SingleProductImages from "../components/SingleProductImages";
import starRating from "../assets/imgs/theme/rating-stars.png";
import ProductInfo from "../components/ProductInfo";

const Product = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const storeData = useSelector((store) => store.products);
  const { particularproduct } = storeData;

  const [soldOut, setSoldOut] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [stock, setStock] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [error, setError] = useState("");

  const cartHandler = async (item, selectedColor, selectedSize, quantity) => {
    if(selectedColor && selectedSize){
      setError("");
     
    }
    if (!selectedColor || !selectedSize) {
      setError("Please select color and size.");
      return;
    }
  
    await dispatch(addToCart(item, selectedColor, selectedSize, quantity));
   
    toast.success("Product added to cart", { position: "top-center" });
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  const handleSizeSelection = (size, quantity) => {
    setStock(quantity);
    setSelectedSize(size);
    setError("");
    if (quantity === 0) {
      setSoldOut(true);
    } else {
      setSoldOut(false);
    }
  };

  useEffect(() => {
    dispatch(fetchParticularProduct(id));
  }, [dispatch, id]);

  return (
    <>
      <ToastContainer 
      
  position="top-center"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  // transition={{ bounce: true }}
  theme="light"
 
      />
      <Header />
      <main className="main">
        <div className="page-header breadcrumb-wrap">
          <div className="container">
            <div className="breadcrumb">
              <a>
                <Link to="/">
                  <i className="fi-rs-home mr-5"></i>Home
                </Link>
              </a>
              <span>Products</span> {particularproduct.title}
            </div>
          </div>
        </div>
        <div className="container mb-30">
          <div className="row">
            <div className="col-xl-10 col-lg-12 m-auto">
              <div className="product-detail accordion-detail">
                <div className="row mb-50 mt-30">
                  <SingleProductImages product={particularproduct} />
                  
                  <div className="col-md-6 col-sm-12 col-xs-12">
                    <div className="detail-info pr-30 pl-30">
                      {/* <span className="stock-status out-stock">Sale Off</span> */}
                      <h2 className="title-detail">{particularproduct.title}</h2>
                      <div className="product-detail-rating">
                        <div className="product-rate-cover text-end">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: `${20 * particularproduct.rating}%`, backgroundImage: `url(${starRating})` }}
                            ></div>
                          </div>
                          <span className="font-small ml-5 text-muted">(32 reviews)</span>
                        </div>
                      </div>
                      <div className="clearfix product-price-cover">
                        <div className="product-price primary-color float-left" style={{ fontSize: "2rem", color: "red", fontWeight: 800 }}>
                          <span>&#8377; {particularproduct.SellingPrice < 1000 ? ((particularproduct.SellingPrice + (particularproduct.SellingPrice * 0.12)).toFixed(0)) : ((particularproduct.SellingPrice + (particularproduct.SellingPrice * 0.18)).toFixed(0))}</span>
                          <span className="save-price font-md color ml-15" style={{color:"red",fontSize:"16px"}}>Inc. all taxes</span>
                          <span>
                            <span className="save-price font-md color3 ml-15">26% Off </span>
                            <span className="old-price font-md ml-15">5000</span>
                          </span>
                        </div>
                      </div>
                      <div className="short-desc mb-30">
                        <p className="font-lg" style={{color:"black",fontSize:"25px"}}>{particularproduct.description}</p>
                      </div>

                      <div className="attr-detail attr-size mb-3">
                        <strong className="mr-10">Size</strong>
                        <ul className="list-filter size-filter font-small">
                          {particularproduct &&
                            particularproduct.sizesAvailable &&
                            particularproduct.sizesAvailable.map((item, index) => (
                              <li key={index}>
                                <a onClick={() => handleSizeSelection(item.size, item.quantity)} className={selectedSize === item.size ? "selected" : ""}>
                                  {item.size}
                                </a>
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div className="attr-detail attr-size mb-30">
                        <strong className="mr-10">Colors</strong>
                        <ul className="list-filter color-filter flex-align-justify-center size-filter font-small">
                          {particularproduct &&
                            particularproduct.colorsAvailable &&
                            particularproduct.colorsAvailable.map((item, index) => (
                              <li key={index}>
                                <a
                                  onClick={() => handleColorSelection(item)}
                                  className={`product-color-box product${item} ${selectedColor === item ? "selected" : ""}`}
                                ></a>
                              </li>
                            ))}
                        </ul>
                      </div>

                      <div className="detail-extralink mb-50">
                        <div className="detail-qty border radius">
                          <a className="qty-down" onClick={decreaseQuantity}>
                            <i className="fi-rs-angle-small-down"></i>
                          </a>
                          <input type="text" name="quantity" className="qty-val" value={quantity} readOnly />
                          <a className="qty-up" onClick={increaseQuantity}>
                            <i className="fi-rs-angle-small-up"></i>
                          </a>
                        </div>
                        <br />
                        {soldOut ? <h2>Sold Out</h2> : ""}

                        <div className="product-extra-link2">``
                          <button
                            type="button"
                            className="border bg-white  text-brand radius button button-add-to-cart"
                            onClick={() => cartHandler(particularproduct,selectedColor,selectedSize,quantity)}
                            disabled={soldOut}
                          >
                            <i className="fi-rs-shopping-cart"></i>Add to cart
                          </button>
                          <button
                            type="button"
                            className="button button-primary button-add-to-cart ml-5"
                            onClick={()=>handleBuyNow(particularproduct,selectedColor,selectedSize,quantity)}
                            disabled={soldOut}
                          >
                            <i className="fi-rs-shopping-cart"></i>Buy Now
                          </button>
                        </div>
                        {error && <p className="text-danger">{error}</p>}
                      </div>
                      <div className="font-xs">
                        <ul className="mr-50 float-start">
                          <li className="mb-5">
                            Type: <span className="text-brand">{particularproduct.occasion}</span>
                          </li>
                          <li className="mb-5">
                            MFG:<span className="text-brand"> Jun 4.2024</span>
                          </li>
                          <li>  
                            LIFE: <span className="text-brand">2 year </span>
                          </li>
                        </ul>
                        <ul className="float-start">
                          <li className="mb-5">
                            Product-Id: <a>{particularproduct.productName}</a>
                          </li>
                          <li className="mb-5">
                            Tags:
                            <a rel="tag">{particularproduct.tag}</a>
                          </li>
                          <li>
                            Stock:
                            <span className="in-stock text-brand ml-5">{stock} Items In Stock</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <ImageMagnify /> */}
                </div>
                <ProductInfo product={particularproduct} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Product;

import { useState, useEffect, useLayoutEffect } from "react";
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
import { discount as globalDiscount } from "../utils/baseUrl";
import shoeSizeChart from "../assets/imgs/Shoe-sizeimage/sizeChart.jpg";
import LoaderImg from "../components/LoaderImg";
const Product = () => {
  const dispatch = useDispatch();
  const { slugtitle } = useParams();
  const navigate = useNavigate();
  const storeData = useSelector((store) => store.products);
  const { particularproduct } = storeData;
  // console.log(particularproduct);
  const [loading, setloading] = useState(false);
  const [soldOut, setSoldOut] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [stock, setStock] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [error, setError] = useState("");
  const [productSlugTitle, setProductSlugTitle] = useState(slugtitle);
  const [selectedIndex, setSelectedIndex] = useState(0);
  // console.log(particularproduct)

  const product = Array.isArray(particularproduct) ? particularproduct.find((item) => item.slugTitle === slugtitle) : null;

  const productTitle = product?.title;
  const productName = product?.productName;
  const productRating = product?.rating;
  const productDescription = product?.description;
  const productSellingPrice = product?.SellingPrice;
  const productDiscount = product?.discount;
  const productSizesAvailable = product?.sizesAvailable;
  const productColorsAvailable = product?.colorsAvailable;

  const productPrice = product?.discount
  ? Math.round(product?.SellingPrice * (1 - product?.discount / 100))
  : Math.round(product?.SellingPrice * (1 - globalDiscount / 100));


  const handleproductImageChange = async (color, index) => {
    // console.log(color);
    setSelectedColor(color)
    const lowercaseColor = color.toLowerCase();
    const productIndexWithSelectedColor = particularproduct.findIndex(
      (product) => product.colorsAvailable && product.colorsAvailable.length && product.productName.toLowerCase().includes(lowercaseColor)
    );
    // console.log(productIndexWithSelectedColor);
    if (productIndexWithSelectedColor !== -1) {
      navigate(`/products/${particularproduct[productIndexWithSelectedColor].slugTitle}`);
    }
  };

  const handleBuyNow = async (particularproduct, selectedColor, selectedSize, quantity) => {
    if (selectedColor && selectedSize) {
      setError("");
    }
    if (!selectedColor) {
      setError("Please select color ");
      return;
    }
    if(!selectedSize){
      setError("Please select  size.");
      return;
    }
    if (quantity > stock) {
      setError(`Only ${stock} items available in stock`);
      return;
    }
    await dispatch(addToCart(particularproduct, selectedColor, selectedSize, quantity));
    navigate("/checkout");
  };

  const cartHandler = async (item, selectedColor, selectedSize, quantity) => {
    if (selectedColor && selectedSize) {
      setError("");
    }
    if (!selectedSize) {
      setError("Please select size.");
      return;
    }
    if (!selectedColor) {
      setError("Please select color.");
      return;
    }
    if (quantity > stock) {
      setError(`Only ${stock} items available in stock`);
      return;
    }
    await dispatch(addToCart(item, selectedColor, selectedSize, quantity));
    toast.success("Product added to cart", { position: "top-center" });
  };

  const increaseQuantity = () => {
    if (quantity >= stock) {
      setError(`Only ${stock} items available in stock`);
      return;
    }
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  // const handleColorSelection = async (color,index) => {

  //   setSelectedIndex(index);

  //   // navigate(`/products/${particularproduct[index].slugTitle}`)

  // };

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
    setloading(true);
  dispatch(fetchParticularProduct(slugtitle));

    setloading(false);
  }, [dispatch, productSlugTitle]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header />
      
      {loading ? (
        <LoaderImg />
      ) : !product ? (
        <h1 style={{textAlign:"center",marginTop:"100px",marginBottom:"100px"}}>Product not found!</h1>
      ) : (
        <div className="page-header breadcrumb-wrap">
          <div className="container">
            <div className="breadcrumb">
              <Link to="/">
                <i className="fi-rs-home mr-5"></i>Home
              </Link>
              <span>Products</span> {productTitle}
            </div>
          </div>
        </div>
      )}
  
      {!loading && product && (
        <main className="main">
          <div className="container mb-30">
            <div className="row">
              <div className="col-xl-10 col-lg-12 m-auto">
                <div className="product-detail accordion-detail">
                  <div className="row mb-50 mt-30">
                    {product && <SingleProductImages product={product} />}
  
                    <div className="col-md-6 col-sm-12 col-xs-12">
                      <div className="detail-info pr-30 pl-30">
                        <h2 className="title-detail">{productTitle}</h2>
                        <div className="product-detail-rating">
                          <div className="product-rate-cover text-end">
                            <div className="product-rate d-inline-block">
                              <div
                                className="product-rating"
                                style={{ width: `${20 * productRating}%`, backgroundImage: `url(${starRating})` }}
                              ></div>
                            </div>
                            <span className="font-small ml-5 text-muted">(32 reviews)</span>
                          </div>
                        </div>
                        <div className="clearfix product-price-cover">
                          <div className="product-price primary-color float-left" style={{ fontSize: "2rem", color: "red", fontWeight: 800 }}>
                            <span>
                              <span className="save-price font-md color ml-15" style={{ color: "red", fontSize: "25px", marginRight: 20 }}>
                                -{productDiscount ? productDiscount : globalDiscount}% <span style={{ color: "black" }}>Off </span>
                              </span>
                              <div style={{ display: "flex", alignItems: "center" }}>
                                <span style={{ fontSize: 5, color: "grey", marginLeft: 10 }}>M.R.P. :</span>
                                <span className="old-price font-md ml-5" style={{ fontSize: 15 }}>
                                  &#8377;{productSellingPrice}
                                </span>
                              </div>
                            </span>
                            <span>&#8377; {productPrice}</span>
                            <span className="save-price font-md color ml-15" style={{ color: "green", fontSize: "16px" }}>
                              Inc. all taxes
                            </span>
                          </div>
                        </div>
                        <div className="short-desc mb-30">
                          <p className="font-lg" style={{ color: "black", fontSize: "25px" }}>
                            {productDescription}
                          </p>
                        </div>
                        <div className="attr-detail attr-size mb-3">
                          <strong className="mr-10">Size</strong>
                          <ul className="list-filter size-filter font-small">
                          {[...new Set(product.sizesAvailable.map(item => item.size))].map((size, index) => (
  <li key={index}>
    <a
      onClick={() => handleSizeSelection(size, product.sizesAvailable.find(item => item.size === size).quantity)}
      className={selectedSize === size ? "selected" : "notselected"}
    >
      {size}
    </a>
  </li>
))}

                          </ul>
                        </div>
                        <div className="attr-detail attr-size mb-30">
                          <strong className="mr-10">Colors</strong>
                          <ul className="list-filter color-filter flex-align-justify-center size-filter font-small">
                            {[...product.colorsAvailable]
                              .sort((a, b) => a.localeCompare(b))
                              .map((item, index) => (
                                <li key={index}>
                                  <a
                                    onClick={() => handleproductImageChange(item, index)}
                                    className={`product-color-box product-${item.replace(/[\s./]+/g, "-").toLowerCase()} ${
                                      selectedColor === item ? "selected" : "notselected"
                                    }`}
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
                          {soldOut && <h2>Sold Out</h2>}
  
                          <div className="product-extra-link2">
                            <button
                              type="button"
                              className="border bg-white text-brand radius button button-add-to-cart"
                              onClick={() => cartHandler(product, selectedColor, selectedSize, quantity)}
                              disabled={soldOut}
                            >
                              <i className="fi-rs-shopping-cart"></i>Add to cart
                            </button>
                            <button
                              type="button"
                              className="button button-primary button-add-to-cart ml-5"
                              onClick={() => handleBuyNow(product, selectedColor, selectedSize, quantity)}
                              disabled={soldOut}
                            >
                              <i className="fi-rs-shopping-cart"></i>Buy Now
                            </button>
                          </div>
                          {error && <p className="text-danger">{error}</p>}
                        </div>
                        <div className="font-xs">
                          <ul className="mr-50 float-start"></ul>
                          <ul className="float-start">
                            <li className="mb-5">
                              Product-Id:<span className="in-stock text-brand ml-5">{product?.productName}</span>
                            </li>
                            <li className="mb-5">
                              Tags:
                              <span className="in-stock text-brand ml-5">{product?.tag}</span>
                            </li>
                            <li className="mb-5">
                              Brand: <span className="text-brand">{product?.brand}</span>
                            </li>
                            <li>
                              Stock:
                              <span className="in-stock text-brand ml-5">{stock} Items In Stock</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <table style={{ color: "black", display: "flex", overflow: "scroll" }}>
                    <thead>
                      <tr style={{ fontSize: "25px", marginTop: "10px", color: "black" }}>
                        <th colSpan="8">Size Chart</th>
                      </tr>
                      <tr style={{ color: "black" }}>
                        <th>UK</th>
                        <th>36</th>
                        <th>37</th>
                        <th>38</th>
                        <th>39</th>
                        <th>40</th>
                        <th>41</th>
                        <th>42</th>
                      </tr>
                      <tr style={{ color: "black" }}>
                        <td>IND</td>
                        <td>05</td>
                        <td>06</td>
                        <td>07</td>
                        <td>08</td>
                        <td>09</td>
                        <td>10</td>
                        <td>11</td>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </table>
                  <ProductInfo product={product} />
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
  
      <Footer />
    </>
  );
  
};

export default Product;

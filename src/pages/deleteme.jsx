import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCartHandler } from "../redux/actions/cart/cartActions";

const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  margin: 50,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};


const ProductTabSection = ({ data }) => {
  const limitedData = data.slice(0, 10); // Only take the first 10 items from the data array

  const [successToast, setSuccessToast] = useState("");
  const [errorToast, setErrorToast] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClickProductHandler = (productid) => {
    navigate(`/products/${productid}`);
  };

  const cartHandler = async (item) => {
    const res = await dispatch(addToCartHandler(item));
    console.log(res);
    setSuccessToast(true);
    toast.success("Product added to cart", {
      position: "top-right",
    });
  };

  // const hotProducts = data.filter(item => item.tag.includes('hot'));
  const productHandler = (event) => {};
  useEffect(() => {}, [toast]);

  return (
    <>
      <ToastContainer />
      <section className="product-tabs section-padding position-relative">
        <div className="container">
          <div className="section-title style-2">
            <a style={{ cursor: "pointer" }}>
              <h3 style={{ textTransform: "uppercase", marginTop: "30px" }} onClick={productHandler}>
                Popular Products
              </h3>
            </a>
          </div>

          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
              <div className="row product-grid-4">
              {limitedData.map((product, index) => (
                <div className="col-lg-1-5 col-md-3 col-12 col-sm-6" key={index}>
                      <div className="product-cart-wrap mb-30">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <a>
                              <img className="default-img" src={item.productImage} alt="" />
                              <img className="hover-img" src="" alt="" />
                            </a>
                          </div>
                          <div className="product-action-1">
                            <a aria-label="Add To Wishlist" className="action-btn">
                              <i className="fi-rs-heart"></i>
                            </a>
                            <ModalQuickView product={product} />
                          </div>
                          <div className="product-badges product-badges-position product-badges-mrg">
                            <span className="hot" style={{ backgroundColor: "red" }}>
                              {item.tag}
                            </span>
                          </div>
                        </div>
                        <div className="product-content-wrap">
                          <div className="product-category">{/* <a >Snack</a> */}</div>
                          <h2>
                            <div onClick={() => onClickProductHandler(item._id)} style={{ cursor: "pointer" }}>
                              {item.title}
                            </div>
                          </h2>
                          <div className="product-rate-cover">
                            <div className="product-rate d-inline-block">
                              <div className="product-rating" style={{ width: "90%" }}></div>
                            </div>
                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                          </div>
                          <div>
                            <span className="font-small text-muted">
                              By <a href="vendor-details-1.html">Tags</a>
                            </span>
                          </div>
                          <div className="product-card-bottom">
                            <div className="product-price">
                              <span> &#8377; {item.SellingPrice || 3399}</span>
                              <span className="old-price">5000</span>
                            </div>
                            <div className="add-cart" onClick={() => cartHandler(item)}>
                              <a className="add">
                                <i className="fi-rs-shopping-cart mr-5"></i>Add{" "}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductTabSection;
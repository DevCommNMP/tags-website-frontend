import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
// import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { addToCartHandler } from "../../redux/actions/cart/cartActions";
// import ModalQuickView from "../ModalQuickView";
import ProductCard from "../ProductCard";

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

const LeatherSection = ({ data ,toasterHandler}) => {
  // const [successToast, setSuccessToast] = useState("");
  // const [errorToast, setErrorToast] = useState("");
  // const dispatch = useDispatch();

  // const navigate = useNavigate();
  // const onClickProductHandler = (productid) => {
  //   navigate(`/products/${productid}`);
  // };

  // const cartHandler = async (item) => {
  //   const res = await dispatch(addToCartHandler(item));
  //   console.log(res);
  //   setSuccessToast(true);
  //   toast.success("Product added to cart", {
  //     position: "top-right",
  //   });
  // };

  return (
    <>
      <section className="product-tabs section-padding position-relative bg-leather p-5">
        <div className="container">
          <div className="section-title style-2">
            <Link to="/categories/Premium Leather" style={{ cursor: "pointer" }}>
              <h3 style={{ textTransform: "uppercase" }}>Premium Leather</h3>
            </Link>
          </div>

          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
              <div className="row product-grid-4">
                <Slider {...settings}>
                {data.filter(product => product.isPremiumLeather === true && product.productSubImages.length > 0 ).map((product, index) => (
  <div className="col-lg-1-5 col-md-3 col-12 col-sm-6" key={index}>
 <ProductCard product={product} toasterHandler={toasterHandler} />
     </div>
))}

                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LeatherSection;

// import starRating from "../../assets/imgs/theme/rating-stars.png";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import SideBanner from "../SideBanner";
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
  slidesToShow: 4,
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

const NewArrival = ({ data }) => {
  const limitedData = data.slice(0, 10); // Only take the first 10 items from the data array

  // const [successToast, setSuccessToast] = useState("");
  // const [errorToast, setErrorToast] = useState("");
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const onClickProductHandler = (productid) => {
  //   navigate(`/products/${productid}`);
  // };
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

  // const hotProducts = data.filter(item => item.tag.includes('hot'));
  // const productHandler = (event) => {};
  // useEffect(() => {}, [toast]);

  // console.log(data);

  return (
    <>
      <section className="product-tabs section-padding position-relative pb-50">
        <div className="container">
          <div className="section-title style-2">
            <Link to="new-arrivals" style={{ cursor: "pointer" }}>
              <h3 style={{ textTransform: "uppercase" }}>New Arrivals</h3>
            </Link>
          </div>

          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
              <div className="row product-grid-4">
                <div className="col-lg-1-5 col-sm-12">
                  <SideBanner />
                </div>
                <div className="col-lg-4-5 col-sm-12">
                  <Slider {...settings}>
                    {data.map((product, index) => (
                      <div className="col-lg-1-5 col-md-3 col-12 col-sm-6" key={index}>
                        <ProductCard product={product} />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewArrival;
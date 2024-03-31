import ModalQuickView from "../ModalQuickView";
import starRating from "../../assets/imgs/theme/rating-stars.png";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
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

const dummydata = [
  {
    id: 1,
    name: "Item 1",
    image: "src/assets/drive-download-20240310T091457Z-001/ST 353 - Chique/img1.jpg",
  },
  {
    id: 2,
    name: "Item 2",
    image: "src/assets/drive-download-20240310T091457Z-001/ST 353 - Chique/img7.jpg",
  },
  {
    id: 3,
    name: "Item 3",
    image: "src/assets/drive-download-20240310T091457Z-001/ST 353 - Chique/img3.jpg",
  },
  {
    id: 4,
    name: "Item 4",
    image: "src/assets/drive-download-20240310T091457Z-001/ST 353 - Chique/img4.jpg",
  },
  {
    id: 5,
    name: "Item 5",
    image: "src/assets/drive-download-20240310T091457Z-001/ST 353 - Chique/img5.jpg",
  },
];
const LeatherSection = ({ data }) => {
  const navigate = useNavigate();
  const onClickProductHandler = (productid) => {
    navigate(`/products/${productid}`);
  };

  return (
    <>
      <section className="product-tabs section-padding position-relative bg-leather p-5">
        <div className="container">
          <div className="section-title style-2">
            <Link to="/premium-leather" style={{ cursor: "pointer" }}>
              <h3 style={{ textTransform: "uppercase" }}>Premium Leather</h3>
            </Link>
          </div>

          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
              <div className="row product-grid-4">
                <Slider {...settings}>
                  {/* {data.filter(item => item.category && item.category.name === "premium Leather").map((item) => ( */}
                  {data.map((product, index) => (
                    <div className="col-lg-1-4 col-md-3 col-12 col-sm-6 px-1" key={index}>
                      <div className="product-cart-wrap mb-30">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <Link to="/products/dummy">
                              <img className="default-img" src={product.productImage} alt="" />
                            </Link>
                          </div>
                          <div className="product-action-1">
                            <a aria-label="Add To Wishlist" className="action-btn">
                              <i className="fi-rs-heart"></i>
                            </a>
                            <ModalQuickView product={product} />
                          </div>
                          <div className="product-badges product-badges-position product-badges-mrg">
                            <span className={product.tag}>{product.tag}</span>
                          </div>
                        </div>
                        <div className="product-content-wrap">
                          <h2 className="text-center mt-3 mb-2">
                            {" "}
                            <Link to="/products/dummy">{product.title}</Link>{" "}
                          </h2>
                          <div className="product-rate-cover flex-align-justify-center"><span>Customer Rating :  </span>
                            <div className="product-rate d-inline-block" style={{ backgroundImage: `url(${starRating})` }}>
                              <div
                                className="product-rating"
                                style={{ width: `${20 * product.rating}%`, backgroundImage: `url(${starRating})` }}
                              ></div>
                            </div>
                            <span className="font-small ml-5 text-muted"> ({product.rating})</span>
                          </div>
                          <div className="product-rate-cover flex-align-justify-center"><span>Available Colors :</span>
                            {product.colorsAvailable.map((color, index) => (
                              <span key={index} className={`product-color-box product${color}`}></span>
                            ))}
                          </div>
                          <div className="product-card-bottom">
                            <div className="product-price">
                              <span>&#8377;{product.SellingPrice}</span>
                              <span className="old-price">&#8377;{product.SellingPrice}</span>
                            </div>
                            <div className="add-cart">
                              <a className="add">
                                <i className="fi-rs-shopping-cart mr-5"></i>Add{" "}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
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

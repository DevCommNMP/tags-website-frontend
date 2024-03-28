import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

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
    image: "/src/assets/drive-download-20240310T091457Z-001/ST 353 - Black/img1.jpg",
  },
  {
    id: 2,
    name: "Item 2",
    image: "/src/assets/drive-download-20240310T091457Z-001/ST 353 - Black/img3.jpg",
  },
  {
    id: 3,
    name: "Item 3",
    image: "/src/assets/drive-download-20240310T091457Z-001/ST 353 - Black/img3.jpg",
  },
  {
    id: 4,
    name: "Item 4",
    image: "/src/assets/drive-download-20240310T091457Z-001/ST 353 - Black/img4.jpg",
  },
  {
    id: 5,
    name: "Item 5",
    image: "/src/assets/drive-download-20240310T091457Z-001/ST 353 - Black/img5.jpg",
  },
];
const PremiumLeather = ({ data }) => {
  const navigate = useNavigate();
  const onClickProductHandler = (productid) => {
    navigate(`/products/${productid}`);
  };
  const cartHandler = async (id) => {
    console.log(id);
    let cart = localStorage.getItem("cart");

    if (cart) {
      // Parse the existing cart items from localStorage
      let existingCart;
      try {
        existingCart = JSON.parse(cart);
      } catch (error) {
        console.error("Error parsing existing cart:", error);
        existingCart = [];
      }

      // Ensure existingCart is an array
      if (!Array.isArray(existingCart)) {
        console.error("Existing cart is not an array:", existingCart);
        existingCart = [];
      }

      // Check if the item already exists in the cart
      const isItemInCart = existingCart.includes(id);

      if (!isItemInCart) {
        // If the item is not already in the cart, add it
        const updatedCart = [...existingCart, id];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
    } else {
      // If there is no cart in localStorage, create a new one with the current item
      localStorage.setItem("cart", JSON.stringify([id]));
    }
  };

  const products = data.filter((item) => item.tag.includes("trending"));

  return (
    <>
      <Header />

      <section className="product-tabs section-padding position-relative">
        <div className="container">
          <div className="section-title style-2">
            <h3> All Premium Leather Products</h3>
          </div>

          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
              <div className="row product-grid-4">
                <Slider {...settings}>
                  {products.map((item) => (
                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                      <div className="product-cart-wrap mb-30">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <a>
                              <img className="default-img" src={item.image} alt="" />
                              <img className="hover-img" src="" alt="" />
                            </a>
                          </div>
                          <div className="product-action-1">
                            <a aria-label="Add To Wishlist" className="action-btn">
                              <i className="fi-rs-heart"></i>
                            </a>
                            <a aria-label="Compare" className="action-btn">
                              <i className="fi-rs-shuffle"></i>
                            </a>
                            <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                              <i className="fi-rs-eye"></i>
                            </a>
                          </div>
                          <div className="product-badges product-badges-position product-badges-mrg">
                            <span className="hot">{item.tag}</span>
                          </div>
                        </div>
                        <div className="product-content-wrap">
                          <div className="product-category">
                            <a>Snack</a>
                          </div>
                          <h2>
                            <div onClick={() => onClickProductHandler(item.id)} style={{ cursor: "pointer" }}>
                              Seeds of Change Organic Quinoa, Brown, & Red Rice
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
                              By <a href="vendor-details-1.html">NestFood</a>
                            </span>
                          </div>
                          <div className="product-card-bottom">
                            <div className="product-price">
                              <span>$28.85</span>
                              <span className="old-price">$32.8</span>
                            </div>
                            <div className="add-cart" onClick={() => cartHandler(item.id)}>
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

export default PremiumLeather;

import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import SideBanner from "../SideBanner";
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

const NewArrival = ({ data,toasterHandler }) => {
  // console.log(data)
  const limitedData = data.slice(0, 10); 
    
  return (
    <>
      <section className="product-tabs section-padding position-relative pb-50">
        <div className="container">
          <div className="section-title style-2">
            <Link to="/all-categories" style={{ cursor: "pointer" }}>
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
                  {data
  .filter(product => 
    product.subcategory &&
    product.subcategory.subcategoriesName === "Festive Footwear" && 
    product.subcategory.subcategoriesName !=null &&// Ensure subcategory name matches
    product.productSubImages.length > 0 // Exclude products with premium leather
  )
  .map((product, index) => (
    <div className="col-lg-1-5 col-md-3 col-12 col-sm-6" key={index}>
      <ProductCard product={product} toasterHandler={toasterHandler} />
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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductCard from "../components/ProductCard";

const ProductTabSection = ({ data }) => {
  const limitedData = data.slice(0, 10); 
  
  return (
    <>
      <ToastContainer />
      <section className="product-tabs section-padding position-relative">
        <div className="container">
          <div className="section-title style-2">
            <a style={{ cursor: "pointer" }}>
              <h3 style={{ textTransform: "uppercase", marginTop: "30px" }}>Popular Products</h3>
            </a>
          </div>

          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
              <div className="row product-grid-4">
                {limitedData.map((product, index) => (
                  <div className="col-lg-1-5 col-md-3 col-12 col-sm-6" key={index}>
                    <ProductCard product={product} />
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
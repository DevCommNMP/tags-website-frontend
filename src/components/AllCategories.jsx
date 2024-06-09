import { Link } from "react-router-dom";
import img from  "../../src/assets/imgs/category/casual.png";
import formal from "../../src/assets/imgs/category/formal.png"
import ethnic from "../../src/assets/imgs/category/ethinic.png"
import party from "../../src/assets/imgs/category/Party.png"
import leather from "../../src/assets/imgs/category/leather.png"
import festive from "../../src/assets/imgs/category/festive.png"


const AllCategories = ({ categories }) => {
  console.log(categories)
  return (
    <div>
      <div className="container">
        <div className="row mb-50"></div>
        <div className="row vendor-grid">
          {categories.map((item, index) => (
            <div className="col-lg-3 col-md-3 col-12 col-sm-3" key={index}>
              <Link to={`/categories/${item.subcategoriesName}`}>
                <div className="vendor-wrap style-2 mb-40">
                  <div className="product-badges product-badges-position product-badges-mrg">{/* <span className="hot">Mall</span> */}</div>
                  <div className="vendor-img-action-wrap">
                    <div className="vendor-img">
                    {item.subcategoriesName=="Casual Footwear" &&  <img
                        className="default-img"
                        src={img}
                      />}
                     {item.subcategoriesName=="Formal Footwear" &&  <img
                        className="default-img"
                        src={formal}
                      />}
                         {item.subcategoriesName=="Ethnic Footwear" &&  <img
                        className="default-img"
                        src={ethnic}
                      />}
                       {item.subcategoriesName=="Party Footwear" &&  <img
                        className="default-img"
                        src={party}
                      />}
                       {item.subcategoriesName=="Premium Leather" &&  <img
                        className="default-img"
                        src={leather}
                      />}
                      {item.subcategoriesName=="Festive Footwear"&&"festive" &&  <img
                        className="default-img"
                        src={festive}
                      />}
                    </div>
                    <div className="mt-10">
                      <span className="font-small total-product">{item.subcategoriesName}</span>
                    </div>
                  </div>
                  <div className="vendor-content-wrap">
                    <div className="mb-30">
                      <div className="product-category">
                        <span className="text-muted">by Tags Footwear</span>
                      </div>
                      <h4 className="mb-5"></h4>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: "90%" }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted">Rating (4.0)</span>
                      </div>
                      <div className="vendor-info d-flex justify-content-between align-items-end mt-30">
                        <ul className="contact-infor text-muted"></ul>
                        <Link className="btn btn-xs" to={`/categories/${item.subcategoriesName}`}>
                          Buy Now <i className="fi-rs-arrow-small-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCategories;

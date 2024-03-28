import { Link } from "react-router-dom";

const AllCategories = ({ categories }) => {
  return (
    <div>
      <div className="container">
        <div className="row mb-50"></div>
        <div className="row vendor-grid">
          {categories.map((item, index) => (
            <div className="col-lg-6 col-md-6 col-12 col-sm-6" key={index}>
              <div className="vendor-wrap style-2 mb-40">
                <div className="product-badges product-badges-position product-badges-mrg">{/* <span className="hot">Mall</span> */}</div>
                <div className="vendor-img-action-wrap">
                  <div className="vendor-img">
                    <a href="/vendor-details-1">
                      <img
                        className="default-img"
                        src="data:image/jpeg;base64,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"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="mt-10">
                    <span className="font-small total-product">380 products</span>
                  </div>
                </div>
                <div className="vendor-content-wrap">
                  <div className="mb-30">
                    <div className="product-category">
                      <span className="text-muted">Since 2012</span>
                    </div>
                    <h4 className="mb-5">
                      <Link to={`/categories/${item.subcategoriesName}`}>{item.subcategoriesName}</Link>
                    </h4>
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
            </div>
          ))}
        </div>
        {/* <div className="pagination-area mt-20 mb-20">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-start">
              <li className="page-item">
                <a className="page-link" >
                  <i className="fi-rs-arrow-small-left"></i>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" >
                  1
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" >
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" >
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link dot" >
                  ...
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" >
                  6
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" >
                  <i className="fi-rs-arrow-small-right"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div> */}
      </div>
    </div>
  );
};

export default AllCategories;

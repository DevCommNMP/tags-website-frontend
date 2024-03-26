import category1 from '../assets/imgs/category/category-1.webp';
import category2 from '../assets/imgs/category/category-2.jpg';

const AllCategories = () => {
  return (
    <div>
      <div className="container">
        <div className="row mb-50">
          <div className="col-12 col-lg-8 mx-auto">
            <div className="shop-product-fillter">
              <div className="sort-by-product-area"></div>
            </div>
          </div>
        </div>
        <div className="row vendor-grid">
          <div className="col-lg-6 col-md-6 col-12 col-sm-6">
            <div className="vendor-wrap style-2 mb-40">
              <div className="product-badges product-badges-position product-badges-mrg">
                {/* <span className="hot">Mall</span> */}
              </div>
              <div className="vendor-img-action-wrap">
                <div className="vendor-img">
                  <a href="/vendor-details-1">
                    <img className="default-img" src={category1} alt="" />
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
                    <a href="/vendor-details-1">Nature Food</a>
                  </h4>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div className="product-rating" style={{ width: "90%" }}></div>
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div className="vendor-info d-flex justify-content-between align-items-end mt-30">
                    <ul className="contact-infor text-muted">
                      <li>
                        <img src="assets/imgs/theme/icons/icon-location.svg" alt="" />
                        <strong>Address: </strong> <span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</span>
                      </li>
                      <li>
                        <img src="assets/imgs/theme/icons/icon-contact.svg" alt="" />
                        <strong>Call Us:</strong>
                        <span>(+91) - 540-025-124553</span>
                      </li>
                    </ul>
                    <a className="btn btn-xs" href="/vendor-details-1">
                      Visit Store <i className="fi-rs-arrow-small-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 col-sm-6">
            <div className="vendor-wrap style-2 mb-40">
              <div className="product-badges product-badges-position product-badges-mrg">
                {/* <span className="best">Preferred</span> */}
              </div>
              <div className="vendor-img-action-wrap">
                <div className="vendor-img">
                  <a href="/vendor-details-1">
                    <img className="default-img" src={category2} alt="" />
                  </a>
                </div>
                <div className="mt-10">
                  <span className="font-small total-product">233 products</span>
                </div>
              </div>
              <div className="vendor-content-wrap">
                <div className="mb-30">
                  <div className="product-category">
                    <span className="text-muted">Since 2012</span>
                  </div>
                  <h4 className="mb-5">
                    <a href="/vendor-details-1">Mrs. Smith&apos;s Pie</a>
                  </h4>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div className="product-rating" style={{ width: "90%" }}></div>
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div className="vendor-info d-flex justify-content-between align-items-end mt-30">
                    <ul className="contact-infor text-muted">
                      <li>
                        <img src="assets/imgs/theme/icons/icon-location.svg" alt="" />
                        <strong>Address: </strong> <span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</span>
                      </li>
                      <li>
                        <img src="assets/imgs/theme/icons/icon-contact.svg" alt="" />
                        <strong>Call Us:</strong>
                        <span>(+91) - 540-025-124553</span>
                      </li>
                    </ul>
                    <a className="btn btn-xs" href="/vendor-details-1">
                      Visit Store <i className="fi-rs-arrow-small-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="pagination-area mt-20 mb-20">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-start">
              <li className="page-item">
                <a className="page-link" href="#">
                  <i className="fi-rs-arrow-small-left"></i>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link dot" href="#">
                  ...
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  6
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  <i className="fi-rs-arrow-small-right"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AllCategories;

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Wishlist = () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="page-header breadcrumb-wrap">
          <div className="container">
            <div className="breadcrumb">
              <a href="index.html" rel="nofollow">
                <i className="fi-rs-home mr-5"></i>Home
              </a>
              <span></span> Shop <span></span> Fillter
            </div>
          </div>
        </div>
        <div className="container mb-30 mt-50">
          <div className="row">
            <div className="col-xl-10 col-lg-12 m-auto">
              <div className="mb-50">
                <h1 className="heading-2 mb-10">Your Wishlist</h1>
                <h6 className="text-body">
                  There are <span className="text-brand">5</span> products in this list
                </h6>
              </div>
              <div className="table-responsive shopping-summery">
                <table className="table table-wishlist">
                  <thead>
                    <tr className="main-heading">
                      <th className="custome-checkbox start pl-30">
                        <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox11" value="" />
                        <label className="form-check-label" htmlFor="exampleCheckbox11"></label>
                      </th>
                      <th scope="col" colSpan="2">
                        Product
                      </th>
                      <th scope="col">Price</th>
                      <th scope="col">Stock Status</th>
                      <th scope="col">Action</th>
                      <th scope="col" className="end">
                        Remove
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="pt-30">
                      <td className="custome-checkbox pl-30">
                        <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" value="" />
                        <label className="form-check-label" htmlFor="exampleCheckbox1"></label>
                      </td>
                      <td className="image product-thumbnail pt-40">
                        <img src="assets/imgs/shop/product-1-1.jpg" alt="#" />
                      </td>
                      <td className="product-des product-name">
                        <h6>
                          <a className="product-name mb-10" >
                            Field Roast Chao Cheese Creamy Original
                          </a>
                        </h6>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div className="product-rating" style={{width:'90%'}}></div>
                          </div>
                          <span className="font-small ml-5 text-muted"> (4.0)</span>
                        </div>
                      </td>
                      <td className="price" data-title="Price">
                        <h3 className="text-brand">$2.51</h3>
                      </td>
                      <td className="text-center detail-info" data-title="Stock">
                        <span className="stock-status in-stock mb-0"> In Stock </span>
                      </td>
                      <td className="text-right" data-title="Cart">
                        <button className="btn btn-sm">Add to cart</button>
                      </td>
                      <td className="action text-center" data-title="Remove">
                        <a  className="text-body">
                          <i className="fi-rs-trash"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="custome-checkbox pl-30">
                        <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox2" value="" />
                        <label className="form-check-label" htmlFor="exampleCheckbox2"></label>
                      </td>
                      <td className="image product-thumbnail">
                        <img src="assets/imgs/shop/product-2-1.jpg" alt="#" />
                      </td>
                      <td className="product-des product-name">
                        <h6>
                          <a className="product-name mb-10" >
                            Blue Diamond Almonds Lightly Salted
                          </a>
                        </h6>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div className="product-rating" style={{width:'90%'}}></div>
                          </div>
                          <span className="font-small ml-5 text-muted"> (4.0)</span>
                        </div>
                      </td>
                      <td className="price" data-title="Price">
                        <h3 className="text-brand">$3.2</h3>
                      </td>
                      <td className="text-center detail-info" data-title="Stock">
                        <span className="stock-status in-stock mb-0"> In Stock </span>
                      </td>
                      <td className="text-right" data-title="Cart">
                        <button className="btn btn-sm">Add to cart</button>
                      </td>
                      <td className="action text-center" data-title="Remove">
                        <a  className="text-body">
                          <i className="fi-rs-trash"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="custome-checkbox pl-30">
                        <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox3" value="" />
                        <label className="form-check-label" htmlFor="exampleCheckbox3"></label>
                      </td>
                      <td className="image product-thumbnail">
                        <img src="assets/imgs/shop/product-3-1.jpg" alt="#" />
                      </td>
                      <td className="product-des product-name">
                        <h6>
                          <a className="product-name mb-10" >
                            Fresh Organic Mustard Leaves Bell Pepper
                          </a>
                        </h6>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div className="product-rating" style={{width:'90%'}}></div>
                          </div>
                          <span className="font-small ml-5 text-muted"> (4.0)</span>
                        </div>
                      </td>
                      <td className="price" data-title="Price">
                        <h3 className="text-brand">$2.43</h3>
                      </td>
                      <td className="text-center detail-info" data-title="Stock">
                        <span className="stock-status in-stock mb-0"> In Stock </span>
                      </td>
                      <td className="text-right" data-title="Cart">
                        <button className="btn btn-sm">Add to cart</button>
                      </td>
                      <td className="action text-center" data-title="Remove">
                        <a  className="text-body">
                          <i className="fi-rs-trash"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="custome-checkbox pl-30">
                        <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox4" value="" />
                        <label className="form-check-label" htmlFor="exampleCheckbox4"></label>
                      </td>
                      <td className="image product-thumbnail">
                        <img src="assets/imgs/shop/product-4-1.jpg" alt="#" />
                      </td>
                      <td className="product-des product-name">
                        <h6>
                          <a className="product-name mb-10" >
                            Angie’s Boomchickapop Sweet & Salty{" "}
                          </a>
                        </h6>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div className="product-rating" style={{width:'90%'}}></div>
                          </div>
                          <span className="font-small ml-5 text-muted"> (4.0)</span>
                        </div>
                      </td>
                      <td className="price" data-title="Price">
                        <h3 className="text-brand">$3.21</h3>
                      </td>
                      <td className="text-center detail-info" data-title="Stock">
                        <span className="stock-status out-stock mb-0"> Out Stock </span>
                      </td>
                      <td className="text-right" data-title="Cart">
                        <button className="btn btn-sm btn-secondary">Contact Us</button>
                      </td>
                      <td className="action text-center" data-title="Remove">
                        <a  className="text-body">
                          <i className="fi-rs-trash"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="custome-checkbox pl-30">
                        <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox5" value="" />
                        <label className="form-check-label" htmlFor="exampleCheckbox5"></label>
                      </td>
                      <td className="image product-thumbnail">
                        <img src="assets/imgs/shop/product-5-1.jpg" alt="#" />
                      </td>
                      <td className="product-des product-name">
                        <h6>
                          <a className="product-name mb-10" >
                            Foster Farms Takeout Crispy Classic
                          </a>
                        </h6>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div className="product-rating" style={{width:'90%'}}></div>
                          </div>
                          <span className="font-small ml-5 text-muted"> (4.0)</span>
                        </div>
                      </td>
                      <td className="price" data-title="Price">
                        <h3 className="text-brand">$3.17</h3>
                      </td>
                      <td className="text-center detail-info" data-title="Stock">
                        <span className="stock-status in-stock mb-0"> In Stock </span>
                      </td>
                      <td className="text-right" data-title="Cart">
                        <button className="btn btn-sm">Add to cart</button>
                      </td>
                      <td className="action text-center" data-title="Remove">
                        <a  className="text-body">
                          <i className="fi-rs-trash"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Wishlist;

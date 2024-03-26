import { useState } from "react";
import UserImg from "../../assets/imgs/theme/user-profile-img.jpg";
import { Link } from "react-router-dom";

const Account = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="page-content pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 m-auto">
              <div className="row">
                <div className="col-md-3">
                  <div className="dashboard-menu">
                    <ul className="nav flex-column" role="tablist">
                      <li className="nav-item">
                        <a
                          className={`nav-link ${activeTab === "dashboard" ? "active" : ""}`}
                          onClick={() => handleTabClick("dashboard")}
                          role="tab"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link ${activeTab === "orders" ? "active" : ""}`}
                          onClick={() => handleTabClick("orders")}
                          role="tab"
                        >
                          Orders
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link ${activeTab === "track-orders" ? "active" : ""}`}
                          onClick={() => handleTabClick("track-orders")}
                          role="tab"
                        >
                          Track Your Order
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link ${activeTab === "address" ? "active" : ""}`}
                          onClick={() => handleTabClick("address")}
                          role="tab"
                        >
                          My Address
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link ${activeTab === "account-detail" ? "active" : ""}`}
                          onClick={() => handleTabClick("account-detail")}
                          role="tab"
                        >
                          Account details
                        </a>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/login">
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="tab-content account dashboard-content pl-50">
                    <div className={`tab-pane fade ${activeTab === "dashboard" ? "show active" : ""}`} role="tabpanel">
                      <div className="card">
                        <div className="card-header text-white">
                          <h3 className="mb-0">Welcome, Ileana D&apos;Cruz!</h3>
                        </div>
                        <div className="card-body">
                          <div className="row align-items-center">
                            <div className="col-md-4">
                              <img src={UserImg} className="img-fluid rounded-circle" alt="Profile" />
                            </div>
                            <div className="col-md-8">
                              <p className="lead">
                                From your account dashboard, you can easily check & view your recent orders, manage your{" "}
                                shipping and billing addresses, and edit your password and account details.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`tab-pane fade ${activeTab === "orders" ? "show active" : ""}`} role="tabpanel">
                      <div className="card">
                        <div className="card-header">
                          <h3 className="mb-0">Your Orders</h3>
                        </div>
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th>Order</th>
                                  <th>Date</th>
                                  <th>Status</th>
                                  <th>Total</th>
                                  <th>Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>#1357</td>
                                  <td>March 45, 2020</td>
                                  <td>Processing</td>
                                  <td>$125.00 for 2 item</td>
                                  <td>
                                    <Link to="/invoice" className="btn-small d-block">
                                      View
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>#2468</td>
                                  <td>June 29, 2020</td>
                                  <td>Completed</td>
                                  <td>$364.00 for 5 item</td>
                                  <td>
                                    <Link to="/invoice" className="btn-small d-block">
                                      View
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>#2366</td>
                                  <td>August 02, 2020</td>
                                  <td>Completed</td>
                                  <td>$280.00 for 3 item</td>
                                  <td>
                                    <Link to="/invoice" className="btn-small d-block">
                                      View
                                    </Link>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`tab-pane fade ${activeTab === "track-orders" ? "show active" : ""}`} role="tabpanel">
                      <div className="card">
                        <div className="card-header">
                          <h3 className="mb-0">Orders tracking</h3>
                        </div>
                        <div className="card-body contact-from-area">
                          <p>
                            To track your order please enter your OrderID in the box below and press &quot;Track&quot; button. This was given to you
                            on your receipt and in the confirmation email you should have received.
                          </p>
                          <div className="row">
                            <div className="col-lg-8">
                              <form className="contact-form-style mt-30 mb-50" action="#" method="post">
                                <div className="input-style mb-20">
                                  <label>Order ID</label>
                                  <input name="order-id" placeholder="Found in your order confirmation email" type="text" />
                                </div>
                                <div className="input-style mb-20">
                                  <label>Billing email</label>
                                  <input name="billing-email" placeholder="Email you used during checkout" type="email" />
                                </div>
                                <button className="submit submit-auto-width" type="submit">
                                  Track
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`tab-pane fade ${activeTab === "address" ? "show active" : ""}`} role="tabpanel">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="card mb-3 mb-lg-0">
                            <div className="card-header">
                              <h3 className="mb-0">Billing Address</h3>
                            </div>
                            <div className="card-body">
                              <address>
                                3522 Interstate
                                <br />
                                75 Business Spur,
                                <br />
                                Sault Ste. <br />
                                Marie, MI 49783
                              </address>
                              <p>New York</p>
                              <a href="#" className="btn-small">
                                Edit
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="card">
                            <div className="card-header">
                              <h5 className="mb-0">Shipping Address</h5>
                            </div>
                            <div className="card-body">
                              <address>
                                4299 Express Lane
                                <br />
                                Sarasota, <br />
                                FL 34249 USA <br />
                                Phone: 1.941.227.4444
                              </address>
                              <p>Sarasota</p>
                              <a href="#" className="btn-small">
                                Edit
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`tab-pane fade ${activeTab === "account-detail" ? "show active" : ""}`} role="tabpanel">
                      <div className="card">
                        <div className="card-header">
                          <h5>Account Details</h5>
                        </div>
                        <div className="card-body">
                          <p>
                            Already have an account? <Link to="/login">Log in instead!</Link>
                          </p>
                          <form method="post" name="enq">
                            <div className="row">
                              <div className="form-group col-md-6">
                                <label>
                                  First Name <span className="required">*</span>
                                </label>{" "}
                                <input required="" className="form-control" name="name" type="text" />
                              </div>
                              <div className="form-group col-md-6">
                                <label>
                                  Last Name <span className="required">*</span>
                                </label>
                                <input required="" className="form-control" name="phone" />
                              </div>
                              <div className="form-group col-md-12">
                                <label>
                                  Display Name <span className="required">*</span>
                                </label>
                                <input required="" className="form-control" name="dname" type="text" />
                              </div>
                              <div className="form-group col-md-12">
                                <label>
                                  Email Address <span className="required">*</span>
                                </label>
                                <input required="" className="form-control" name="email" type="email" />
                              </div>
                              <div className="form-group col-md-12">
                                <label>
                                  Current Password <span className="required">*</span>
                                </label>
                                <input required="" className="form-control" name="password" type="password" />
                              </div>
                              <div className="form-group col-md-12">
                                <label>
                                  New Password <span className="required">*</span>
                                </label>
                                <input required="" className="form-control" name="npassword" type="password" />
                              </div>
                              <div className="form-group col-md-12">
                                <label>
                                  Confirm Password <span className="required">*</span>
                                </label>
                                <input required="" className="form-control" name="cpassword" type="password" />
                              </div>
                              <div className="col-md-12">
                                <button type="submit" className="btn btn-fill-out submit font-weight-bold" name="submit" value="Submit">
                                  Save Change
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;

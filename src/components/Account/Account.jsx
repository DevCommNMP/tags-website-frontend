import { useState } from "react";
import UserImg from "../../assets/imgs/theme/user-profile-img.jpg";
import {useNavigate,Link } from "react-router-dom";

import {  useDispatch,useSelector } from 'react-redux';
import { Slide, toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { fetchUserDetails } from "../../redux/actions/user/userActions";
const Account = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const navigate = useNavigate();
const dispatch=useDispatch();

const storeData = useSelector((store) => store.auth);
const orderData = useSelector((store) => store.order);
const { user} = storeData;
const { userdata,loading,appErr,serverErr } = orderData;

console.log(userdata)
const UserData=JSON.parse(localStorage.getItem("userData"));
// console.log(UserData.email)
useEffect(() => {
  dispatch(fetchUserDetails(UserData.email))
if((user )){
  toast("Login successfully!");
}``
}, [])


  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const logoutHandler=async()=>{
    await localStorage.removeItem("userData")
    navigate('/login')
  }
  // console.log(user)
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
                      <li className="nav-item" onClick={logoutHandler}>
                        <a className="nav-link">
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="tab-content account dashboard-content pl-50">
                    <div className={`tab-pane fade ${activeTab === "dashboard" ? "show active" : ""}`} role="tabpanel">
                      <div className="card">
                        <div className="card-header text-white">
                          <h3 className="mb-0">Welcome,{user. userName ||UserData.userName}</h3>
                        </div>
                        <div className="card-body">
                          <div className="row align-items-center">
                            <div className="col-md-4">
                              <img src={UserImg} className="img-fluid rounded-circle" alt="Profile" />
                            </div>
                            <div className="col-md-8">
                              <p className="lead">
                                From your account dashboard, you can easily check & view your recent orders, manage your shipping and
                                billing addresses, and edit your password and account details.
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

                         {userdata.order ? <table className="table">
  <thead>
    <tr>
      <th>#</th>
      <th>Order</th>
      <th>Date</th>
      <th>Order Status</th>
      <th>Payment Status</th>
     
      <th>Actions</th>
    </tr>
  </thead>
 <tbody>
    {userdata.order.map((orderItem, index) => (
      <tr key={orderItem._id}>
        <td>{index + 1}</td>
        <td>{orderItem.orderId}</td>
        <td>{new Date(orderItem.orderDate).toLocaleDateString('en-US')}</td>
        <td>{orderItem.orderStatus}</td>
        <td style={{ color: orderItem.PaymentStatus === "Paid" ? "green" : "red" }}>
  {orderItem.PaymentStatus}
</td>
        {/* Assuming you have a field named "total" in your orderItem */}
        
        <td>
          <Link to={`/invoice/${orderItem._id}`} className="btn-small d-block">
            View
          </Link>
        </td>
      </tr>
    ))}
  </tbody>
</table>:<h1>Orders Not Found</h1>} 
 

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
                            To track your order please enter your OrderID in the box below and press &quot;Track&quot; button. This was
                            given to you on your receipt and in the confirmation email you should have received.
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
                              <a className="btn-small">Edit</a>
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
                              <a className="btn-small">Edit</a>
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

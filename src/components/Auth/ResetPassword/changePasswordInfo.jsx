import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
// import verifyEmailImg from "../../assets/imgs/page/email-green.avif";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { verifyEmail } from "../../redux/actions/auth/authActions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import forgetpasswordImg from '../../../assets/imgs/forgot-password.gif'
const ChangePasswordMsg = () => {
  const { token } = useParams(); // Retrieve token from URL parameters
//   const storeData = useSelector((store) => store.auth);
//   const { emailVerified, loading, appErr, serverErr } = storeData;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // State for login button activation

  useEffect(() => {
    // if (token) {
    //   const verifyUser = async () => {
    //     try {
    //       const res = await dispatch(verifyEmail(token)); // Dispatch verifyEmail action with token as a parameter
    //       if (res.error) {
    //         toast.error(res.error.message);
    //       } else {
    //         toast.success("Account verified Successfully");
    //       }
    //     } catch (error) {
    //       toast.error(appErr || serverErr || error.message);
    //     }
    //   };
    //   verifyUser();
    // }

   
  }, []); // Add dependencies to useEffect

  const buttonHandler = () => {
    navigate("/login");
  };

  return (
    <>
      <ToastContainer />
      <Header />
      <div className="main pages">
        <div className="page-header breadcrumb-wrap">
          <div className="container">
            {/* <div className="breadcrumb">
              <a rel="nofollow">
                <Link to="/">
                <i className="fi-rs-home mr-5"></i>Home
                </Link>
              </a>
              <span></span> My Account
            </div> */}
          </div>
        </div>
        <div className="page-content pt-50 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-12 m-auto">
                <div className="login_wrap widget-taber-content background-white">
                  <div className="padding_eight_all bg-white">
                    <div className="heading_s1">
                      <h2 className="mb-15 mt-15 text-center"></h2>
                      <img className="border-radius-15" src={forgetpasswordImg} alt="" />
                      <p className="mb-30">
                        An email has been sent to your email address.Please check your inbox and follow the instructions to change your password.
                      </p>
                      {/* {emailVerified && <Button onClick={buttonHandler}>Login Now</Button>} */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ChangePasswordMsg;

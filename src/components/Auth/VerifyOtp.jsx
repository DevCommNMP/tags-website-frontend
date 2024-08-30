import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import verifyEmailImg from "../../assets/imgs/page/email-green.avif";
import { useDispatch, useSelector } from "react-redux";
import { verifyEmail } from "../../redux/actions/auth/authActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import OtpInput from "react-otp-input";
import "./verify-otp.css";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const { token } = useParams();
  const storeData = useSelector((store) => store.auth);
  const { emailVerified, loading, appErr, serverErr } = storeData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      const verifyUser = async () => {
        try {
          const res = await dispatch(verifyEmail(token));
          if (res.error) {
            toast.error(res.error.message);
          } else {
            toast.success("Account verified Successfully");
          }
        } catch (error) {
          toast.error(appErr || serverErr || error.message || "An unexpected error occurred");
        }
      };
      verifyUser();
    }
  }, [token, dispatch, appErr, serverErr]);

  const handleOtpSubmit = () => {
    console.log("Submitted OTP: ", otp);
    // Add OTP verification logic here
  };

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
            <div className="breadcrumb">
              <Link to="/">
                <i className="fi-rs-home mr-5"></i>Home
              </Link>
              <span></span> My Account
            </div>
          </div>
        </div>
        <div className="page-content pt-50 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-12 m-auto">
                <div className="login_wrap widget-taber-content background-white">
                  <div className="padding_eight_all bg-white">
                    <div className="heading_s1">
                      <h2 className="mb-15 mt-15 text-center">Email Verification</h2>
                      <img className="border-radius-15" src="https://img.freepik.com/free-vector/my-password-concept-illustration_114360-4294.jpg?w=826&t=st=1725003482~exp=1725004082~hmac=bcb0742400dc63055de24beb665676abd551141cb549e7898c4b19c9d1aa8b38" alt="" />
                      <div className="otp-input">
                        <OtpInput
                          value={otp}
                          onChange={setOtp}
                          numInputs={6}
                          renderSeparator={<span>-</span>}
                          renderInput={(props) => <input {...props} />}
                        />

                        <Button onClick={handleOtpSubmit} variant="primary" className="mt-3">
                          Submit OTP
                        </Button>
                      </div>
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

export default VerifyOtp;

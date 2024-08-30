import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import OtpInput from "react-otp-input";
import "./verify-otp.css";
import { baseUrl } from "../../utils/baseUrl";
import otpImg from "../../assets/imgs/svgs/verify-otp.svg";
import axios from "axios";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false); // To handle loading state
  const [resendDisabled, setResendDisabled] = useState(true); // Resend button disabled state
  const [timeLeft, setTimeLeft] = useState(60); // Timer for resend button
  const { phoneNumber } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (phoneNumber) {
      fetchOtpData();
      startResendTimer(); // Start the timer when the component mounts
    }
  }, [phoneNumber]);

  const fetchOtpData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${baseUrl}/api/otp/getotpdata`, {
        params: { phoneNumber }, // Use params to send query parameters
      });
      setLoading(false);
      if (res.data.error) {
        toast.error(res.data.error.message);
      } else {
        toast.success("OTP Sent Successfully");
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.response?.data?.message || "An unexpected error occurred");
    }
  };

  const startResendTimer = () => {
    setResendDisabled(true);
    const countdown = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(countdown);
          setResendDisabled(false);
          return 60;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const handleOtpSubmit = async () => {
    if (otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }
    try {
      setLoading(true);
      const res = await axios.post(`${baseUrl}/api/otp/verifyotp`, {
        phoneNumber,
        otp,
      });
      setLoading(false);
      if (res.status === 200) {
        toast.success("OTP Verified Successfully");
        navigate("/login");
      } else {
        toast.error("Invalid OTP");
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.response?.data?.message || "Verification failed");
    }
  };

  const handleResendOtp = async () => {
    if (!phoneNumber) {
      toast.error("Something went wrong, try again");
      return;
    }
    try {
      setLoading(true);
      const res = await axios.post(`${baseUrl}/api/otp/resendotp`, {
        phoneNumber,
      });
      setLoading(false);
      if (res.status === 200) {
        toast.success("OTP Resent Successfully");
      } else {
        toast.error("Failed to resend OTP");
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.response?.data?.message || "Failed to resend OTP");
    }
    startResendTimer(); // Restart the timer when OTP is resent
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
                      <h2 className="mb-15 mt-15 text-center">OTP Verification</h2>
                      <img
                        className="border-radius-15"
                        src={otpImg}
                        alt="Verification Illustration"
                      />
                      <div className="otp-input">
                        <OtpInput
                          value={otp}
                          onChange={setOtp}
                          numInputs={6}
                          renderSeparator={<span>-</span>}
                          renderInput={(props) => <input {...props} />}
                        />
                        <Button
                          onClick={handleOtpSubmit}
                          variant="primary"
                          className="mt-3"
                          disabled={loading || otp.length !== 6} // Disable button while loading or until OTP is fully entered
                        >
                          {loading ? "Verifying..." : "Submit OTP"}
                        </Button>
                        <Button
                          onClick={handleResendOtp}
                          variant="link"
                          className="mt-3"
                          disabled={resendDisabled} // Disable resend button for 1 minute
                          style={{ color: "black" }}
                        >
                          {resendDisabled ? `Resend OTP in ${timeLeft}s` : "Resend OTP"}
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

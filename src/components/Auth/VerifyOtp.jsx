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
import axios from "axios";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false); // To handle loading state
  const { phoneNumber } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (phoneNumber) {
      const fetchOtpData = async () => {
        try {
          setLoading(true);
          const res = await axios.get(`${baseUrl}/api/otp/getotpdata`, {
            params: { phoneNumber } // Use params to send query parameters
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
      fetchOtpData();
    }
  }, [phoneNumber]);

  const handleOtpSubmit = async () => {
    if (otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }
    try {
      setLoading(true);
      const res = await axios.post(`${baseUrl}/api/otp/verifyotp`, {
        phoneNumber,
        otp
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
                      <img className="border-radius-15" src="https://img.freepik.com/free-vector/my-password-concept-illustration_114360-4294.jpg?w=826&t=st=1725003482~exp=1725004082~hmac=bcb0742400dc63055de24beb665676abd551141cb549e7898c4b19c9d1aa8b38" alt="Verification Illustration" />
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
                          disabled={loading} // Disable button while loading
                        >
                          {loading ? "Verifying..." : "Submit OTP"}
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

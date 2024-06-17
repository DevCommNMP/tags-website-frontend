import { Link,useNavigate } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";
import { ToastContainer, toast } from 'react-toastify';

const   ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onSubmitHandler = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true); // Set loading state to true

    if (email) { // Assuming 'email' is defined somewhere in your code
        try {
            // Make a POST request to the backend to check if the user exists
            const user = await axios.post(`${baseUrl}/api/getUser`, { email });
            // console.log(user);
            if (user.data.success === false) {
                // If user does not exist, display an error message
                toast.error("Invalid Email");
                setLoading(false); // Set loading state to false
                return; // Exit the function
            }

            // If user exists, proceed with sending forgot password request
            const res = await axios.post(`${baseUrl}/api/forgot-password`, { email });
            navigate("/forgot-password-message"); // Navigate to forgot password message page
        } catch (error) {
            // Handle errors if any occurred during the axios requests
            toast.error("Invalid Email");
            setLoading(false); // Set loading state to false
        }
    }

    setLoading(false); // Set loading state to false after completion
};


  const inputHandler = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <ToastContainer/>
      <Header />
      <div className="main pages">
        <div className="page-header breadcrumb-wrap">
          <div className="container">
            <div className="breadcrumb">
              <Link to="/">
                <i className="fi-rs-home mr-5"></i>Home
              </Link>
              <span></span> Forgot Password
            </div>
          </div>
        </div>
        <div className="page-content pt-150 pb-150">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-12 m-auto">
                <div className="login_wrap widget-taber-content background-white">
                  <div className="padding_eight_all bg-white">
                    <div className="heading_s1">
                      <img
                        className="border-radius-15"
                        src="assets/imgs/page/forgot_password.svg"
                        alt=""
                      />
                      <h2 className="mb-15 mt-15">Forgot your password?</h2>
                      <p className="mb-30">
                        Not to worry, we got you! Let’s get you a new password.
                        Please enter your email address or your Username.
                      </p>
                    </div>
                    <form onSubmit={onSubmitHandler}>
                      <div className="form-group">
                        <input
                          type="email"
                          required=""
                          name="email"
                          placeholder="Enter your  email *"
                          onChange={inputHandler}
                        />
                      </div>
                      <div className="form-group">
                        <button className="btn btn-heading btn-block hover-up">
                         {loading?"Loading":"Reset password"} 
                        </button>
                      </div>  
                    </form>
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

export default ResetPassword;

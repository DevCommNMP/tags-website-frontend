import { Link, useParams, useNavigate } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { verifyResetPasswordToken,updatePassword } from "../../../redux/actions/auth/authActions";

const ResetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // State variables for form data and errors
  const storeData = useSelector((store) => store.auth);
  const { ValidPasswordResetToken, loading, appErr, serverErr } = storeData;

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }

    dispatch(verifyResetPasswordToken({token}))
      .then((action) => {
        if (!action.payload.success) {
          toast.error(action.payload.message);
          // navigate('/login');
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Something went wrong. Please try again.");
        // navigate('/login');
      });
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if passwords match
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
  
    try {
      const data = { password, token };
      const action = await dispatch(updatePassword(data));
  
      // Check if the action contains an error
      if (action.error) {
        toast.error("Failed to update password. Please try again.");
      } else if (action.payload.success) {
        toast.success(action.payload.message);
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      } else {
        toast.error(action.payload.message);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.");
    }
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
              <span>My Account</span>
            </div>
          </div>
        </div>
        <div className="page-content pt-150 pb-150">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-8 col-md-12 m-auto">
                <div className="row">
                  <div className="heading_s1">
                    <img className="border-radius-15" src="assets/imgs/page/reset_password.svg" alt="" />
                    <h2 className="mb-15 mt-15">Set new password</h2>
                    <p className="mb-30">Please create a new password that you don’t use on any other site.</p>
                  </div>
                  <div className="col-lg-6 col-md-8">
                    <div className="login_wrap widget-taber-content background-white">
                      <div className="padding_eight_all bg-white">
                        <form onSubmit={handleSubmit}>
                          <div className="form-group">
                            <input
                              type="password"
                              required
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              placeholder="Password *"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              required
                              value={confirmPassword}
                              onChange={(e) => setConfirmPassword(e.target.value)}
                              placeholder="Confirm your password *"
                            />
                          </div>
                          <div className="form-group">
                          {ValidPasswordResetToken ? (
  <button
    type="submit"
    className="btn btn-heading btn-block hover-up"
    name="login"
    disabled={loading}
  >
    Reset password
  </button>
) : null}

                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 pl-50">
                    <h6 className="mb-15">Password must:</h6>
                    <p>Be between 9 and 64 characters</p>
                    <p>Include at least two of the following:</p>
                    <ol className="list-insider">
                      <li>An uppercase character</li>
                      <li>A lowercase character</li>
                      <li>A number</li>
                      <li>A special character</li>
                    </ol>
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

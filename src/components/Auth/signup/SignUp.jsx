import { useEffect, useState } from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import logoGoogle from "../../../assets/imgs/theme/icons/logo-google.svg";
import SignUpImg from "../../../assets/imgs/page/signup.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUserAction } from "../../../redux/actions/auth/authActions";
import PhoneInput from "react-phone-input-2"; // Import the PhoneInput component
import "react-phone-input-2/lib/style.css";  // Import the CSS for PhoneInput

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const storeData = useSelector((store) => store.auth);
  const { registered, loading, appErr, serverErr } = storeData;

  useEffect(() => {}, [appErr, serverErr]);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "customer", // Default to 'customer'
    phoneNumber: "",      // Phone number with country code
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phoneNumber: value, // Set the phone number with country code
    });
  };

  const userRegisterHandler = async (e) => {
    e.preventDefault();

    const validationResult = validateForm(formData);
    if (Object.keys(validationResult).length === 0) {
      console.log(formData)
      const res = await dispatch(registerUserAction(formData));
      if (!res.error) {
        navigate(`/verify-otp/${formData.phoneNumber}`);
      } else {
        // Handle error
      }
    } else {
      // Handle validation error
    }
  };

  const validateForm = (formData) => {
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    }

    setErrors(newErrors);
    return newErrors;
  };

  return (
    <>
      <Header />
      <div className="page-content pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
              <div className="row">
                <div className="col-lg-6 col-md-8">
                  <div className="login_wrap widget-taber-content background-white">
                    <div className="padding_eight_all bg-white">
                      <div className="heading_s1">
                        <h1 className="mb-5">Create an Account</h1>
                        <p className="mb-30">
                          Already have an account?{" "}
                          <Link to="/login" onClick={() => navigate("/login")}>
                            Login
                          </Link>
                        </p>
                      </div>
                      <form onSubmit={userRegisterHandler}>
                        {(appErr || serverErr) && <p style={{ color: "red", fontWeight: 900 }}>{appErr || serverErr}</p>}
                        <div className="form-group">
                          <input
                            type="text"
                            required
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            placeholder="Username"
                          />
                          {errors.username && <div className="text-danger">{errors.username}</div>}
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            required
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Email"
                          />
                          {errors.email && <div className="text-danger">{errors.email}</div>}
                        </div>
                        <div className="form-group">
                          <input
                            required
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="Password"
                          />
                          {errors.password && <div className="text-danger">{errors.password}</div>}
                        </div>
                        <div className="form-group">
                          <input
                            required
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            placeholder="Confirm password"
                          />
                          {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
                        </div>
                        <div className="form-group">
                          <PhoneInput
                            country={'us'}  // Set default country
                            value={formData.phoneNumber}
                            onChange={handlePhoneChange}
                            inputStyle={{ width: '100%' }}
                            required
                          />
                          {errors.phoneNumber && <div className="text-danger">{errors.phoneNumber}</div>}
                        </div>
                        <div className="form-group mb-30">
                          <button
                            type="submit"
                            style={{
                              width: "100%",
                              borderRadius: "100px",
                              border: "1px solid transparent",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                            className="mb-4 btn btn-fill-out btn-block hover-up font-weight-bold"
                            name="login"
                          >
                            {loading ? "Loading" : "Submit & Register"}
                          </button>
                        </div>
                        <p className="font-xs text-muted">
                          <strong>Note:</strong> Your personal data will be used to support your experience throughout this website, to
                          manage access to your account, and for other purposes described in our privacy policy
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 pr-30 d-none d-lg-block"
                  style={{ backgroundImage: `url(${SignUpImg})`, backgroundSize: "cover" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;

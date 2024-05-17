import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../../../redux/actions/auth/authActions";
import LoginImg from "../../../assets/imgs/page/login.jpg";
import Footer from "../../Footer/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const storeData = useSelector((store) => store.auth);
  const { loading, appErr, serverErr } = storeData;

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (appErr || serverErr) {
      toast.error(appErr || serverErr);
    }
  }, [appErr, serverErr]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    const validationResult = validateForm(formData);
    if (Object.keys(validationResult).length === 0) {
      const res = await dispatch(loginUserAction(formData));
      if (!res.error) {
        navigate("/profile");
      }
    }
  };

  const validateForm = (data) => {
    const newErrors = {};
    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      newErrors.email = "Invalid email address";
    }
    return newErrors;
  };

  return (
    <>
      <ToastContainer />
      <Header />
      <div className="page-content pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
              <div className="row">
                <div className="col-lg-6 pr-30 d-none d-lg-block">
                  <img className="border-radius-15" src={LoginImg} alt="" />
                </div>
                <div className="col-lg-6 col-md-8">
                  <div className="login_wrap widget-taber-content background-white">
                    <div className="padding_eight_all bg-white">
                      <div className="heading_s1">
                        <h1 className="mb-5">Login</h1>
                        <p className="mb-30">
                          Don&apos;t have an account?{" "}
                          <Link to="/signup" onClick={() => navigate("/signup")}>
                            Create here
                          </Link>
                        </p>
                      </div>
                      <form onSubmit={loginHandler}>
                        {(appErr || serverErr) && <p style={{ color: "red", fontWeight: 900 }}>{appErr || serverErr}</p>}
                        <div className="form-group">
                          <input
                            type="email"
                            required
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Email *"
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
                            placeholder="Password *"
                          />
                          {errors.password && <div className="text-danger">{errors.password}</div>}
                        </div>
                        <div className="form-group mb-50">
                          <button
                            type="submit"
                            className="mb-4 btn btn-fill-out btn-block hover-up font-weight-bold"
                            disabled={loading}
                          >
                            {loading ? "Loading..." : "Login"}
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
      </div>
      <Footer />
    </>
  );
};

export default Login;

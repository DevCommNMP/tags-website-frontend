import React, { useState } from 'react';
import LoginImage from '../../../assets/imgs/page/login-1.png';
import Header from '../../Header/Header';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  // State variables for form data and errors
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    securityCode: '',
  });

  const [errors, setErrors] = useState({});

  // Function to handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const loginHandler = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      // Submit the form
      console.log('Form submitted:', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  // Function to validate form fields
  const validateForm = (data) => {
    const errors = {};
    if (!data.email.trim()) {
      errors.email = 'Username or Email is required';
    }
    if (!data.password.trim()) {
      errors.password = 'Password is required';
    }
    
    return errors;
  };

  return (
    <>
      <Header />
      <div className="page-content pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
              <div className="row">
                <div className="col-lg-6 pr-30 d-none d-lg-block">
                  <img className="border-radius-15" src={LoginImage} alt="" />
                </div>
                <div className="col-lg-6 col-md-8">
                  <div className="login_wrap widget-taber-content background-white">
                    <div className="padding_eight_all bg-white">
                      <div className="heading_s1">
                        <h1 className="mb-5">Login</h1>
                        <p className="mb-30">
                          Don&apos;t have an account?{' '}
                          <a href='#' onClick={() => navigate("/signup")}>Create here</a>
                        </p>
                      </div>
                      <form onSubmit={loginHandler}>
                        <div className="form-group">
                          <input type="email" required name="email" value={formData.email} onChange={handleInputChange} placeholder="Username or Email *" />
                          {errors.email && <div className="text-danger">{errors.email}</div>}
                        </div>
                        <div className="form-group">
                          <input required type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Your password *" />
                          {errors.password && <div className="text-danger">{errors.password}</div>}
                        </div>
                        
                        <div className="login_footer form-group mb-50">
                          <div className="chek-form">
                            <div className="custome-checkbox">
                              <input className="form-check-input" type="checkbox" name="remember" id="exampleCheckbox1" value="" />
                              <label className="form-check-label" htmlFor="exampleCheckbox1">
                                <span>Remember me</span>
                              </label>
                            </div>
                          </div>
                          <a className="text-muted" href="#">
                            Forgot password?
                          </a>
                        </div>
                        <div className="form-group">
                          <button type="submit" className="btn btn-heading btn-block hover-up" name="login">
                            Log in
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
    </>
  );
};

export default Login;

import React, { useEffect, useState } from 'react';
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

import logoFacebook from '../../../assets/imgs/theme/icons/logo-facebook.svg';
import logoGoogle from '../../../assets/imgs/theme/icons/logo-google.svg';
import logoApple from '../../../assets/imgs/theme/icons/logo-apple.svg';

import { Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { registerUserAction } from '../../../redux/actions/auth/authActions';

const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // State variables for form data and errors
    const storeData = useSelector((store) => store.auth);
    const { registered,loading,appErr,serverErr } = storeData;

    useEffect(() => {
      
    }, [appErr,serverErr])
    
  
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        userType: 'customer', // Default to 'customer'
        agreeTerms: false,
    });

    const [errors, setErrors] = useState({});
   // Initialize user state as true

    // Function to handle form input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Function to handle form submission
    const userRegisterHandler =async (e) => {
        e.preventDefault();
       
        const validationResult = validateForm(formData);
        console.log(validationResult);
        if (Object.keys(validationResult).length === 0) {
    const res=await dispatch(registerUserAction(formData))
    if(!res.error){
        // console.log(res.error.message)
        navigate("/login")
    }
    else{
        console.log(res.error.message);
    }

        } else {
            console.log('Error in form validation');
        }
    };

    // Function to validate form fields
    const validateForm = (formData) => {
        const newErrors = {};
        if (!formData.username.trim()) {
            newErrors.username = 'Username is required';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }
        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long';
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
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
                                                <p className="mb-30">Already have an account? <Link to="/login" onClick={() => navigate("/login")}>Login</Link></p>
                                            </div>
                                            <form onSubmit={userRegisterHandler}>
                                                {(appErr||serverErr)&& <p style={{color:"red",fontWeight:900}}>{appErr ||serverErr}</p>}
                                                <div className="form-group">
                                                    <input type="text" required name="username" value={formData.username} onChange={handleInputChange} placeholder="Username" />
                                                    {errors.username && <div className="text-danger">{errors.username}</div>}
                                                </div>
                                                <div className="form-group">
                                                    <input type="email" required name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" />
                                                    {errors.email && <div className="text-danger">{errors.email}</div>}
                                                </div>
                                                <div className="form-group">
                                                    <input required type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Password" />
                                                    {errors.password && <div className="text-danger">{errors.password}</div>}
                                                </div>
                                                <div className="form-group">
                                                    <input required type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} placeholder="Confirm password" />
                                                    {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
                                                </div>
                                                {/* <div className="payment_option mb-50"> Removed radio button options */}    
                                                {/* </div> */}
                                                {/* <div className="login_footer form-group mb-50">
                                                    <div className="chek-form">
                                                        <div className="custome-checkbox">
                                                            <input className="form-check-input" type="checkbox" name="agreeTerms" id="exampleCheckbox12" checked={formData.agreeTerms} onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })} />
                                                            <label className="form-check-label" htmlFor="exampleCheckbox12"><span>I agree to terms & Policy.</span></label>
                                                            {errors.agreeTerms && <div className="text-danger">{errors.agreeTerms}</div>}
                                                        </div>
                                                    </div>
                                                    <a href='page-privacy-policy.html'><i className="fi-rs-book-alt mr-5 text-muted"></i>Lean more</a>
                                                </div> */}
                                                <div className="form-group mb-30">
                                                    <button type="submit" className="btn btn-fill-out btn-block hover-up font-weight-bold" name="login">Submit & Register</button>
                                                </div>
                                                <p className="font-xs text-muted"><strong>Note:</strong>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy</p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 pr-30 d-none d-lg-block">
                                    <div className="card-login mt-115">
                                        <a href="#" className="social-login facebook-login">
                                            <img src={logoFacebook} alt="" />
                                            <span>Continue with Facebook</span>
                                        </a>
                                        <a href="#" className="social-login google-login">
                                            <img src={logoGoogle} alt="" />
                                            <span>Continue with Google</span>
                                        </a>
                                        <a href="#" className="social-login apple-login">
                                            <img src={logoApple} alt="" />
                                            <span>Continue with Apple</span>
                                        </a>
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

export default SignUp;

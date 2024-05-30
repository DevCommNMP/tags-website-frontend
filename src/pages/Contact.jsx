import { useState } from 'react';
import axios from 'axios';
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";
import { baseUrl } from '../utils/baseUrl';
import { ToastContainer, toast } from 'react-toastify';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear errors when user starts typing again
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    let formIsValid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      formIsValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      formIsValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

 // Client-side (handleSubmit function)
 const handleSubmit = async (e) => {
  e.preventDefault();
  if (validateForm()) {
    const { name, email, message } = formData;

    try {
      const data = {
        name: name,
        email: email,
        message: message,
      };
      
      console.log(data); // Verify data before sending
      
      const response = await axios.post(`${baseUrl}/api/queries`, data);
      
      if (response.data.success) {
        toast.success("Your query has been successfully submitted.");
        setFormData({ name: "", email: "", message: "" }); // Clear form fields
      } else {
        toast.error("There was an error submitting your query. Please try again later.");
      }
    } catch (error) {
      toast.error("There was an error submitting your query. Please try again later.");
      console.error('Error:', error); // Log detailed error
    }
  }
};

  

  return (
    <>
      <Header />
      <ToastContainer />
      <main className="main pages">
        <div className="page-header breadcrumb-wrap">
          <div className="container">
            <div className="breadcrumb">
              <Link to="/" rel="nofollow">
                <i className="fi-rs-home mr-5"></i>Home
              </Link>
              <span></span> Pages <span></span> Contact Us
            </div>
          </div>
        </div>
        <div className="page-content pt-50">
          <div className="container">
            <div className="row">
              <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
                <h1 className="text-center pb-50">Contact Us</h1>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ flex: 1, marginRight: "20px" }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d974.5148015324016!2d76.64698721660146!3d12.311799807573214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf700c95c8513d%3A0x16d320b11918619a!2s1368%20d%2C%205%2C%20NS%20Road%2C%20Devaraja%20Mohalla%2C%20Shivarampet%2C%20Mysuru%2C%20Karnataka%20570001!5e0!3m2!1sen!2sin!4v1716370651457!5m2!1sen!2sin"
                      width="600"
                      height="450"
                      style={{ border: "0" }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Google Map"
                    ></iframe>
                  </div>
                  <div style={{ flex: 1 }}>
                    <form onSubmit={handleSubmit}>
                      <div style={{ marginBottom: "10px" }}>
                        <label htmlFor="name" style={{ display: "block", marginBottom: "5px" }}>
                          Name:
                        </label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} style={{ width: "100%", padding: "8px", boxSizing: "border-box" }} />
                        {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                      </div>
                      <div style={{ marginBottom: "10px" }}>
                        <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>
                          Email:
                        </label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} style={{ width: "100%", padding: "8px", boxSizing: "border-box" }} />
                        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                      </div>
                      <div style={{ marginBottom: "10px" }}>
                        <label htmlFor="message" style={{ display: "block", marginBottom: "5px" }}>
                          Message:
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows="4"
                          value={formData.message}
                          onChange={handleChange}
                          style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
                        ></textarea>
                        {errors.message && <div style={{ color: 'red' }}>{errors.message}</div>}
                      </div>
                      <button
                        className="btn text-center"
                        type="submit"
                        style={{ border: "none", cursor: "pointer" }}
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;

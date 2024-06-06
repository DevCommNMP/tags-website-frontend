import axios from "axios";
import banner9 from "../assets/imgs/banner/banner-9.png";
import { useState } from 'react';
import { baseUrl } from "../utils/baseUrl";
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';

const NewsLetter = () => {
  const [email, setEmail] = useState('');

  const subscribedUserHandler = async (event) => {
    event.preventDefault(); // Prevents default form submission behavior
    console.log(email);
    try {
      const response = await axios.post(`${baseUrl}/api/subscribe`, { email });
     if(response.data.success){
      toast.success(response.data.message)
      setEmail("");
     }
     
     else{
      toast.error(response.data.message)
     }

    } catch (error) {
toast.error(error.message)
      // console.error('Error subscribing:', error);
    }
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  return (
    <>
<ToastContainer

  position="top-center"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  // rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  // transition={{ bounce: true }}
  theme="light"
  
/>

      <section className="newsletter mb-15">
        <div className="container">
          <div className="row p-5 mb-5">
            <div className="col-lg-12 border-1px news-p">
              <div className="position-relative newsletter-inner mb-25">
                <div className="newsletter-content">
                  <h2 className="mb-20">
                    Stay home & get your daily <br />
                    needs from our shop
                  </h2>
                  <p className="mb-45">
                    Start Your Daily Shopping with <span className="text-brand">Tags Footwear</span>
                  </p>
                  <form className="form-subcriber d-flex">
                    <input 
                      className="border-1px" 
                      type="email" 
                      placeholder="Your email address"
                      value={email}
                      onChange={handleEmailChange}
                    />
                    <button className="btn" onClick={subscribedUserHandler}>
                      Subscribe
                    </button>
                  </form>
                </div>
                <img style={{maxHeight:'100%'}} src={banner9} alt="newsletter"  />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;

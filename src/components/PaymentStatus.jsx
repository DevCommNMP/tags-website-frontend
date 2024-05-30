import SuccessImg from "../assets/imgs/page/success.png";
import FailedImg from "../assets/imgs/page/failed.png";
import { Link } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import  {useSearchParams} from "react-router-dom"
import { useEffect,useState } from "react";
const paymentStatus = "success";
// const paymentStatus = "failed";

const PaymentStatus = () => {

  const[paymentSuccess,setPaymentSuccess]=useState(false);
  const searchQuery=useSearchParams()[0]
  const paymentId=searchQuery.get("reference")
 useEffect(() => {
   if(paymentId){
     localStorage.removeItem('cartItems')
    setPaymentSuccess(true);
   }
 
 }, [paymentId])
 
 
//  console.log(searchQuery.get("reference"))
  return (
    <>
      <Header />
      <div className="main pages">
        <div className="page-content pt-50 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-12 m-auto text-center">
                <div className="login_wrap widget-taber-content background-white">
                  <div className="padding_eight_all bg-white">
                    <div className="heading_s1" style={{ textAlign: "center" }}>
                      <img
                        className="border-radius-15"
                        width="150px"
                        src={paymentSuccess ? SuccessImg : FailedImg}
                        alt=" "
                        style={{ width: "150px", textAlign: "center" }}
                      />

                      {paymentSuccess ? (
                        <h4 className="mb-25 mt-25 text-center">Payment Successful <p className="mb-25 mt-25 text-center"style={{fontWeight:"600"}} > Order id :<span style={{color:"green",fontWeight:"800"}}>{paymentId}</span>
                        </p></h4>
                        
                      ) : (
                        <h4 className="mb-25 mt-25 text-center">Failed</h4>
                      )}
                      <p className="mb-30">
                        {paymentSuccess ? (
                          <span>Your payment was successful. <br /> Thank you for shopping with us.</span>
                        ) : (
                          <span>Your payment was not successful. <br /> Please try again.</span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
               <Link to="/profile ">
               <button className="text-center btn">View Order</button>
               </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaymentStatus;
  
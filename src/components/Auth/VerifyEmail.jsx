import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import verifyEmailImg from "../../assets/imgs/page/email-green.avif";
const VerifyEmail = () => {
  return (
    <>
      <Header />
      <div className="main pages">
        <div className="page-header breadcrumb-wrap">
          <div className="container">
            <div className="breadcrumb">
              <a href="index.html" rel="nofollow">
                <i className="fi-rs-home mr-5"></i>Home
              </a>
              <span></span> Pages <span></span> My Account
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
                      <h2 className="mb-15 mt-15 text-center">Email Verification</h2>
                      <img className="border-radius-15" src={verifyEmailImg} alt="" />
                      <p className="mb-30">
                        An email has been sent to your email address. Please check your inbox and follow the instructions to verify your
                        email.
                      </p>
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

export default VerifyEmail;

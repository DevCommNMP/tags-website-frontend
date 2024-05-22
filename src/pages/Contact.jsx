import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <Header />

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
                    <form>
                      <div style={{ marginBottom: "10px" }}>
                        <label htmlFor="name" style={{ display: "block", marginBottom: "5px" }}>
                          Name:
                        </label>
                        <input type="text" id="name" name="name" style={{ width: "100%", padding: "8px", boxSizing: "border-box" }} />
                      </div>
                      <div style={{ marginBottom: "10px" }}>
                        <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>
                          Email:
                        </label>
                        <input type="email" id="email" name="email" style={{ width: "100%", padding: "8px", boxSizing: "border-box" }} />
                      </div>
                      <div style={{ marginBottom: "10px" }}>
                        <label htmlFor="message" style={{ display: "block", marginBottom: "5px" }}>
                          Message:
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows="4"
                          style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
                        ></textarea>
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

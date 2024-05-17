import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";

const AboutUs = () => {
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
              <span></span> Pages <span></span> About us
            </div>
          </div>
        </div>
        <div className="page-content pt-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h1 className="text-center mb-4">About Us</h1>
                <p className="lead text-center">
                  Welcome to TagsFootwear, where every step matters. Our passion is to provide exquisite footwear that seamlessly blends
                  style, comfort, and quality.
                </p>
                <h5 className="mt-5 mb-4">Our Mission</h5>
                <p>
                  At TagsFootwear, we are committed to elevating your style while ensuring utmost comfort. We believe footwear is more than
                  just an accessory; it&apso;s a reflection of your personality and lifestyle.
                </p>
                <h5 className="mt-5 mb-4">Quality Craftsmanship</h5>
                <p>
                  Quality is our top priority. We meticulously select premium materials and pay attention to every detail to ensure
                  durability and comfort in every pair of TagsFootwear.
                </p>
                <h5 className="mt-5 mb-4">Comfort Redefined</h5>
                <p>
                  Comfort is non-negotiable. From cushioned insoles to flexible outsoles, we prioritize your comfort without compromising on
                  style. With TagsFootwear, you can stay on your feet all day long with ease.
                </p>
                <h5 className="mt-5 mb-4">Style for Every Step</h5>
                <p>
                  Whether you&apso;re heading to work, hitting the gym, or stepping out for a night on the town, TagsFootwear has the
                  perfect pair for every occasion. Our diverse range ensures you look and feel your best.
                </p>
                <h5 className="mt-5 mb-4">Join the TagsFootwear Family</h5>
                <p>
                  We invite you to join the TagsFootwear family and experience the ultimate blend of style, comfort, and quality. Step into
                  a world where every step matters, and where fashion meets function in the most delightful way possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;

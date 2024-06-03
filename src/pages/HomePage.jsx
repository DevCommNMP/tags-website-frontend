import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Banner from "../components/OfferBanner/Banner";

import ProductTabSection from "./ProductTabSection";
import LeatherSection from "../components/leateherSection/leatherSection.jsx";
import NewArrival from "../components/newArrival/NewArrival.jsx";
import NewsLetter from "../components/NewsLetter.jsx";
import SEOContent from "../components/SEOContent.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllProductsAction } from "../redux/actions/product/productActions.js";
import { useSelector } from "react-redux";

import LoaderImg from "../components/LoaderImg.jsx";
import YoutubeVideo from "../components/YoutubeVideo.jsx";
import {toast, ToastContainer } from "react-toastify";
// import OnlyProductCard from "../components/ProductCard.jsx";
const Homepage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const res = dispatch(fetchAllProductsAction());
   
    // console.log(res);
  }, [dispatch]);

  const toasterHandler=()=>{
    toast.success("Product added to cart", {
      position: "top-right",
    });
  }
  const storeData = useSelector((store) => store.products);
  const { products, productsLoading, appErr, serverErr } = storeData;
  // console.log(products,productsLoading,appErr,serverErr)

  return (
    <>
    <ToastContainer/>
      <Header />
      {productsLoading ? (
        <LoaderImg />
      ) : (
        <div>
          <Hero />
          <div className="container">
            <div className="row">
              <Banner />
            </div>
          </div>
          <NewArrival data={products} toasterHandler={toasterHandler} />
          <LeatherSection data={products} toasterHandler={toasterHandler} />
          <ProductTabSection data={products} toasterHandler={toasterHandler} />

        </div>
      )}
      <YoutubeVideo />
      <NewsLetter />
      <SEOContent />
      <Footer />
    </>
  );
};

export default Homepage;

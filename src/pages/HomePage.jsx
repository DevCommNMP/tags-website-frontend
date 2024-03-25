import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Banner from "../components/OfferBanner/Banner";

import ProductTabSection from "./ProductTabSection";
import LeatherSection from "../components/leateherSection/leatherSection.jsx";
import NewArrival from "../components/newArrival/NewArrival.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllProductsAction } from "../redux/actions/product/productActions.js";
import { useSelector } from "react-redux";
const Homepage = ({ data }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const res = dispatch(fetchAllProductsAction());
    console.log(res);
  }, [dispatch]);

  const storeData = useSelector((store) => store.products);
  const { products, productsLoading, appErr, serverErr } = storeData;
  // console.log(products,productsLoading,appErr,serverErr)

  return (
    <>
      <Header />

      {productsLoading ? (
        "loading"
      ) : (
        <div>
          <Hero />
          <div className="container">
            <div className="row">
              <Banner />
            </div>
          </div>
          <ProductTabSection data={products} />
          <LeatherSection data={products} />
          <NewArrival data={products} />
        </div>
      )}
      <Footer />
    </>
  );
};

export default Homepage;

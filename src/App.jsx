import { Provider } from "react-redux";
import "./App.css";
import Store from "./redux/store/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage.jsx";
import Login from "./components/Auth/login/Login.jsx";
import SignUp from "./components/Auth/signup/SignUp.jsx";
import ResetPassword from "./components/Auth/ResetPassword/ResetPassword.jsx";
import ForgotPassword from "./components/Auth/ForgotPassword/ForgotPassword.jsx";
import UserAccountPage from "./pages/UserAccountPage.jsx";
import VerifyMail from "./components/Auth/verifyMail/verifyMail.jsx";
import Product from "./pages/product.jsx";
import SingleProductImages from "./components/SingleProductImages.jsx";

import CheckoutPage from "./pages/CheckoutPage.jsx";
import PopularProducts from "./pages/popularProductsPage.jsx";
import NewArrivals from "./pages/newArrivalPage.jsx";
import PremiumLeather from "./pages/premiumLeather.jsx";
import ProductsGridPage from "./pages/ProductsGridPage.jsx";

import Invoice from "./components/Invoice.jsx";
// import ToggleBtn from "./playground/ToggleBtn.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import AllCategoriesPage from "./pages/AllCategoriesPage.jsx";
// import SpinnerLoader from "./components/SpinnerLoader.jsx";

const dummydata = [
  {
    id: 1,
    name: "Item 1",
    image: "/src/assets/drive-download-20240310T091457Z-001/ST 353 - Black/img1.jpg",
    tag: "hot",
  },
  {
    id: 2,
    name: "Item 2",
    image: "/src/assets/drive-download-20240310T091457Z-001/ST 353 - Black/img3.jpg",
    tag: "hot",
  },
  {
    id: 3,
    name: "Item 3",
    image: "/src/assets/drive-download-20240310T091457Z-001/ST 353 - Black/img3.jpg",
    tag: "hot",
  },
  {
    id: 4,
    name: "Item 4",
    image: "/src/assets/drive-download-20240310T091457Z-001/ST 353 - Black/img4.jpg",
    tag: "hot",
  },
  {
    id: 5,
    name: "Item 5",
    image: "/src/assets/drive-download-20240310T091457Z-001/ST 353 - Black/img5.jpg",
    tag: "hot",
  },
  {
    id: 6,
    name: "Item 1",
    image: "/src/assets/drive-download-20240310T091457Z-001/ST 353 - Chique/img1.jpg",
    tag: "trending",
  },
  {
    id: 7,
    name: "Item 2",
    image: "/src/assets/drive-download-20240310T091457Z-001/ST 353 - Chique/img5.jpg",

    tag: "trending",
  },
  {
    id: 8,
    name: "Item 3",
    image: "/src/assets/drive-download-20240310T091457Z-001/ST 353 - Chique/img3.jpg",

    tag: "trending",
  },
  {
    id: 9,
    name: "Item 4",
    image: "/src/assets/drive-download-20240310T091457Z-001/ST 353 - Chique/img4.jpg",

    tag: "trending",
  },
  {
    id: 10,
    name: "Item 5",
    image: "/src/assets/drive-download-20240310T091457Z-001/ST 353 - Chique/img5.jpg",

    tag: "trending",
  },
  {
    id: 11,
    name: "Item 1",
    image: "/src/assets/drive-download-20240310T091457Z-001/ST 353 - White/img1.jpg",
    tag: "new",
  },
  {
    id: 12,
    name: "Item 2",
    image: "/src/assets/drive-download-20240310T091457Z-001/ST 353 - White/img2.jpg",
    tag: "new",
  },
  {
    id: 13,
    name: "Item 3",
    image: "/src/assets/drive-download-20240310T091457Z-001/ST 353 - White/img3.jpg",
    tag: "new",
  },
  {
    id: 14,
    name: "Item1 4",
    image: "/src/assets/drive-download-20240310T091457Z-001/ST 353 - White/img4.jpg",
    tag: "new",
  },
  {
    id: 15,
    name: "Item 15",
    image: "/src/assets/drive-download-20240310T091457Z-001/ST 353 - White/img5.jpg",
    tag: "new",
  },
];

function App() {
  // singhaditya2763@gmail.com

  return (
    <>
    {/* <SpinnerLoader /> */}
      <Provider store={Store}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Homepage data={dummydata} />} />
            <Route exact path="/products/:id" element={<Product />} />
            <Route exact path="/popular-products" element={<PopularProducts data={dummydata} />} />
            <Route exact path="/premium-leather" element={<PremiumLeather data={dummydata} />} />
            <Route exact path="/new-arrivals" element={<NewArrivals data={dummydata} />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/verify-email" element={<VerifyMail />} />
            <Route exact path="/forgot-password" element={<ForgotPassword />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/reset_password" element={<ResetPassword />} />
            <Route exact path="/forgot_password" element={<ForgotPassword />} />
            <Route exact path="/account" element={<UserAccountPage />} />

            <Route exact path="/productImages" element={<SingleProductImages />} />
            <Route exact path="/checkout" element={<CheckoutPage />} />
            <Route exact path="/categories/:title" element={<ProductsGridPage data={dummydata} />} />
            <Route exact path="/all-categories" element={<AllCategoriesPage  />} />
            <Route exact path="/wishlist" element={<Wishlist />} />
            <Route exact path="/invoice" element={<Invoice />} />

            {/* TEST ROUTES
              following routes can safely be removed */}
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;

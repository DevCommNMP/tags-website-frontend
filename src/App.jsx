import { Provider } from "react-redux";
import "./App.css";
import Store from "./redux/store/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage.jsx";
import Login from "./components/Auth/login/Login.jsx";
import SignUp from "./components/Auth/signup/SignUp.jsx";
import VerifyEmail from "./components/Auth/VerifyEmail.jsx";
import VerifyOtp from "./components/Auth/VerifyOtp.jsx";
import ResetPassword from "./components/Auth/ResetPassword/ResetPassword.jsx";
import ForgotPassword from "./components/Auth/ForgotPassword/ForgotPassword.jsx";
import UserAccountPage from "./pages/UserAccountPage.jsx";
import Product from "./pages/product.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import ProductsGridPage from "./pages/ProductsGridPage.jsx";
import Invoice from "./components/Invoice.jsx";
import AllCategoriesPage from "./pages/AllCategoriesPage.jsx";
import Cart from "./pages/cart.jsx";
import PaymentStatus from "./components/PaymentStatus.jsx";
import ChangePasswordMsg from "./components/Auth/ResetPassword/changePasswordInfo.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import TermsPage from "./pages/TermsPage.jsx";
import { useEffect } from "react";
import ShippingPolicy from "./pages/ShippingPolicy.jsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.jsx";
import RefundPolicy from "./pages/RefundPolicy.jsx";
import OrderStatus from "./components/OrderStatus.jsx";
import Contact from "./pages/Contact.jsx";
import OrderTracking from "./pages/orderTracking.jsx";


function App() {
  return (
    <>
      <Provider store={Store}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/products/:slugtitle" element={<Product />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/forgot-password" element={<ForgotPassword />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/reset-password/:token" element={<ResetPassword />} />
            <Route exact path="/forgot-password-message" element={<ChangePasswordMsg />} />
            <Route exact path="/profile" element={<UserAccountPage />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/checkout" element={<CheckoutPage />} />
            <Route exact path="/categories/:title" element={<ProductsGridPage />} />
            <Route exact path="/:tag" element={<ProductsGridPage />} />
            <Route exact path="/allproducts/:color" element={<ProductsGridPage />} />
            <Route exact path="/products/subtypes/:subtypes" element={<ProductsGridPage />} />
            <Route exact path="/search/:searchitem" element={<ProductsGridPage />} />
            <Route exact path="/all-categories" element={<AllCategoriesPage />} />
            <Route exact path="/invoice/:id" element={<Invoice />} />
            <Route exact path="/verify-account" element={<VerifyEmail />} />
            <Route exact path="/verify-account/:token" element={<VerifyEmail />} />
            <Route exact path="/verify-otp/:phoneNumber" element={<VerifyOtp />} />
            <Route exact path="/about-us" element={<AboutUs />} />
            <Route exact path="/shipping-policy" element={<ShippingPolicy />} />
            <Route exact path="/terms-conditions" element={<TermsPage />} />
            <Route exact path="/refund-policy" element={<RefundPolicy />} />
            <Route exact path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route exact path="/bestfits/:amount" element={<ProductsGridPage />} />
            <Route exact path="/paymentsuccess" element={<PaymentStatus />} />
            <Route exact path="/order-status" element={<OrderStatus />} />
            <Route exact path="/track-order/:id" element={<OrderTracking />} />
            <Route exact path="/contact-us" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;

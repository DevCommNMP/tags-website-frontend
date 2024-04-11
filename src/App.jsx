import { Provider } from "react-redux";
import "./App.css";
import Store from "./redux/store/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage.jsx";
import Login from "./components/Auth/login/Login.jsx";
import SignUp from "./components/Auth/signup/SignUp.jsx";
import VerifyEmail from "./components/Auth/VerifyEmail.jsx";
import ResetPassword from "./components/Auth/ResetPassword/ResetPassword.jsx";
import ForgotPassword from "./components/Auth/ForgotPassword/ForgotPassword.jsx";
import UserAccountPage from "./pages/UserAccountPage.jsx";
import Product from "./pages/product.jsx";
import SingleProductImages from "./components/SingleProductImages.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import ProductsGridPage from "./pages/ProductsGridPage.jsx";
import Invoice from "./components/Invoice.jsx";
import AllCategoriesPage from "./pages/AllCategoriesPage.jsx";
import Cart from "./pages/cart.jsx";
import CustomPaging from "./components/CustomPaging.jsx";

function App() {
  return (
    <>
      <Provider store={Store}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/products/:id" element={<Product />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/forgot-password" element={<ForgotPassword />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/reset_password" element={<ResetPassword />} />
            <Route exact path="/forgot_password" element={<ForgotPassword />} />
            <Route exact path="/profile" element={<UserAccountPage />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/checkout" element={<CheckoutPage />} />
            <Route exact path="/categories/:title" element={<ProductsGridPage />} />
            <Route exact path="/all-categories" element={<AllCategoriesPage />} />
            <Route exact path="/invoice" element={<Invoice />} />
            <Route exact path="/verify-account" element={<VerifyEmail />} />
            <Route exact path="/verify-account/:token" element={<VerifyEmail />} />
            <Route exact path="/custom-paging" element={<CustomPaging />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;

import { Provider } from 'react-redux'
import './App.css'
import Store from './redux/store/store'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/HomePage.jsx'
import Login from './components/Auth/login/Login.jsx'
import SignUp from './components/Auth/signup/SignUp.jsx'
import ResetPassword from './components/Auth/ResetPassword/ResetPassword.jsx'
import ForgotPassword from './components/Auth/ForgotPassword/ForgotPassword.jsx'
import Account from './components/Account/Account.jsx';
import VerifyMail from './components/Auth/verifyMail/verifyMail.jsx'
import Product from './pages/product.jsx'
import SingleProductImages from './components/SingleProductImages.jsx'

import CheckoutPage from './pages/CheckoutPage.jsx'
import ProductsGridPage from './pages/ProductsGridPage.jsx'
import { useEffect } from 'react'


function App() {

  

  return (
    <>
      <Provider store={Store}>
        
        <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/products/:id" element={<Product />} />
             
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/verify-email" element={<VerifyMail/>} />
          <Route exact path="/forgot-password" element={<ForgotPassword/>} />
              <Route exact path="/signup" element={<SignUp />} />
              <Route exact path="/reset_password" element={<ResetPassword/>} />
              <Route exact path="/forgot_password" element={<ForgotPassword/>} />
              <Route exact path="/account" element={<Account/>} />

              <Route exact path="/productImages" element={<SingleProductImages/>} />
              <Route exact path="/checkout" element={<CheckoutPage />} />
              <Route exact path="/product-grid" element={<ProductsGridPage />} />
            </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
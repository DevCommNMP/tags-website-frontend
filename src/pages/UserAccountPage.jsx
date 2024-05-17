import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Account from "../components/Account/Account";
import {  useDispatch,useSelector } from 'react-redux';
import { Slide, toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";
const UserAccountPage = () => {
 
 
 
  return (
    <>
    <ToastContainer/>
      <Header />
      <Account />
      <Footer />
    </>
  );
};

export default UserAccountPage;

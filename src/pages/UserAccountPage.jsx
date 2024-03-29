import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Account from "../components/Account/Account";
import {  useDispatch,useSelector } from 'react-redux';
import { Slide, toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";
const UserAccountPage = () => {
  const storeData = useSelector((store) => store.auth);
  const { user,loading,appErr,serverErr } = storeData;
 useEffect(() => {
  if(user){
    toast("Login successfully!");
  }
 }, [user])
 
 
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

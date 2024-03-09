import { Provider } from 'react-redux'
import './App.css'
import Store from './redux/store/store'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Homepage from './pages/Homepage.jsx'
import Homepage from './pages/HomePage.jsx'
import Login from './components/Auth/login/Login.jsx'
import SignUp from './components/Auth/signup/SignUp.jsx'
import ResetPassword from './components/Auth/ResetPassword/ResetPassword.jsx'
import ForgotPassword from './components/Auth/ForgotPassword/ForgotPassword.jsx'


function App() {
  return (
    <>
      <Provider store={Store}>
        <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<SignUp />} />
              <Route exact path="/reset_password" element={<ResetPassword/>} />
              <Route exact path="/forgot_password" element={<ForgotPassword/>} />
            </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App

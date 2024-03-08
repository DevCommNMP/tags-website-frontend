import { Provider } from 'react-redux'
import './App.css'
import Store from './redux/store/store'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Homepage from './pages/Homepage.jsx'
import Homepage from './pages/Homepage.jsx'
import Login from './components/Auth/login/Login.jsx'
import SignUp from './components/Auth/signup/SignUp.jsx'

function App() {
  return (
    <>
      <Provider store={Store}>
      <BrowserRouter>
        <div className="d-flex flex-column" style={{ overflow: "hidden" }}>

          <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/login" element={<Login />} />
           <Route exact path="/signup" element={<SignUp/>} />
           
          </Routes>
        </div>
      </BrowserRouter>
      </Provider>
     </>
  )
}

export default App

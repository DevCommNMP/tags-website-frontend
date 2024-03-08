import { Provider } from 'react-redux'
import './App.css'
import Store from './redux/store/store'

// import Homepage from './pages/Homepage.jsx'
import SignUp from './components/Auth/signup/SignUp.jsx'

function App() {
  return (
    <>
      <Provider store={Store}>
        {/* <Homepage /> */}
        <SignUp />
      </Provider>
     </>
  )
}

export default App

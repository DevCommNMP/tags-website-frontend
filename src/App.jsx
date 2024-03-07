import { Provider } from 'react-redux'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Store from './redux/store/store'

function App() {
  return (
    
    <>
    
    <Provider store={Store}>
      <Header />
      <Footer />
      </Provider>
    
    </>
  )
}

export default App

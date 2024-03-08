import { Provider } from 'react-redux'
import './App.css'
import Store from './redux/store/store'

import Homepage from './pages/Homepage.jsx'

function App() {
  return (
    <>
      <Provider store={Store}>
        <Homepage />
      </Provider>
     </>
  )
}

export default App

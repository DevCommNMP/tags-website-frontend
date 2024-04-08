import logo from '../../assets/drive-download-20240310T091457Z-001/ST 353 - Black/img1.jpg';
// import './App.css';
import axios from 'axios';
import { baseUrl } from '../../utils/baseUrl';
function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = () => {
      resolve(true)
    }
    script.onerror = () => {
      resolve(false)
    }
    document.body.appendChild(script)
  })
}

function CheckoutTest() {
    const user = JSON.parse(localStorage.getItem("userData"));
async function displayRazorpay () {

    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

      if (!res){
        alert('Razropay failed to load!!')
        return 
      }

      const { data } = await axios.get(`${baseUrl}/api/getkeys`);
          const res1 = await axios.post(`${baseUrl}/api/checkout`, {
            amount: 1000,
            // userEmail: user.email,
            // cartdata,
            // formData
          });
      console.log(data)

    const options = {
      "key": data.key, // Enter the Key ID generated from the Dashboard
      "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Acme Corp",
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id":res1.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "callback_url":"http://localhost:1769/verify",
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#3399cc"
      }
  };
  const paymentObject = new window.Razorpay(options); 
  paymentObject.open();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />   
        <button
        onClick={displayRazorpay}
        >
          Pay now 
        </button>
      </header>
    </div>
  );
}

export default CheckoutTest;
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Banner1 from '../components/OfferBanner/Banner1'

import ProductTabSection from './ProductTabSection'
import LeatherSection from '../components/leateherSection/leatherSection.jsx'
import NewArrival from '../components/newArrival/NewArrival.jsx'

const Homepage = ({data}) => {
 
  return (
    <>
      <Header />
      <Hero />
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <Banner1 />
          </div>
          <div className="col-lg-4 col-md-6">
            <Banner1 />
          </div>
          <div className="col-lg-4 col-md-6">
            <Banner1 />
          </div>
        </div>
      </div>
      <ProductTabSection  data={data}/>
      <LeatherSection  data={data}/>
      <NewArrival  data={data} />


      <Footer />
    </>
  )
}

export default Homepage

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Banner1 from '../components/OfferBanner/Banner1'

import ProductTabSection from './ProductTabSection'
import DailyBestSells from './DailyBestSells'

const Homepage = () => {
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
      <ProductTabSection />
      <DailyBestSells />
      <Footer />
    </>
  )
}

export default Homepage

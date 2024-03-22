import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Banner1 from '../components/OfferBanner/Banner1'

import ProductTabSection from './ProductTabSection'
import LeatherSection from '../components/leateherSection/leatherSection.jsx'
import NewArrival from '../components/newArrival/NewArrival.jsx'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAllProductsAction } from '../redux/actions/product/productActions.js'
import {  useSelector } from 'react-redux';
const Homepage = ({data}) => {
const dispatch=useDispatch()
  useEffect(() => {
 const res=dispatch(fetchAllProductsAction());
  console.log(res);
  }, [dispatch])
  
  const storeData = useSelector((store) => store.products);
  const { products,productsLoading,appErr,serverErr } = storeData;
  // console.log(products,productsLoading,appErr,serverErr)

  return (
    <>
      <Header />
     
      {(productsLoading)?"loading":<div>
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
      <ProductTabSection  data={products}/>
      <LeatherSection  data={products}/>
      <NewArrival  data={products} />

</div>}
      <Footer />
    </>
  )
}

export default Homepage

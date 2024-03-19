import { Link, useNavigate } from "react-router-dom"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"

const dummydata=[
  {
    "id": 1,
    "name": "Item 1",
    "image":'/src/assets/drive-download-20240310T091457Z-001/ST 353 - Black/img1.jpg'
  },
  {
    "id": 2,
    "name": "Item 2",
    "image":'/src/assets/drive-download-20240310T091457Z-001/ST 353 - Black/img3.jpg'
  },
  {
    "id": 3,
    "name": "Item 3",
    "image":'/src/assets/drive-download-20240310T091457Z-001/ST 353 - Black/img3.jpg'
  },
  {
    "id": 4,
    "name": "Item 4",
    "image":'/src/assets/drive-download-20240310T091457Z-001/ST 353 - Black/img4.jpg'
  },
  {
    "id": 5,
    "name": "Item 5",
    "image":'/src/assets/drive-download-20240310T091457Z-001/ST 353 - Black/img5.jpg'
  },
 
]
const ProductTabSection = ({data}) => {
 
  const navigate=useNavigate()
  const onClickProductHandler=(productid)=>{
    navigate(`/products/${productid}`)
  }
  const cartHandler = async (id) => {
    
  };
  
  // const hotProducts = data.filter(item => item.tag.includes('hot'));
   const productHandler=(event)=>{
event
   }
 
  return (
    <>
   
    

      <section className="product-tabs section-padding position-relative">
        <div className="container">
          <div className="section-title style-2">
            <a   style={{cursor:"pointer"}} ><h3 onClick={productHandler}>Popular Products</h3></a>
        
          </div>

          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
              <div className="row product-grid-4">
                {data.map(item=>(
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div  className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src={item.image} alt="" />
                          <img className="hover-img" src="" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="hot" style={{backgroundColor:"red"}}>{item.tag}</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Snack</a>
                      </div>
                      <h2>
                        <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>
                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">NestFood</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$28.85</span>
                          <span className="old-price">$32.8</span>
                        </div>
                        <div className="add-cart" onClick={() => cartHandler(item.id)} >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                ))}

              </div>
            </div>

            <div className="tab-pane fade" id="tab-two" role="tabpanel" aria-labelledby="tab-two">
              <div className="row product-grid-4">
                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-10-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-10-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="hot">Hot</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Snack</a>
                      </div>
                      <h2>
<div onClick={() => onClickProductHandler(item.id)}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">NestFood</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$28.85</span>
                          <span className="old-price">$32.8</span>
                        </div>
                        <div className="add-cart"   >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-12-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-12-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="sale">Sale</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Hodo Foods</a>
                      </div>
                      <h2>
                                                <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '80%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (3.5)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">Stouffer</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$52.85</span>
                          <span className="old-price">$55.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-13-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-13-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="new">New</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Snack</a>
                      </div>
                      <h2>
                                             <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '85%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">StarKist</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$48.85</span>
                          <span className="old-price">$52.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-14-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-14-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Vegetables</a>
                      </div>
                      <h2>
                        <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">NestFood</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$17.85</span>
                          <span className="old-price">$19.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-15-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-15-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="best">-14%</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Pet Foods</a>
                      </div>
                      <h2>
                        <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>
                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">NestFood</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$23.85</span>
                          <span className="old-price">$25.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-16-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-16-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Hodo Foods</a>
                      </div>
                      <h2>
                        <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>
                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">NestFood</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$54.85</span>
                          <span className="old-price">$55.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-7-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-7-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Meats</a>
                      </div>
                      <h2>
                        <a href="#">Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g</a>
                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">NestFood</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$32.85</span>
                          <span className="old-price">$33.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-8-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-8-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="sale">Sale</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Snack</a>
                      </div>
                      <h2>
                                                <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">NestFood</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$35.85</span>
                          <span className="old-price">$37.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-9-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-9-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="hot">Hot</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Coffes</a>
                      </div>
                      <h2>
                                                <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">Old El Paso</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$23.85</span>
                          <span className="old-price">$25.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                  <div className="product-cart-wrap">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-10-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-10-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Cream</a>
                      </div>
                      <h2>
                                                <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '50%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (2.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">Tyson</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$22.85</span>
                          <span className="old-price">$24.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="tab-three" role="tabpanel" aria-labelledby="tab-three">
              <div className="row product-grid-4">
                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-9-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-9-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="hot">Hot</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Snack</a>
                      </div>
                      <h2>
<div onClick={() => onClickProductHandler(item.id)}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">NestFood</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$28.85</span>
                          <span className="old-price">$32.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-8-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-8-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="sale">Sale</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Hodo Foods</a>
                      </div>
                      <h2>
                                                <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '80%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (3.5)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">Stouffer</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$52.85</span>
                          <span className="old-price">$55.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-7-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-7-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="new">New</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Snack</a>
                      </div>
                      <h2>
                                             <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '85%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">StarKist</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$48.85</span>
                          <span className="old-price">$52.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-6-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-6-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Vegetables</a>
                      </div>
                      <h2>
                        <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">NestFood</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$17.85</span>
                          <span className="old-price">$19.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-5-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-5-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="best">-14%</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Pet Foods</a>
                      </div>
                      <h2>
                        <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>
                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">NestFood</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$23.85</span>
                          <span className="old-price">$25.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-4-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-4-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Hodo Foods</a>
                      </div>
                      <h2>
                        <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>
                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">NestFood</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$54.85</span>
                          <span className="old-price">$55.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-3-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-3-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Meats</a>
                      </div>
                      <h2>
                        <a href="#">Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g</a>
                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">NestFood</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$32.85</span>
                          <span className="old-price">$33.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-2-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-2-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="sale">Sale</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Snack</a>
                      </div>
                      <h2>
                                                <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">NestFood</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$35.85</span>
                          <span className="old-price">$37.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-9-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-9-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="hot">Hot</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Coffes</a>
                      </div>
                      <h2>
                                                <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">Old El Paso</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$23.85</span>
                          <span className="old-price">$25.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                  <div className="product-cart-wrap">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-1-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-1-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Cream</a>
                      </div>
                      <h2>
                                                <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '50%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (2.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">Tyson</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$22.85</span>
                          <span className="old-price">$24.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="tab-four" role="tabpanel" aria-labelledby="tab-four">
              <div className="row product-grid-4">
                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-6-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-6-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="hot">Hot</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Snack</a>
                      </div>
                      <h2>
<div onClick={() => onClickProductHandler(item.id)}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">NestFood</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$28.85</span>
                          <span className="old-price">$32.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-7-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-7-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="sale">Sale</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Hodo Foods</a>
                      </div>
                      <h2>
                                                <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '80%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (3.5)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">Stouffer</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$52.85</span>
                          <span className="old-price">$55.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-8-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-8-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="new">New</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Snack</a>
                      </div>
                      <h2>
                                             <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '85%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">StarKist</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$48.85</span>
                          <span className="old-price">$52.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-9-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-9-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Vegetables</a>
                      </div>
                      <h2>
                        <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">NestFood</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$17.85</span>
                          <span className="old-price">$19.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-4-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-4-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="best">-14%</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Pet Foods</a>
                      </div>
                      <h2>
                        <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>
                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">NestFood</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$23.85</span>
                          <span className="old-price">$25.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-3-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-3-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Hodo Foods</a>
                      </div>
                      <h2>
                        <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>
                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">NestFood</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$54.85</span>
                          <span className="old-price">$55.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-2-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-2-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Meats</a>
                      </div>
                      <h2>
                        <a href="#">Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g</a>
                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">NestFood</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$32.85</span>
                          <span className="old-price">$33.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-1-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-1-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="sale">Sale</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Snack</a>
                      </div>
                      <h2>
                                                <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">NestFood</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$35.85</span>
                          <span className="old-price">$37.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-11-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-11-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="hot">Hot</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Coffes</a>
                      </div>
                      <h2>
                                                <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">Old El Paso</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$23.85</span>
                          <span className="old-price">$25.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                  <div className="product-cart-wrap">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-12-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-12-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Cream</a>
                      </div>
                      <h2>
                                                <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '50%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (2.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">Tyson</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$22.85</span>
                          <span className="old-price">$24.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="tab-five" role="tabpanel" aria-labelledby="tab-five">
              <div className="row product-grid-4">
                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-12-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-12-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="hot">Hot</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Snack</a>
                      </div>
                      <h2>
<div onClick={() => onClickProductHandler(item.id)}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">NestFood</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$28.85</span>
                          <span className="old-price">$32.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-13-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-13-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="sale">Sale</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Hodo Foods</a>
                      </div>
                      <h2>
                                                <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '80%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (3.5)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">Stouffer</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$52.85</span>
                          <span className="old-price">$55.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-14-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-14-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="new">New</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Snack</a>
                      </div>
                      <h2>
                                             <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '85%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">StarKist</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$48.85</span>
                          <span className="old-price">$52.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-15-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-15-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Vegetables</a>
                      </div>
                      <h2>
                        <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">NestFood</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$17.85</span>
                          <span className="old-price">$19.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-16-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-16-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="best">-14%</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Pet Foods</a>
                      </div>
                      <h2>
                        <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>
                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">NestFood</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$23.85</span>
                          <span className="old-price">$25.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-5-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-5-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Hodo Foods</a>
                      </div>
                      <h2>
                        <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>
                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">NestFood</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$54.85</span>
                          <span className="old-price">$55.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-7-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-7-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Meats</a>
                      </div>
                      <h2>
                        <a href="#">Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g</a>
                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">NestFood</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$32.85</span>
                          <span className="old-price">$33.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-8-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-8-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="sale">Sale</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Snack</a>
                      </div>
                      <h2>
                                                <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">NestFood</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$35.85</span>
                          <span className="old-price">$37.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-9-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-9-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="hot">Hot</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Coffes</a>
                      </div>
                      <h2>
                                                <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">Old El Paso</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$23.85</span>
                          <span className="old-price">$25.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                  <div className="product-cart-wrap">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-10-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-10-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Cream</a>
                      </div>
                      <h2>
                                                <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '50%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (2.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">Tyson</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$22.85</span>
                          <span className="old-price">$24.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="tab-six" role="tabpanel" aria-labelledby="tab-six">
              <div className="row product-grid-4">
                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-4-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-4-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="hot">Hot</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Snack</a>
                      </div>
                      <h2>
<div onClick={() => onClickProductHandler(item.id)}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">NestFood</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$28.85</span>
                          <span className="old-price">$32.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-6-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-6-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="sale">Sale</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Hodo Foods</a>
                      </div>
                      <h2>
                                                <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '80%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (3.5)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">Stouffer</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$52.85</span>
                          <span className="old-price">$55.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-8-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-8-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="new">New</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Snack</a>
                      </div>
                      <h2>
                                             <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '85%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">StarKist</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$48.85</span>
                          <span className="old-price">$52.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-9-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-9-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Vegetables</a>
                      </div>
                      <h2>
                        <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">NestFood</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$17.85</span>
                          <span className="old-price">$19.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-5-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-5-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="best">-14%</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Pet Foods</a>
                      </div>
                      <h2>
                        <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>
                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">NestFood</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$23.85</span>
                          <span className="old-price">$25.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-6-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-6-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Hodo Foods</a>
                      </div>
                      <h2>
                        <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>
                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">NestFood</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$54.85</span>
                          <span className="old-price">$55.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-7-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-7-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Meats</a>
                      </div>
                      <h2>
                        <a href="#">Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g</a>
                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">NestFood</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$32.85</span>
                          <span className="old-price">$33.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-8-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-8-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="sale">Sale</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Snack</a>
                      </div>
                      <h2>
                                                <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">NestFood</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$35.85</span>
                          <span className="old-price">$37.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-9-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-9-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="hot">Hot</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Coffes</a>
                      </div>
                      <h2>
                      <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">Old El Paso</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$23.85</span>
                          <span className="old-price">$25.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                  <div className="product-cart-wrap">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-10-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-10-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Cream</a>
                      </div>
                      <h2>
                                                <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '50%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (2.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">Tyson</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$22.85</span>
                          <span className="old-price">$24.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="tab-seven" role="tabpanel" aria-labelledby="tab-seven">
              <div className="row product-grid-4">
                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-5-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-5-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="hot">Hot</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Snack</a>
                      </div>
                      <h2>
<div onClick={() => onClickProductHandler(item.id)}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">NestFood</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$28.85</span>
                          <span className="old-price">$32.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-3-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-3-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="sale">Sale</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Hodo Foods</a>
                      </div>
                      <h2>
                                                <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '80%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (3.5)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">Stouffer</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$52.85</span>
                          <span className="old-price">$55.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-7-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-7-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="new">New</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Snack</a>
                      </div>
                      <h2>
                                             <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '85%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">StarKist</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$48.85</span>
                          <span className="old-price">$52.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-9-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-9-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Vegetables</a>
                      </div>
                      <h2>
                        <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">NestFood</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$17.85</span>
                          <span className="old-price">$19.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-10-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-10-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="best">-14%</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Pet Foods</a>
                      </div>
                      <h2>
                        <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>
                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">NestFood</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$23.85</span>
                          <span className="old-price">$25.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-16-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-16-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Hodo Foods</a>
                      </div>
                      <h2>
                        <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>
                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">NestFood</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$54.85</span>
                          <span className="old-price">$55.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-7-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-7-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Meats</a>
                      </div>
                      <h2>
                        <a href="#">Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g</a>
                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">NestFood</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$32.85</span>
                          <span className="old-price">$33.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-8-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-8-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="sale">Sale</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Snack</a>
                      </div>
                      <h2>
                                                <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">NestFood</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$35.85</span>
                          <span className="old-price">$37.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-9-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-9-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="hot">Hot</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Coffes</a>
                      </div>
                      <h2>
                                                <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">Old El Paso</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$23.85</span>
                          <span className="old-price">$25.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                  <div className="product-cart-wrap">
                    <div className="product-img-action-wrap" >
                      <div className="product-img product-img-zoom">
                        <a href="#">
                          <img className="default-img" src="assets/imgs/shop/product-10-1.jpg" alt="" />
                          <img className="hover-img" src="assets/imgs/shop/product-10-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-action-1">
                        <a aria-label="Add To Wishlist" className="action-btn" href="#">
                          <i className="fi-rs-heart"></i>
                        </a>
                        <a aria-label="Compare" className="action-btn" href="#">
                          <i className="fi-rs-shuffle"></i>
                        </a>
                        <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="fi-rs-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <a href="#">Cream</a>
                      </div>
                      <h2>
                                                <div onClick={()=>onClickProductHandler(item.id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>

                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{ width: '50%' }}></div>
                        </div>
                        <span className="font-small ml-5 text-muted"> (2.0)</span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="vendor-details-1.html">Tyson</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$22.85</span>
                          <span className="old-price">$24.8</span>
                        </div>
                        <div className="add-cart" >
                          <a className="add">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductTabSection

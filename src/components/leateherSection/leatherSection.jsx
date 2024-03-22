import { Link, useNavigate } from "react-router-dom"
const dummydata=[
    {
      "id": 1,
      "name": "Item 1",
      "image":'src/assets/drive-download-20240310T091457Z-001/ST 353 - Chique/img1.jpg'
    },
    {
      "id": 2,
      "name": "Item 2",
      "image":'src/assets/drive-download-20240310T091457Z-001/ST 353 - Chique/img7.jpg'
    },
    {
      "id": 3,
      "name": "Item 3",
      "image":'src/assets/drive-download-20240310T091457Z-001/ST 353 - Chique/img3.jpg'
    },
    {
      "id": 4,
      "name": "Item 4",
      "image":'src/assets/drive-download-20240310T091457Z-001/ST 353 - Chique/img4.jpg'
    },
    {
      "id": 5,
      "name": "Item 5",
      "image":'src/assets/drive-download-20240310T091457Z-001/ST 353 - Chique/img5.jpg'
    },
    
  ]
  const LeatherSection = ({data}) => {
    const navigate=useNavigate()
    const onClickProductHandler=(productid)=>{
      navigate(`/products/${productid}`)
    }

    return (
      <>
        <section className="product-tabs section-padding position-relative">
          <div className="container">
            <div className="section-title style-2">
            <Link  to="premium-leather" style={{cursor:"pointer"}}><h3>Premium Leather</h3></Link>
          
            </div>
  
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
                <div className="row product-grid-4">
                {/* {data.filter(item => item.category && item.category.name === "premium Leather").map((item) => ( */}
                                {data.map((item) => (

                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src={item.productImage} alt="" />
                            <img className="hover-img" src="" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
                            <i className="fi-rs-shuffle"></i>
                          </a>
                          <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="fi-rs-eye"></i>
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg" style={{backgroundColor:"red"}}>
                          <span className="hot" s>trending</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Snack</a>
                        </div>
                        <h2>
                        <div onClick={()=>onClickProductHandler(item._id)} style={{cursor:"pointer"}}>Seeds of Change Organic Quinoa, Brown, & Red Rice</div>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  ))}
                  
  {/* 
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-2-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-2-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
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
                          <a href="shop-grid-right.html">Hodo Foods</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">All Natural Italian-Style Chicken Meatballs</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-3-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-3-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
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
                          <a href="shop-grid-right.html">Snack</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Angie’s Boomchickapop Sweet & Salty Kettle Corn</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-4-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-4-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
                            <i className="fi-rs-shuffle"></i>
                          </a>
                          <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="fi-rs-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Vegetables</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Foster Farms Takeout Crispy Classic Buffalo Wings</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-5-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-5-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
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
                          <a href="shop-grid-right.html">Pet Foods</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Blue Diamond Almonds Lightly Salted Vegetables</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-6-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-6-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
                            <i className="fi-rs-shuffle"></i>
                          </a>
                          <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="fi-rs-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Hodo Foods</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Chobani Complete Vanilla Greek Yogurt</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-7-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-7-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
                            <i className="fi-rs-shuffle"></i>
                          </a>
                          <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="fi-rs-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Meats</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-8-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-8-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
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
                          <a href="shop-grid-right.html">Snack</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Encore Seafoods Stuffed Alaskan Salmon</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-9-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-9-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
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
                          <a href="shop-grid-right.html">Coffes</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Gorton’s Beer Battered Fish Fillets with soft paper</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-10-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-10-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
                            <i className="fi-rs-shuffle"></i>
                          </a>
                          <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="fi-rs-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Cream</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Haagen-Dazs Caramel Cone Ice Cream Ketchup</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                </div>
              </div>
  
              <div className="tab-pane fade" id="tab-two" role="tabpanel" aria-labelledby="tab-two">
                <div className="row product-grid-4">
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-10-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-10-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
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
                          <a href="shop-grid-right.html">Snack</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-12-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-12-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
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
                          <a href="shop-grid-right.html">Hodo Foods</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">All Natural Italian-Style Chicken Meatballs</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-13-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-13-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
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
                          <a href="shop-grid-right.html">Snack</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Angie’s Boomchickapop Sweet & Salty Kettle Corn</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-14-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-14-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
                            <i className="fi-rs-shuffle"></i>
                          </a>
                          <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="fi-rs-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Vegetables</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Foster Farms Takeout Crispy Classic Buffalo Wings</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-15-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-15-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
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
                          <a href="shop-grid-right.html">Pet Foods</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Blue Diamond Almonds Lightly Salted Vegetables</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-16-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-16-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
                            <i className="fi-rs-shuffle"></i>
                          </a>
                          <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="fi-rs-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Hodo Foods</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Chobani Complete Vanilla Greek Yogurt</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-7-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-7-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
                            <i className="fi-rs-shuffle"></i>
                          </a>
                          <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="fi-rs-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Meats</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-8-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-8-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
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
                          <a href="shop-grid-right.html">Snack</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Encore Seafoods Stuffed Alaskan Salmon</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-9-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-9-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
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
                          <a href="shop-grid-right.html">Coffes</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Gorton’s Beer Battered Fish Fillets with soft paper</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-10-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-10-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
                            <i className="fi-rs-shuffle"></i>
                          </a>
                          <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="fi-rs-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Cream</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Haagen-Dazs Caramel Cone Ice Cream Ketchup</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
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
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-9-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-9-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
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
                          <a href="shop-grid-right.html">Snack</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-8-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-8-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
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
                          <a href="shop-grid-right.html">Hodo Foods</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">All Natural Italian-Style Chicken Meatballs</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-7-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-7-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
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
                          <a href="shop-grid-right.html">Snack</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Angie’s Boomchickapop Sweet & Salty Kettle Corn</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-6-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-6-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
                            <i className="fi-rs-shuffle"></i>
                          </a>
                          <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="fi-rs-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Vegetables</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Foster Farms Takeout Crispy Classic Buffalo Wings</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-5-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-5-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
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
                          <a href="shop-grid-right.html">Pet Foods</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Blue Diamond Almonds Lightly Salted Vegetables</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-4-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-4-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
                            <i className="fi-rs-shuffle"></i>
                          </a>
                          <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="fi-rs-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Hodo Foods</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Chobani Complete Vanilla Greek Yogurt</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-3-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-3-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
                            <i className="fi-rs-shuffle"></i>
                          </a>
                          <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="fi-rs-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Meats</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-2-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-2-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
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
                          <a href="shop-grid-right.html">Snack</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Encore Seafoods Stuffed Alaskan Salmon</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-9-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-9-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
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
                          <a href="shop-grid-right.html">Coffes</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Gorton’s Beer Battered Fish Fillets with soft paper</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-1-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-1-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
                            <i className="fi-rs-shuffle"></i>
                          </a>
                          <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="fi-rs-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Cream</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Haagen-Dazs Caramel Cone Ice Cream Ketchup</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
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
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-6-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-6-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
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
                          <a href="shop-grid-right.html">Snack</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-7-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-7-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
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
                          <a href="shop-grid-right.html">Hodo Foods</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">All Natural Italian-Style Chicken Meatballs</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-8-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-8-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
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
                          <a href="shop-grid-right.html">Snack</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Angie’s Boomchickapop Sweet & Salty Kettle Corn</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-9-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-9-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
                            <i className="fi-rs-shuffle"></i>
                          </a>
                          <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="fi-rs-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Vegetables</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Foster Farms Takeout Crispy Classic Buffalo Wings</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-4-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-4-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
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
                          <a href="shop-grid-right.html">Pet Foods</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Blue Diamond Almonds Lightly Salted Vegetables</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-3-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-3-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
                            <i className="fi-rs-shuffle"></i>
                          </a>
                          <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="fi-rs-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Hodo Foods</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Chobani Complete Vanilla Greek Yogurt</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-2-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-2-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
                            <i className="fi-rs-shuffle"></i>
                          </a>
                          <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="fi-rs-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Meats</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-1-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-1-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
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
                          <a href="shop-grid-right.html">Snack</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Encore Seafoods Stuffed Alaskan Salmon</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-11-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-11-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
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
                          <a href="shop-grid-right.html">Coffes</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Gorton’s Beer Battered Fish Fillets with soft paper</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-12-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-12-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
                            <i className="fi-rs-shuffle"></i>
                          </a>
                          <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="fi-rs-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Cream</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Haagen-Dazs Caramel Cone Ice Cream Ketchup</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
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
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-12-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-12-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
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
                          <a href="shop-grid-right.html">Snack</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-13-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-13-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
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
                          <a href="shop-grid-right.html">Hodo Foods</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">All Natural Italian-Style Chicken Meatballs</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-14-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-14-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
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
                          <a href="shop-grid-right.html">Snack</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Angie’s Boomchickapop Sweet & Salty Kettle Corn</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-15-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-15-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
                            <i className="fi-rs-shuffle"></i>
                          </a>
                          <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="fi-rs-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Vegetables</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Foster Farms Takeout Crispy Classic Buffalo Wings</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-16-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-16-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
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
                          <a href="shop-grid-right.html">Pet Foods</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Blue Diamond Almonds Lightly Salted Vegetables</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-5-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-5-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
                            <i className="fi-rs-shuffle"></i>
                          </a>
                          <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="fi-rs-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Hodo Foods</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Chobani Complete Vanilla Greek Yogurt</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-7-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-7-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
                            <i className="fi-rs-shuffle"></i>
                          </a>
                          <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="fi-rs-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Meats</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-8-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-8-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
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
                          <a href="shop-grid-right.html">Snack</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Encore Seafoods Stuffed Alaskan Salmon</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-9-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-9-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
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
                          <a href="shop-grid-right.html">Coffes</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Gorton’s Beer Battered Fish Fillets with soft paper</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-10-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-10-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
                            <i className="fi-rs-shuffle"></i>
                          </a>
                          <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="fi-rs-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Cream</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Haagen-Dazs Caramel Cone Ice Cream Ketchup</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
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
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-4-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-4-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
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
                          <a href="shop-grid-right.html">Snack</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-6-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-6-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
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
                          <a href="shop-grid-right.html">Hodo Foods</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">All Natural Italian-Style Chicken Meatballs</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-8-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-8-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
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
                          <a href="shop-grid-right.html">Snack</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Angie’s Boomchickapop Sweet & Salty Kettle Corn</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-9-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-9-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
                            <i className="fi-rs-shuffle"></i>
                          </a>
                          <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="fi-rs-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Vegetables</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Foster Farms Takeout Crispy Classic Buffalo Wings</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-5-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-5-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
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
                          <a href="shop-grid-right.html">Pet Foods</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Blue Diamond Almonds Lightly Salted Vegetables</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-6-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-6-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
                            <i className="fi-rs-shuffle"></i>
                          </a>
                          <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="fi-rs-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Hodo Foods</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Chobani Complete Vanilla Greek Yogurt</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-7-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-7-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
                            <i className="fi-rs-shuffle"></i>
                          </a>
                          <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="fi-rs-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Meats</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-8-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-8-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
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
                          <a href="shop-grid-right.html">Snack</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Encore Seafoods Stuffed Alaskan Salmon</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-9-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-9-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
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
                          <a href="shop-grid-right.html">Coffes</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Gorton’s Beer Battered Fish Fillets with soft paper</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-10-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-10-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
                            <i className="fi-rs-shuffle"></i>
                          </a>
                          <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="fi-rs-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Cream</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Haagen-Dazs Caramel Cone Ice Cream Ketchup</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
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
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-5-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-5-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
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
                          <a href="shop-grid-right.html">Snack</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-3-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-3-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
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
                          <a href="shop-grid-right.html">Hodo Foods</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">All Natural Italian-Style Chicken Meatballs</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-7-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-7-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
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
                          <a href="shop-grid-right.html">Snack</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Angie’s Boomchickapop Sweet & Salty Kettle Corn</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-9-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-9-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
                            <i className="fi-rs-shuffle"></i>
                          </a>
                          <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="fi-rs-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Vegetables</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Foster Farms Takeout Crispy Classic Buffalo Wings</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-10-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-10-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
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
                          <a href="shop-grid-right.html">Pet Foods</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Blue Diamond Almonds Lightly Salted Vegetables</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-16-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-16-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
                            <i className="fi-rs-shuffle"></i>
                          </a>
                          <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="fi-rs-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Hodo Foods</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Chobani Complete Vanilla Greek Yogurt</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-7-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-7-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
                            <i className="fi-rs-shuffle"></i>
                          </a>
                          <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="fi-rs-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Meats</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-8-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-8-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
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
                          <a href="shop-grid-right.html">Snack</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Encore Seafoods Stuffed Alaskan Salmon</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-9-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-9-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
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
                          <a href="shop-grid-right.html">Coffes</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Gorton’s Beer Battered Fish Fillets with soft paper</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="assets/imgs/shop/product-10-1.jpg" alt="" />
                            <img className="hover-img" src="assets/imgs/shop/product-10-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
                            <i className="fi-rs-shuffle"></i>
                          </a>
                          <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="fi-rs-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Cream</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Haagen-Dazs Caramel Cone Ice Cream Ketchup</a>
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
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
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
  
  export default LeatherSection
  
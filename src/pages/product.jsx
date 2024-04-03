import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import SingleProductImages from "../components/SingleProductImages";
import { fetchParticularProduct } from "../redux/actions/product/productActions";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { addToCartHandler } from "../redux/actions/cart/cartActions";
import { Link } from "react-router-dom";

const Product = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const storeData = useSelector((store) => store.products);
  const { particularproduct, productsLoading, appErr, serverErr, products } = storeData;
  // console.log(particularproduct,productsLoading,appErr,serverErr,)

  useEffect(() => {
    const res = dispatch(fetchParticularProduct(id));
    // console.log(res)xz
  }, [dispatch]);

  const cartHandler = () => {
    const res = dispatch(addToCartHandler(particularproduct));
    // console.log("hello");
  };

  // State to store the quantity value
  const [quantity, setQuantity] = useState(1);

  // Function to handle quantity increase
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Function to handle quantity decrease
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <>
      <Header />
      <main className="main">
        <div className="page-header breadcrumb-wrap">
          <div className="container">
            <div className="breadcrumb">
              <a>
                <Link to="/">
                  <i className="fi-rs-home mr-5"></i>Home
                </Link>
              </a>
              <span></span>
              <a href="shop-grid-right.html">Products</a>
              <span></span> {particularproduct.title}
            </div>
          </div>
        </div>
        <div className="container mb-30">
          <div className="row">
            <div className="col-xl-10 col-lg-12 m-auto">
              <div className="product-detail accordion-detail">
                <div className="row mb-50 mt-30">
                  <SingleProductImages product={particularproduct} />
                  <div className="col-md-6 col-sm-12 col-xs-12">
                    <div className="detail-info pr-30 pl-30">
                      <span className="stock-status out-stock"> Sale Off </span>
                      <h2 className="title-detail">{particularproduct.title}</h2>
                      <div className="product-detail-rating">
                        <div className="product-rate-cover text-end">
                          <div className="product-rate d-inline-block">
                            <div className="product-rating" style={{ width: "90%" }}></div>
                          </div>
                          <span className="font-small ml-5 text-muted">(32 reviews)</span>
                        </div>
                      </div>
                      <div className="clearfix product-price-cover">
                        <div className="product-price primary-color float-left">
                          <span className="current-price text-brand">&#8377; {particularproduct.SellingPrice}</span>
                          <span>
                            <span className="save-price font-md color3 ml-15">26% Off</span>
                            <span className="old-price font-md ml-15">5000</span>
                          </span>
                        </div>
                      </div>
                      <div className="short-desc mb-30">
                        <p className="font-lg">{particularproduct.description}</p>
                      </div>
                      <div className="attr-detail attr-size mb-3">
                        <strong className="mr-10">Size</strong>
                        <ul className="list-filter size-filter font-small">
                          {particularproduct &&
                            particularproduct.sizesAvailable &&
                            particularproduct.sizesAvailable.map((item, index) => (
                              <li key={index}>
                                <a>{item.size}</a>
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div className="attr-detail attr-size mb-30">
                        <strong className="mr-10">Colors</strong>
                        <ul className="list-filter color-filter flex-align-justify-center size-filter font-small">
                          {particularproduct &&
                            particularproduct.colorsAvailable &&
                            particularproduct.colorsAvailable.map((item, index) => (
                              <li key={index}>
                                <a className={`product-color-box product${item}`}></a>
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div className="detail-extralink mb-50">
                        <div className="detail-qty border radius">
                          <a className="qty-down" onClick={decreaseQuantity}>
                            <i className="fi-rs-angle-small-down"></i>
                          </a>
                          <input type="text" name="quantity" className="qty-val" value={quantity} readOnly />
                          <a className="qty-up" onClick={increaseQuantity}>
                            <i className="fi-rs-angle-small-up"></i>
                          </a>
                        </div>
                        <div className="product-extra-link2">
                          <button type="submit" className="button button-add-to-cart" onClick={() => cartHandler(particularproduct)}>
                            <i className="fi-rs-shopping-cart"></i>Add to cart
                          </button>
                          <a aria-label="Add To Wishlist" className="action-btn hover-up" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn hover-up" href="shop-compare.html">
                            <i className="fi-rs-shuffle"></i>
                          </a>
                        </div>
                      </div>
                      <div className="font-xs">
                        <ul className="mr-50 float-start">
                          <li className="mb-5">
                            Type: <span className="text-brand">{particularproduct.occasion}</span>
                          </li>
                          <li className="mb-5">
                            MFG:<span className="text-brand"> Jun 4.2024</span>
                          </li>
                          <li>
                            LIFE: <span className="text-brand">2 year </span>
                          </li>
                        </ul>
                        <ul className="float-start">
                          <li className="mb-5">
                            Product-Id: <a>{particularproduct.productName}</a>
                          </li>
                          <li className="mb-5">
                            Tags:
                            <a rel="tag">{particularproduct.tag}</a>
                          </li>
                          <li>
                            Stock:
                            <span className="in-stock text-brand ml-5">8 Items In Stock</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-info">
                  <div className="tab-style3">
                    <div className="tab-content shop_info_tab entry-main-content">
                      <div className="tab-pane fade show active" id="Description">
                        <div className="">
                          <h4 className="mt-30">Product Description</h4>
                          <hr className="wp-block-separator is-style-wide" />
                          <ul className="product-more-infor mt-30">
                            <li>
                              <span>Type Of Packing</span> Bottle
                            </li>
                            <li>
                              <span>Color</span> Green, Pink, Powder Blue, Purple
                            </li>
                            <li>
                              <span>Quantity Per Case</span> 100ml
                            </li>
                            <li>
                              <span>Ethyl Alcohol</span> 70%
                            </li>
                            <li>
                              <span>Piece In One</span> Carton
                            </li>
                          </ul>
                          <hr className="wp-block-separator is-style-dots" />
                          <p>
                            Laconic overheard dear woodchuck wow this outrageously taut beaver hey hello far meadowlark imitatively
                            egregiously hugged that yikes minimally unanimous pouted flirtatiously as beaver beheld above forward energetic
                            across this jeepers beneficently cockily less a the raucously that magic upheld far so the this where crud then
                            below after jeez enchanting drunkenly more much wow callously irrespective limpet.
                          </p>
                          <h4 className="mt-30">Packaging & Delivery</h4>
                          <hr className="wp-block-separator is-style-wide" />
                          <p>
                            Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled
                            sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as
                            this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well
                            concomitantly.
                          </p>
                          <p>
                            Scallop or far crud plain remarkably far by thus far iguana lewd precociously and and less rattlesnake contrary
                            caustic wow this near alas and next and pled the yikes articulate about as less cackled dalmatian in much less
                            well jeering for the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some
                            wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.
                          </p>
                          <h4 className="mt-30">Warnings</h4>
                          <ul className="product-more-infor mt-30">
                            <li>Oil separation occurs naturally. May contain pieces of shell.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Product;

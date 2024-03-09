import category1 from '../../assets/imgs/theme/icons/category-1.svg';
import category2 from '../../assets/imgs/theme/icons/category-2.svg';
import category3 from '../../assets/imgs/theme/icons/category-3.svg';
import category4 from '../../assets/imgs/theme/icons/category-4.svg';
import category5 from '../../assets/imgs/theme/icons/category-5.svg';
import category6 from '../../assets/imgs/theme/icons/category-6.svg';
import category7 from '../../assets/imgs/theme/icons/category-7.svg';
import category8 from '../../assets/imgs/theme/icons/category-8.svg';
import category9 from '../../assets/imgs/theme/icons/category-9.svg';
import category10 from '../../assets/imgs/theme/icons/category-10.svg';
import icon1 from '../../assets/imgs/theme/icons/icon-1.svg';
import icon2 from '../../assets/imgs/theme/icons/icon-2.svg';
import icon3 from '../../assets/imgs/theme/icons/icon-3.svg';
import icon4 from '../../assets/imgs/theme/icons/icon-4.svg';
import logo  from '../../assets/imgs/theme/logo.png';
import iconHot from '../../assets/imgs/theme/icons/icon-hot.svg';
import iconHeadphone from '../../assets/imgs/theme/icons/icon-headphone.svg'




const HeaderBottom = () => {
  return (
    <>
              <div className="header-bottom header-bottom-bg-color sticky-bar">
            <div className="container">
                <div className="header-wrap header-space-between position-relative">
                    <div className="logo logo-width-1 d-block d-lg-none">
                        <a href='#'><img src={logo} alt="logo" /></a>
                    </div>
                    <div className="header-nav d-none d-lg-flex">
                        <div className="main-categori-wrap d-none d-lg-block">
                            <a className="categories-button-active" href="#">
                                <span className="fi-rs-apps"></span> <span className="et">Browse</span> All Categories
                                <i className="fi-rs-angle-down"></i>
                            </a>
                            <div className="categories-dropdown-wrap categories-dropdown-active-large font-heading">
                                <div className="d-flex categori-dropdown-inner">
                                    <ul>
                                        <li>
                                            <a href='#'> <img
                                                    src={category1} alt="" />Milks and
                                                Dairies</a>
                                        </li>
                                        <li>
                                            <a href='#'> <img
                                                    src={category2} alt="" />Clothing &
                                                beauty</a>
                                        </li>
                                        <li>
                                            <a href='#'> <img
                                                    src={category3} alt="" />Pet Foods &
                                                Toy</a>
                                        </li>
                                        <li>
                                            <a href='#'> <img
                                                    src={category4} alt="" />Baking
                                                material</a>
                                        </li>
                                        <li>
                                            <a href='#'> <img
                                                    src={category5} alt="" />Fresh
                                                Fruit</a>
                                        </li>
                                    </ul>
                                    <ul className="end">
                                        <li>
                                            <a href='#'> <img
                                                    src={category6} alt="" />Wines &
                                                Drinks</a>
                                        </li>
                                        <li>
                                            <a href='#'> <img
                                                    src={category7} alt="" />Fresh
                                                Seafood</a>
                                        </li>
                                        <li>
                                            <a href='#'> <img
                                                    src={category8} alt="" />Fast food</a>
                                        </li>
                                        <li>
                                            <a href='#'> <img
                                                    src={category9} alt="" />Vegetables</a>
                                        </li>
                                        <li>
                                            <a href='#'> <img
                                                    src={category10} alt="" />Bread and
                                                Juice</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="more_slide_open custom" >
                                    <div className="d-flex categori-dropdown-inner">
                                        <ul>
                                            <li>
                                                <a href='#'> <img
                                                        src={icon1} alt="" />Milks and
                                                    Dairies</a>
                                            </li>
                                            <li>
                                                <a href='#'> <img
                                                        src={icon2} alt="" />Clothing &
                                                    beauty</a>
                                            </li>
                                        </ul>
                                        <ul className="end">
                                            <li>
                                                <a href='#'> <img
                                                        src={icon3} alt="" />Wines &
                                                    Drinks</a>
                                            </li>
                                            <li>
                                                <a href='#'> <img
                                                        src={icon4} alt="" />Fresh
                                                    Seafood</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="more_categories"><span className="icon"></span> <span className="heading-sm-1">Show
                                        more...</span></div>
                            </div>
                        </div>
                        <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
                            <nav>
                                <ul>
                                    <li className="hot-deals"><img src={iconHot}
                                            alt="hot deals" /><a href='#'>Deals</a></li>
                                    <li>
                                        <a className='active' href='#'>Home <i className="fi-rs-angle-down"></i></a>
                                        <ul className="sub-menu">
                                            <li><a href='#'>Home 1</a></li>
                                            <li><a href='#'>Home 2</a></li>
                                            <li><a href='#'>Home 3</a></li>
                                            <li><a href='#'>Home 4</a></li>
                                            <li><a href='#'>Home 5</a></li>
                                            <li><a href='#'>Home 6</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href='#'>About</a>
                                    </li>
                                    <li>
                                        <a href='#'>Shop <i className="fi-rs-angle-down"></i></a>
                                        <ul className="sub-menu">
                                            <li><a href='#'>Shop Grid – Right Sidebar</a></li>
                                            <li><a href='#'>Shop Grid – Left Sidebar</a></li>
                                            <li><a href='#'>Shop List – Right Sidebar</a></li>
                                            <li><a href='#'>Shop List – Left Sidebar</a></li>
                                            <li><a href='#'>Shop - Wide</a></li>
                                            <li>
                                                <a href="#">Single Product <i className="fi-rs-angle-right"></i></a>
                                                <ul className="level-menu">
                                                    <li><a href='#'>Product – Right Sidebar</a>
                                                    </li>
                                                    <li><a href='#'>Product – Left Sidebar</a></li>
                                                    <li><a href='#'>Product – No sidebar</a></li>
                                                    <li><a href='#'>Product – Vendor Infor</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href='#'>Shop – Filter</a></li>
                                            <li><a href='#'>Shop – Wishlist</a></li>
                                            <li><a href='#'>Shop – Cart</a></li>
                                            <li><a href='#'>Shop – Checkout</a></li>
                                            <li><a href='#'>Shop – Compare</a></li>
                                            <li>
                                                <a href="#">Shop Invoice<i className="fi-rs-angle-right"></i></a>
                                                <ul className="level-menu">
                                                    <li><a href='#'>Shop Invoice 1</a></li>
                                                    <li><a href='#'>Shop Invoice 2</a></li>
                                                    <li><a href='#'>Shop Invoice 3</a></li>
                                                    <li><a href='#'>Shop Invoice 4</a></li>
                                                    <li><a href='#'>Shop Invoice 5</a></li>
                                                    <li><a href='#'>Shop Invoice 6</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Vendors <i className="fi-rs-angle-down"></i></a>
                                        <ul className="sub-menu">
                                            <li><a href='#'>Vendors Grid</a></li>
                                            <li><a href='#'>Vendors List</a></li>
                                            <li><a href='#'>Vendor Details 01</a></li>
                                            <li><a href='#'>Vendor Details 02</a></li>
                                            <li><a href='#'>Vendor Dashboard</a></li>
                                            <li><a href='#'>Vendor Guide</a></li>
                                        </ul>
                                    </li>
                                    <li className="position-static">
                                        <a href="#">Mega menu <i className="fi-rs-angle-down"></i></a>
                                        <ul className="mega-menu">
                                            <li className="sub-mega-menu sub-mega-menu-width-22">
                                                <a className="menu-title" href="#">Fruit & Vegetables</a>
                                                <ul>
                                                    <li><a href='#'>Meat & Poultry</a></li>
                                                    <li><a href='#'>Fresh Vegetables</a></li>
                                                    <li><a href='#'>Herbs & Seasonings</a></li>
                                                    <li><a href='#'>Cuts & Sprouts</a></li>
                                                    <li><a href='#'>Exotic Fruits & Veggies</a>
                                                    </li>
                                                    <li><a href='#'>Packaged Produce</a></li>
                                                </ul>
                                            </li>
                                            <li className="sub-mega-menu sub-mega-menu-width-22">
                                                <a className="menu-title" href="#">Breakfast & Dairy</a>
                                                <ul>
                                                    <li><a href='#'>Milk & Flavoured Milk</a></li>
                                                    <li><a href='#'>Butter and Margarine</a></li>
                                                    <li><a href='#'>Eggs Substitutes</a></li>
                                                    <li><a href='#'>Marmalades</a></li>
                                                    <li><a href='#'>Sour Cream</a></li>
                                                    <li><a href='#'>Cheese</a></li>
                                                </ul>
                                            </li>
                                            <li className="sub-mega-menu sub-mega-menu-width-22">
                                                <a className="menu-title" href="#">Meat & Seafood</a>
                                                <ul>
                                                    <li><a href='#'>Breakfast Sausage</a></li>
                                                    <li><a href='#'>Dinner Sausage</a></li>
                                                    <li><a href='#'>Chicken</a></li>
                                                    <li><a href='#'>Sliced Deli Meat</a></li>
                                                    <li><a href='#'>Wild Caught Fillets</a></li>
                                                    <li><a href='#'>Crab and Shellfish</a></li>
                                                </ul>
                                            </li>
                                            <li className="sub-mega-menu sub-mega-menu-width-34">
                                                <div className="menu-banner-wrap">
                                                    <a href='#'><img
                                                            src="assets/imgs/banner/banner-menu.png" alt="Nest" /></a>
                                                    <div className="menu-banner-content">
                                                        <h4>Hot deals</h4>
                                                        <h3>
                                                            Don&apos;t miss<br />
                                                            Trending
                                                        </h3>
                                                        <div className="menu-banner-price">
                                                            <span className="new-price text-success">Save to 50%</span>
                                                        </div>
                                                        <div className="menu-banner-btn">
                                                            <a href='#'>Shop now</a>
                                                        </div>
                                                    </div>
                                                    <div className="menu-banner-discount">
                                                        <h3>
                                                            <span>25%</span>
                                                            off
                                                        </h3>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href='#'>Blog <i className="fi-rs-angle-down"></i></a>
                                        <ul className="sub-menu">
                                            <li><a href='#'>Blog Category Grid</a></li>
                                            <li><a href='#'>Blog Category List</a></li>
                                            <li><a href='#'>Blog Category Big</a></li>
                                            <li><a href='#'>Blog Category Wide</a></li>
                                            <li>
                                                <a href="#">Single Post <i className="fi-rs-angle-right"></i></a>
                                                <ul className="level-menu level-menu-modify">
                                                    <li><a href='#'>Left Sidebar</a></li>
                                                    <li><a href='#'>Right Sidebar</a></li>
                                                    <li><a href='#'>No Sidebar</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Pages <i className="fi-rs-angle-down"></i></a>
                                        <ul className="sub-menu">
                                            <li><a href='#'>About Us</a></li>
                                            <li><a href='#'>Contact</a></li>
                                            <li><a href='#'>My Account</a></li>
                                            <li><a href='#'>Login</a></li>
                                            <li><a href='#'>Register</a></li>
                                            <li><a href='#'>Forgot password</a></li>
                                            <li><a href='#'>Reset password</a></li>
                                            <li><a href='#'>Purchase Guide</a></li>
                                            <li><a href='#'>Privacy Policy</a></li>
                                            <li><a href='#'>Terms of Service</a></li>
                                            <li><a href='#'>404 Page</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href='#'>Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="hotline d-none d-lg-flex">
                        <img src={iconHeadphone} alt="hotline" />
                        <p>1900 - 888<span>24/7 Support Center</span></p>
                    </div>
                    <div className="header-action-icon-2 d-block d-lg-none">
                        <div className="burger-icon burger-icon-white">
                            <span className="burger-icon-top"></span>
                            <span className="burger-icon-mid"></span>
                            <span className="burger-icon-bottom"></span>
                        </div>
                    </div>
                    <div className="header-action-right d-block d-lg-none">
                        <div className="header-action-2">
                            <div className="header-action-icon-2">
                                <a href='shop-wishlist.html'>
                                    <img alt="Nest" src="assets/imgs/theme/icons/icon-heart.svg" />
                                    <span className="pro-count white">4</span>
                                </a>
                            </div>
                            <div className="header-action-icon-2">
                                <a className='mini-cart-icon' href='shop-cart.html'>
                                    <img alt="Nest" src="assets/imgs/theme/icons/icon-cart.svg" />
                                    <span className="pro-count white">2</span>
                                </a>
                                <div className="cart-dropdown-wrap cart-dropdown-hm2">
                                    <ul>
                                        <li>
                                            <div className="shopping-cart-img">
                                                <a href='#'><img alt="Nest"
                                                        src="assets/imgs/shop/thumbnail-3.jpg" /></a>
                                            </div>
                                            <div className="shopping-cart-title">
                                                <h4><a href='#'>Plain Striola Shirts</a></h4>
                                                <h3><span>1 × </span>$800.00</h3>
                                            </div>
                                            <div className="shopping-cart-delete">
                                                <a href="#"><i className="fi-rs-cross-small"></i></a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="shopping-cart-img">
                                                <a href='#'><img alt="Nest"
                                                        src="assets/imgs/shop/thumbnail-4.jpg" /></a>
                                            </div>
                                            <div className="shopping-cart-title">
                                                <h4><a href='#'>Macbook Pro 2024</a></h4>
                                                <h3><span>1 × </span>$3500.00</h3>
                                            </div>
                                            <div className="shopping-cart-delete">
                                                <a href="#"><i className="fi-rs-cross-small"></i></a>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="shopping-cart-footer">
                                        <div className="shopping-cart-total">
                                            <h4>Total <span>$383.00</span></h4>
                                        </div>
                                        <div className="shopping-cart-button">
                                            <a href='shop-cart.html'>View cart</a>
                                            <a href='shop-checkout.html'>Checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HeaderBottom
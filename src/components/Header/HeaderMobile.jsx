const HeaderMobile = () => {
  return (
    <div className="mobile-header-content-area">
      <div className="mobile-search search-style-3 mobile-header-border">
        <form action="#">
          <input type="text" placeholder="Search for items…" />
          <button type="submit">
            <i className="fi-rs-search"></i>
          </button>
        </form>
      </div>
      <div className="mobile-menu-wrap mobile-header-border">
        <nav>
          <ul className="mobile-menu font-heading">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li className="menu-item-has-children">
              <a href="shop-grid-right.html">shop</a>
              <ul className="dropdown">
                <li>
                  <a>Shop Grid - Right Sidebar</a>
                </li>
                <li>
                  <a>Shop Grid - Left Sidebar</a>
                </li>
                <li>
                  <a>Shop List - Right Sidebar</a>
                </li>
                <li>
                  <a>Shop List - Left Sidebar</a>
                </li>
                <li>
                  <a>Shop - Wide</a>
                </li>
                <li>
                  <a href="shop-compare.html">Shop - Compare</a>
                </li>
                <li className="menu-item-has-children">
                  <a>Shop Invoice</a>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <a>Vendors</a>
            </li>
            <li className="menu-item-has-children">
              <a>Mega menu</a>
            </li>
            <li className="menu-item-has-children">
              <a href="blog-category-fullwidth.html">Blog</a>
            </li>
            <li className="menu-item-has-children">
              <a>Pages</a>
            </li>
            <li className="menu-item-has-children">
              <a>Language</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mobile-header-info-wrap">
        <div className="single-mobile-header-info">
          <a href="page-contact.html">
            <i className="fi-rs-marker"></i> Our location{" "}
          </a>
        </div>
        <div className="single-mobile-header-info">
          <a href="page-login.html">
            <i className="fi-rs-user"></i>Log In / Sign Up{" "}
          </a>
        </div>
        <div className="single-mobile-header-info">
          <a>
            <i className="fi-rs-headphones"></i>(+01) - 2345 - 6789{" "}
          </a>
        </div>
      </div>
      <div className="mobile-social-icon mb-50">
        <h6 className="mb-15">Follow Us</h6>
        <a>
          <img src="assets/imgs/theme/icons/icon-facebook-white.svg" alt="" />
        </a>
        <a>
          <img src="assets/imgs/theme/icons/icon-twitter-white.svg" alt="" />
        </a>
        <a>
          <img src="assets/imgs/theme/icons/icon-instagram-white.svg" alt="" />
        </a>
        <a>
          <img src="assets/imgs/theme/icons/icon-pinterest-white.svg" alt="" />
        </a>
        <a>
          <img src="assets/imgs/theme/icons/icon-youtube-white.svg" alt="" />
        </a>
      </div>
      <div className="site-copyright">Copyright 2024 © Nest. All rights reserved. Powered by AliThemes.</div>
    </div>
  );
};

export default HeaderMobile;

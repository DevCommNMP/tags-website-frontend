const HeaderTop = () => {
  return (
    <>
      <div className="header-top header-top-ptb-1 d-none d-lg-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-4">
              <div className="header-info">
                <ul>
                  <li>
                    <a href="page-account.html">My Account</a>
                  </li>
                  <li>
                    <a href="shop-wishlist.html">Blog</a>
                  </li>
                  <li>
                    <a href="page-about.html">About Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-4">
              <div className="text-center">
                <div id="news-flash" className="d-inline-block">
                  <ul>
                    <li>100% Secure delivery without contacting the courier</li>
                    {/* <li>Supper Value Deals - Save more with coupons</li> */}
                    {/* <li>Trendy 25silver jewelry, save up 35% off today</li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <div className="header-info header-info-right">
                <ul>
                  <li>
                    Need help? Call Us: <strong className="text-brand"> + 1800 900</strong>
                  </li>
                  <li>
                    <a className="language-dropdown-active" href="#">
                      INR
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderTop

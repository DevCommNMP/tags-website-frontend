import banner9 from "../assets/imgs/banner/banner-9.jpg";

const NewsLetter = () => {
  return (
    <>
      <section className="newsletter mb-15">
        <div className="container">
          <div className="row p-5 mb-5">
            <div className="col-lg-12 border-1px news-p">
              <div className="position-relative newsletter-inner mb-25">
                <div className="newsletter-content">
                  <h2 className="mb-20">
                    Stay home & get your daily <br />
                    needs from our shop
                  </h2>
                  <p className="mb-45">
                    Start Your Daily Shopping with <span className="text-brand">Tags Footwear</span>
                  </p>
                  <form className="form-subcriber d-flex">
                    <input className="border-1px" type="email" placeholder="Your emaill address" />
                    <button className="btn" type="submit">
                      Subscribe
                    </button>
                  </form>
                </div>
                <img style={{maxHeight:'100%'}} src={banner9} alt="newsletter" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;

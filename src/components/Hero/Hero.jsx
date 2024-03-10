import SlickSlider from '../SlickSlider/SlickSlider'
import HeroSideBanner from '../../components/Hero/HeroSideBanner'
const Hero = () => {
  return (
    <section className="home-slider style-2 position-relative mb-50">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-12">
            <div className="home-slide-cover">
              <div className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1">
                <SlickSlider />
              </div>
              {/* <div className="slider-arrow hero-slider-1-arrow"></div> */}
            </div>
          </div>
          <div className="col-lg-4 d-none d-xl-block">
            <HeroSideBanner />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

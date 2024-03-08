import HeaderBottom from './HeaderBottom'
import HeaderMiddle from './HeaderMiddle'
import HeaderTop from './HeaderTop'
import MobilePromotion from './MobilePromotion'

import './Header.css'

const Header = () => {
  return (
    <header className='header-area header-style-1 header-height-2'>
  
      <HeaderTop/>
      <MobilePromotion />
      <HeaderMiddle />
      <HeaderBottom />
    </header>
  )
}

export default Header

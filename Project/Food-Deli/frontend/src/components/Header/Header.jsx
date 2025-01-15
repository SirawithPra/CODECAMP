import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <div>
      <div className="header" style={{ backgroundImage: `url(${assets.header_img})` }}>
        <div className="header-contents">
          <h2>Order your favorite food here</h2>
          <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
          <a href='#explore-menu'><button>View Menu</button></a>
        </div>
      </div>
    </div>
  )
}

export default Header

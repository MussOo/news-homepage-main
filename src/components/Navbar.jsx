import { useState } from 'react'

function Navbar() {


  return <nav>
          <div>LOGO</div>
          <ul className='btn-navbar'>
            <li><a href="#home">Home</a></li>
            <li><a href="#news">New</a></li>
            <li><a href="#contact">Popular</a></li>
            <li><a href="#contact">Trending</a></li>
            <li><a href="#about">Categories</a></li>
          </ul>

        </nav>;
}

export default Navbar

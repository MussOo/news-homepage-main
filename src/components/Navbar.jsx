import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return <nav>
          <div className='logo'>LOGO</div>
          <div className='icons-navbar-mobile' onClick={() => {setIsOpen(!isOpen)}}>
            <img src="https://img.icons8.com/ios/100/null/menu-rounded.png" hidden={isOpen ? true : false}/>
            <img src="https://img.icons8.com/material-outlined/96/null/multiply--v1.png" hidden={isOpen ? false : true} />
          </div>
          <div className={isOpen ? 'btn-navbar open' : 'btn-navbar'}>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#news">New</a></li>
              <li><a href="#contact">Popular</a></li>
              <li><a href="#contact">Trending</a></li>
              <li><a href="#about">Categories</a></li>
            </ul>
          </div>
        </nav>;
}

export default Navbar

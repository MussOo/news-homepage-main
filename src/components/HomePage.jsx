import { useState } from 'react'
import Navbar from './Navbar'
import Main from './Main'
import Articles from './Articles'

function HomePage() {

  return <div className='HomePage'>
          <Navbar />
          <Main />
          <Articles />
        </div>;
}

export default HomePage

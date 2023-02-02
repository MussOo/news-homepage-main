import { useState } from 'react'
import New from './New'
import imageWeb3Desktop from "../../public/images/imageWeb3Desktop.jpg"
import imageWeb3Mobile from "../../public/images/imageWeb3Mobile.jpg"
function Main() {

  return <div className='Main'>
    <div className='mid'>
      <img className='img-web' src={imageWeb3Desktop} alt="" />
      <img className='img-mobile' src={imageWeb3Mobile} alt="" />
      <div className='container'>
        <div className='title'>
          The Bright Future of Web 3.0?
        </div>
        <div className='details'>
          <div className='description'>
          Lorem ipsum dolor sit amet consectet Lorem ipsum dolor sit amet consectet Lorem ipsum dolor sit amet consectet Lorem ipsum dolor sit amet consectet Lorem ipsum dolor sit amet consectet ur adipisicing elit. Quisquam, quod.
          </div>
          <div className='btn'>
            <button>REAM MORE</button>
          </div>
        </div>
      </div>
    </div>
    <div className='main-right'>
      <div>
        <h3>NEW</h3>
      </div>
      <div className='container-news'>
        <New/>
        <hr />
        <New/>
        <hr />
        <New/>
      </div>
    </div>
        </div>;
}

export default Main

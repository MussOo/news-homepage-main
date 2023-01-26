import { useState } from 'react'
import New from './New'
function Main() {

  return <div className='Main'>
    <div className='mid'>
      <img src="../../public/images/image-web-3-desktop.jpg" alt="" />
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

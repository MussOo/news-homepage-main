import { useState } from 'react'
import Article from './Article'
import imageRetroPcs from "../../public/images/imageRetroPcs.jpg";
import imageTopLaptops from "../../public/images/imageTopLaptops.jpg";
import imageGamingGrowth from "../../public/images/imageGamingGrowth.jpg";


function Articles() {

  return <div className='Articles'>
           <Article number='01' title='Reviving Retro PCs' description='What happens when old PCs are given modern upgrades ?' img={imageRetroPcs}/>
           <Article number='02' title='Top 10 Laptops of 2022' description='Our best picks for various needs and budgets.' img={imageTopLaptops}/>
           <Article number='03' title='The Growth of Gaming' description='How the pandemic has sparked fresh opportunities.' img={imageGamingGrowth}/>
          </div>;
}

export default Articles

import { useState } from 'react'
import Article from './Article'
function Articles() {

  return <div className='Articles'>
           <Article number='01' title='Reviving Retro PCs' description='What happens when old PCs are given modern upgrades ?' img={'../../public/images/image-retro-pcs.jpg'}/>
           <Article number='02' title='Top 10 Laptops of 2022' description='Our best picks for various needs and budgets.' img={'../../public/images/image-top-laptops.jpg'}/>
           <Article number='03' title='The Growth of Gaming' description='How the pandemic has sparked fresh opportunities.' img={'../../public/images/image-gaming-growth.jpg'}/>
          </div>;
}

export default Articles

import React from 'react'
import Leftpage from './LeftPage';
import SideCart from './SideCart';

function Home() {
  return (
      <div className='home'>
        {/* <Hero /> */}
        <Leftpage />
        <SideCart />
        {/* <Products /> */}
        {/* footer component */}
      </div>
    
  )
}

export default Home
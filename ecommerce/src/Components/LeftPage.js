import { Link } from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'
import CategoriesProducts from './CategoriesProducts'
import { Context } from './Context';



const Leftpage = () => {
    const categories = useContext(Context).state.categories.filter(ele=>ele.catimage != null)

  return (
    <div className='left'>
        <div className='container categories sticky-top'>
            {
                categories.map(({cat_id,catimage,prdname})=>{

                    return( 
                    <a href= {`#${prdname}`} key={cat_id} className='crd text-decoration-none' style={{ backgroundImage:`URL(${'src'})`}}>
                        {/* <img className='img-fluid imge' src={img}/> */}
                        <div className='crd-overlay '>
                            <h6 className='overlay-text text-danger text-center px-2'>{prdname}</h6>
                        </div>
                    </a>
                    )
                })
            }
        </div>
        <CategoriesProducts />
    </div>

   

  )
}

export default Leftpage
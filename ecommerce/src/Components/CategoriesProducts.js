import React, { useContext, useEffect, useState } from 'react'
import Context from './Context'
import img from '../images/Burger.jpg'


const CategoriesProducts = (props) => {
    const context = useContext(Context) 
    const {categories,extras,currentProduct} = context.state
    
    let {ProductsCategory,Productsprices,prdname} = currentProduct
    const ref = React.useRef(null);

  return (
    
    <div className='cateory-details container'>
        {
            categories.map(({cat_id,description,prdname,Products})=>{ 
                // const prod = products.filter(ele=>ele.cat_id === cat_id)
                // const prds = prod.filter(ele=>ele.ProductsPrices.length > 0)
                
                // console.log(prds)
            return( 
                Products.length > 0 ?
            <div id={prdname}  key={cat_id}>
                <div className='categ-header border border-light mt-4'>
                    <div className='categImg border' > </div>
        
                    <div className='categ-header-text'>
                        <h4 className="text-center h4Catdescription" >{prdname}<sub className="text-muted muteTxt" >Alle Pizzen<sup>G,M</sup>  werden mit Tomatensauce,Käse<sup>M</sup> und Oregano zubereitet</sub></h4>
                        <p className='text-secondary fw-semibold'>{description}</p>
                    </div>
                </div>
                
                {
                    
                    Products.map(({prd_id,prdname,Productsprices})=>(
                        
                        <div key={prd_id} className='crd-product border mb-2'>
                            <div className='add' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e)=>{context.actions.showModal({Productsprices,cat_id,prd_id,prdname},ref)}}> </div>
                            <div className=' px-3 py-4'>
                                <h4 className='mb-1 fs-5 text-dark'>{prdname}</h4>
                                {/* <p className='mb-1 text-dark fw-semibold'>{`description`}</p> */}
                                <p className='mb-1 text-dark '>{ Productsprices && Productsprices.length > 0 ? `Normal : GHC ${Productsprices[0].price}` :``}</p>
                                <p className='mb-1 text-dark '>{ Productsprices && Productsprices.length > 0 ? `Large : GHC ${Productsprices[1].price}` :``}</p>
                            </div>

                        </div>
                    
                    ))
                }
                
            </div>
            :
            null
            )
            })
        }

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">

                <div className="modal-content">
                    <div className="modal-header">
                        {/* <h1 className="modal-title fs-5" id="exampleModalLabel">Title</h1> */}
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                                                
                    <div className="modal-body">
                        <div className='inner-header'>{currentProduct.prdname}</div>

                        <div className='inner-details'>
                            <p className='m-0'>{ Productsprices ? Productsprices[0].price :null}</p>

                            <p className='m-0'>{currentProduct.prdname}</p>

                            <select id='selectPrice' ref={ref} onChange={(e)=>context.actions.getSeletedPrice(ref)}>
                                <option >Select Size</option>
                                <option value={Productsprices ? Productsprices[0].price : null}>{ `Small ${Productsprices ? Productsprices[0].price : null}`}</option>
                                <option value={Productsprices ? Productsprices[1].price : null}>{ `Large ${Productsprices ? Productsprices[1].price : null}`}</option>
                            </select>
                        </div>

                        <div className='inner-extras bg-light '>
                           {
                            extras.map(({prdext_id,prdname})=>(
                                <label key={prdext_id} className='me-2 mb-2'>
                                    <input type={'checkbox'} className='me-2' />
                                    {prdname}
                                </label>
                            ))
                            }
                            
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary " data-bs-dismiss="modal" onClick={(e)=>context.actions.addToCart(currentProduct)} >Add</button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default CategoriesProducts
import React, { useContext,useState,useEffect } from 'react'
import Context from './Context'


const Products = ()=> {
   
   
   
  const context = useContext(Context)
  const featuredProducts = context.state.products.slice(0,8)

  return (
  
    <div className='products'>
      
      <div className='container  d-sm-flex px-sm-0'>

        {/* ------------start of Featured products----------- */}
        <div className='featured-section my-3 py-sm-4 my-sm-5'>
          {
            context.state.products.find(ele=>ele.checked == true)
            ?<div className='btn btn-success position-fixed' onClick={context.actions.handleAddSelectedToCart} >Add All to Cart</div>
            :""
          }
          

          <h4 className='py-4'>Featured Products</h4>
          <div className='featured  d-sm-grid'> 
         
          
          {
            featuredProducts.map((product)=>{
              let {id} = product
              
           return(
            <div key={id} className=' product p-sm-0 mb-sm-0 shadow  mb-5 bg-body rounded'>
              <input type={'checkbox'} value={id} className='mx-2 my-2 align-self-end' checked={product.checked || false} onChange={(e)=>context.actions.handleCheck(e)} /> 
              <div className='d-flex flex-column px-2'  data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>context.actions.showProduct(product)}>
                
                <div className=''>
                  <img className=' w-100' src={product.image}/>
                </div>
                
                <div className='desc' >
                  <p className="display-5 fs-5 mb-0 "> {product.title}</p>
                  <p > {product.description} </p>
                  
                  
                </div>
                <p className='mb-0 fs-5'> Ghs {product.price} </p>

                
              </div>
              <div className='w-100 px-2'>
                <button className="btn btn-primary w-100 " onClick={()=>context.actions.addToCart(product)} role="button" > Add To Cart</button>
              </div>
          </div>
            )
            })
          } 
        </div>
      </div>
      </div>  {/* ------------End of Featured products----------- */}
     

      
      {/* ------------start of Main products----------- */}

      <div className='main-products'>

        <div className='container'>
          <h4 className='py-4'>All Products</h4>
         <div className='row'>
         
            
              {
                
                context.state.products.map((product,index)=>(
                  <div key={product.id} className='col-sm-4 col-lg-3 col-xxl-2 mb-5 btn p-2'>  
                    <div type='button' className=' cardd h-100 border p-3 shadow d-flex flex-column' >
                      <input type={'checkbox'} className='mb-4 align-self-end' value={product.id} checked={product.checked || false} onChange={(e)=>context.actions.handleCheck(e)}/>
                      <div className='d-flex flex-column align-items-center' data-bs-toggle="modal" onClick={()=>context.actions.showProduct(product)} data-bs-target="#exampleModal">
                        
                        <img className='w-100 ' src={product.image}/>
                        <p>{product.title}</p>
                        <p className='fs-5'> ${product.price} </p>
                        
                      </div> 
                      <button className="btn btn-primary w-100 "  role="button" onClick={()=>context.actions.addToCart(product)} > Add To Cart</button>
                    </div>
                </div>
                )
                )
              }
            
         </div>

        </div>

      </div> {/* ------------End of Main products----------- */} 

      {/* ------------------ Modal Template -------------------*/}
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">{context.state.currproduct.title}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>



          <div className="modal-body">
          <div className="container d-sm-flex  product-detail py-4">
        <div className="left shadow pt-4">
            {
              <div className="detail-image px-4">
                <img src={context.state.currproduct.image}/>
              </div>
            }
        </div>

        <div className="right pt-4 px-4">
          <h4 className="fs-6">{context.state.currproduct.title}</h4>
          <p className="fs-4">{`$${context.state.currproduct.price}`}</p>

          <select className="mb-4">
            <option defaultValue={'DEFAULT'}>Select Size</option>
            <option value="small">Small</option>
            <option value="medium">medium</option>
            <option value="Large">Large</option>
          
          </select> <br/>
            
          <input type="number" min="1" defaultValue={'1'} className="p-size px-2 py-1 " />
          {/* <button className="ms-2 px-4 py-2 bg-primary border-0"><h6 className=" mb-0">ADD TO CART</h6></button> */}


          <div className="mt-4 p-detail " >
              <h5>Product Details</h5>
              <p className="">
                {
                  context.state.currproduct.description
                }
              </p>
          </div>

        </div>
      </div>
          </div>



          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" onClick={()=>context.actions.addToCart(context.state.currproduct)}>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>

  </div>
  )
}

export default Products
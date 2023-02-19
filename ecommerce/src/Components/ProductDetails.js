import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  const [product, setproduct] = useState([]);

  const params = useParams();

  const { id } = params;

  const fetchProduct = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setproduct(data));
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return(
    
    
    <>
      {
        product.image ? 

      <div className="container d-sm-flex  product-detail py-4">
        <div className="left shadow pt-4">
            {
              <div className="detail-image px-4">
                <img src={product.image}/>
              </div>
            }
        </div>

        <div className="right pt-4 px-4">
          <h4 className="fs-6">{product.title}</h4>
          <p className="fs-4">{`$${product.price}`}</p>

          <select className="mb-4">
            <option defaultValue={'DEFAULT'}>Select Size</option>
            <option value="small">Small</option>
            <option value="medium">medium</option>
            <option value="Large">Large</option>
          
          </select> <br/>
            
          <input type="number" min="1" defaultValue={'1'} className="p-size px-2 py-1 " />
          <button className="ms-2 px-4 py-2 bg-primary border-0"><h6 className=" mb-0">ADD TO CART</h6></button>


          <div className="mt-4 p-detail " >
              <h5>Product Details</h5>
              <p className="">
                {
                  product.description
                }
              </p>
          </div>

        </div>
      </div>
        :
        <h1>loading</h1>
      }
    </>
    
  )
};

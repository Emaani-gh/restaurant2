import React, { useEffect, useState } from 'react'

export const Context = React.createContext()

export const Provider = (props) => {
    const [products,setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [extras, setExtras] = useState([])
    const [currentProduct, setCurrentProduct] = useState({})
    const [cart, setCart] = useState([])
    const [select,setSelected] = useState('')

    

    useEffect(()=>{
        fetch(`http://localhost:4000/api/`)
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])

  //   useEffect(()=>{
  //       fetch(`http://localhost:4000/api/products`)
  //       .then(res=>res.json())
  //       .then(data=>setProducts(data))
  //   },[])

  //   useEffect(()=>{
  //     fetch(`http://localhost:4000/api/extras`)
  //     .then(res=>res.json())
  //     .then(data=>setExtras(data))
  // },[])

    // console.log(categories)

    const showModal = ({Productsprices,cat_id,prd_id,prdname},ref)=>{
      if(Productsprices.length > 0){
        setCurrentProduct({Productsprices,cat_id,prd_id,prdname})
        ref.current.selectedIndex = 0
      }
      else{
        console.log('no price for this product')
      }
      
    }

    const addToCart = (product)=>{
        const isFound = cart.find(ele=>ele.prd_id === product.prd_id && ele.SelectedPrice === product.SelectedPrice);
        if(isFound){
          setCart(cart.map(prd=> prd.prd_id === product.prd_id && prd.SelectedPrice === product.SelectedPrice ? {...isFound, qtn: isFound.qtn + 1} : prd))
        }
        else{
          setCart([...cart, {...product, qtn : 1}])
        }


      }

      // const calcprice = ()=>{
      //   const itemPrice = cart.reduce((prvVal,currVal)=> prvVal + currVal * qtn, 0)
      //   const tax1 = 0.07 * itemPrice
      //   const tax2 = 0.19 * itemPrice
      //   const totalPrice = itemPrice + tax1
      // }

      const getSeletedPrice = (ref)=>{
        setCurrentProduct({...currentProduct, SelectedPrice: ref.current.value})
        // console.log(ref.current.value)
      }
      

      

      const removeFromCart = (product)=>{
        const found = cart.find(ele => ele.prd_id === product.prd_id && ele.SelectedPrice === product.SelectedPrice)
        // console.log(found)
        if(found.qtn === 1 ){
          setCart(cart.filter(prd => prd.SelectedPrice !== product.SelectedPrice && prd.prd_id !== product.prd_id ))
        }else{
          setCart(cart.map(prd=> 
            prd.prd_id === product.prd_id && prd.SelectedPrice === product.SelectedPrice? {...found,qtn: found.qtn - 1} : prd
          ))
        }
      }
    const value ={
        state:{
            products,
            categories,
            cart,
            currentProduct,
            extras
        },

        actions:{
            addToCart,
            removeFromCart,
            showModal,
            getSeletedPrice,
            setExtras
        }
    }

  return (
    <Context.Provider value={value}>
        { props.children}
    </Context.Provider>
  )
}

export default Context
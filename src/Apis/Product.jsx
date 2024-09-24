import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct';

const Product = () => {


    const [list,setList] = useState([])
  
    const api = 'https://dummyjson.com/products';

    // speical Function for api

    const getProduct = async()=>{
        const response = await fetch(api)
        const data = await response.json(response)
        // console.log(data?.products)

        setList(data?.products)
    }
  
    useEffect(()=>{
        getProduct()
    },[])

  
  
    return (
    <>

        <div className="container">
            <div className="row">
                {list?.map((item,index)=>{
                    return <SingleProduct {...item}/>
                })}
            </div>
        </div>

    
    </>
  )
}

export default Product
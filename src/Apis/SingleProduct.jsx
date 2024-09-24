import React, { useState } from 'react'
import { IoIosArrowDropdownCircle } from "react-icons/io";

import SingleReview from './SingleReview';
const SingleProduct = ({title,images,meta,reviews}) => {
  
    const [show,setShow] = useState(false)
  
  
    return (
   <>
        <div className="col-lg-3 my-2 card mx-3 shadow" >
            <h5 className='text-center py-2'> Title: {title.substr(0,9)}</h5>
            <img className='mx-auto' style={{ 
                width:"50%",
                height:"100%",
                objectFit:"cover"
             }} src={images[0]} alt="" />
        
                <div className="d-flex justify-content-between align-items-center">
                <img style={{ 
                width:"20%"
              }} src={meta.qrCode} alt="" />
            <IoIosArrowDropdownCircle size={25} onClick={()=> setShow(!show)}/>
                </div>

                {
                    show && 
                    <div className="text-secondary reviews">
          {reviews?.map((review,index)=>{
            return <SingleReview {...review}/>
          })}
        </div>
                }
             
        
        
        </div>
   
   </>
  )
}

export default SingleProduct
import React from 'react'

const SingleReview = ({comment,reviewerName,reviewerEmail,rating}) => {
  return (
    <>
            <div className="d-flex flex-column align-items-center justify-content-center">

        <p className="fw-bold">
            {reviewerName}
        </p>
        <p className="text-secondary">
            {reviewerEmail.substr(0,9)}
        </p>

        {Array.from({length:rating}).map((_,index)=>{
            return "⭐"
        })}

        </div>
    </>
  )
}

export default SingleReview
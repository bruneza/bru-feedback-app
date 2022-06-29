import React, { useState } from 'react'
import ReviewItem from "./ReviewItem"
import ReviewsData from "../data/ReviewsData"

function ReviewList() {
  const [RevData, setRevData] = useState(ReviewsData)
  
  const RevAverage = RevData.reduce((tot, curReview) =>{
    return tot+ curReview.score
  },0) / RevData.length

  const deleteReview = (id) => {
    if (window.confirm('are you sure?')) {
      console.log(id)
      setRevData( RevData.filter((item) => item.id !== id))
    }

  }
  return (
    <div className="revResult">
    <div className="reviewStats">
      <div className="revNumber">{RevData.length} Reviews</div>
      {<div className="revAvrg">Average Rating: {isNaN(RevAverage) ? 0 : RevAverage}</div> }
      
    </div>
    
    <div className="rev-list">
      
      {

        (!RevData || RevData.length === 0) ?
          <p>No Reviews</p>
        :
            RevData.map((item) => (
              <ReviewItem key={item.id} item={item} deleteReview={deleteReview} />
            ))
      }
    </div>
    </div >
  )
}

export default ReviewList
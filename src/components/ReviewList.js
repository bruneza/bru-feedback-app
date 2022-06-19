import React, { useState } from 'react'
import ReviewItem from "./ReviewItem"
import ReviewsData from "../data/ReviewsData"
function ReviewList() {
    const [RevData] = useState(ReviewsData)

    if(!RevData || RevData.length === 0){
        return <p>No Reviews</p>
    }
  return (
    <div className="rev-list">
        {RevData.map((item) => (
         <ReviewItem key={item.id} revScore={item.score} revName={item.Name} revPosition={item.position} revDescription={item.description} />   
        )) 
        }
    </div>
  )
}

export default ReviewList
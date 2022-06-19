import React from 'react'

function ReviewItem({revScore, revName, revPosition, revDescription}) {
  return (
    <div className="review-item">
        <div className='wrapper rev-content'>
            <div className="rev-col-1">
                <div className="rev-name">{revName}</div>
                <div className="rev-pos-title">{revPosition}</div>
                <div className="rev-descr"> {revDescription}</div>
            </div>
            <div className="rev-col-2">
                    <div className="rev-score">
                        <span>{revScore}</span>
                    </div>
            </div>
        </div>
    </div>
  )
}

ReviewItem.defaultProps = {
    revName: "John Doe",
    revPosition: "Visitor",
    revDescription: "this is a review",
    revScore: 0
}

export default ReviewItem
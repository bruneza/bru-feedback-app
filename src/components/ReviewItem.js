import React from 'react'

function ReviewItem() {
  return (
    <div className="review-item">
        <div className='wrapper rev-content'>
            <div className="rev-col-1">
                <div className="rev-name">Higiro Innocent</div>
                <div className="rev-pos-title">CEO, Maico Ltd</div>
                <div className="rev-descr"> the website you made was like a dream come true,
                the leads we got were many and happy.</div>
            </div>
            <div className="rev-col-2">
                    <div className="rev-score">
                        <span>10</span>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default ReviewItem
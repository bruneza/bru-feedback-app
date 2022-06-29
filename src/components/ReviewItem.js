import React from 'react'
import { FaTimes } from 'react-icons/fa'
import Card from './shared/Review'

function ReviewItem({item, deleteReview}) {

  return (
    <Card >
        <div className='wrapper rev-content'>
            <div className="rev-col-1">
                <div className="rev-name">{item.Name} </div>
                <div className="rev-pos-title">{item.position} </div>
                <div className="rev-descr"> {item.description} </div>
            </div>
            <div className="rev-col-2">
                    <div className="rev-score">
                        <span>{item.score} </span>
                    </div>
            </div>
        </div>
        <button className='revItemBtn' onClick={() => deleteReview(item.id)} > <FaTimes /></button>
    </Card>
  )
}
export default ReviewItem
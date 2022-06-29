import React from 'react'

function Card({children, dark}) {
  return (
    <div className={`card-item ${dark && 'dark'}`}>
        {children}
    </div>
  )
}

Card.defaultProps = {
    dark : false
}

export default Card
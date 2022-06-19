import React from "react"

function Header({logoText, bgcolor, textcolor}) {
    const headerStyle = {
        backgroundColor: bgcolor,
        color: textcolor,
        display: 'flex',
        padding: '10px 83px',
        alignContent: 'center',
        justifyContent: 'center'
    }
  return (
    <header style={headerStyle}>
        <div className="container">
        <h1>{logoText}</h1>
    </div>
    </header>
  )
}

Header.defaultProps = {
    logoText: 'Bruneza Reviews',
    bgcolor: '#efefef',
    textcolor: '#990000'
}

export default Header
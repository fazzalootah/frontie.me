import React from 'react'
import './button.css'

const Button = ({title, onClick}) => {
  return (
    <div>
      <button
        style={{
          fontFamily: 'Fira Code',
          maxWidth: "140px",
          minWidth: "80px",
          height: "30px",
          marginRight: "5px",
          color:"white",
          backgroundColor:"#001E52",
        }} 
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  )
}

export default Button

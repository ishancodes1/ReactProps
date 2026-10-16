import React from 'react'

const CustomButton = ({text, backgroundColor}) => {
  return (
    <div>
      <button style={{backgroundColor: backgroundColor, 
                      borderRadius: 5, 
                      display: "inline-block", 
                      height: 60, 
                      color: "white", 
                      fontWeight: "bolder", 
                      fontSize: "40px"}}>{text}</button>
    </div>
  )
}

export default CustomButton

import React from 'react'

const Product = ({name, price, description}) => {
  return (
    <div>
      <div style={{border: "5px solid green", width: 600, padding: 20}}>
        <h1>Product Name: {name}</h1>
        <h1>Product Price: {price}</h1>
        <h1>Product Description:</h1>
        <h4>{description}</h4>
      </div>
    </div>
  )
}

export default Product

import React from 'react'

const Student = (props) => {
  return (
    <div>
      <div style={{border: "5px solid red", width: 320, padding: 20}}>
        <h1>Student Name: {props.name}</h1>
        <h1>Student Age: {props.age}</h1>
        <h1>Course: {props.course}</h1>
      </div>
    </div>
  )
}

export default Student

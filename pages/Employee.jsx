import React from 'react'

const Employee = ({name, role, salary}) => {
  return (
    <div>
      <div style = {{border: "5px solid yellow", width: 430, padding: 20}}>
        <h1>Employee's Name: {name}</h1>
        <h1>Role: {role}</h1>
        <h1>Salary: {salary}</h1>
      </div>
    </div>
  )
}

export default Employee

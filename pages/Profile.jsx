import React from 'react'

const Profile = ({name, profileImage, city}) => {
  return (
    <div>
      <div style={{border: "5px solid blue", width: 300, padding: 20}}>
        <img src= {profileImage} style={{width: 300, height: 400}}/>
        <h1>Name: {name}</h1>
        <h1>City: {city}</h1>
      </div>
    </div>
  )
}

export default Profile

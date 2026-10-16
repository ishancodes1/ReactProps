import React from 'react'
import Student from '../pages/Student'
import Profile from '../pages/Profile'
import Product from '../pages/Product'
import CustomButton from '../pages/CustomButton'
import Employee from '../pages/Employee'

const App = () => {
  return (
    <div>
      <Student name="Ishan" age={20} course="Bsc Chemistry"/><br/>
      <Profile name="Farhan Akhtar" profileImage="https://image.tmdb.org/t/p/w500/nYx5T3tkghBPvmI29J2iJlZOFyV.jpg" city="Mumbai"/><br />
      <Product name="Samsung Galaxy S26 Ultra" price="₹1,24,999" 
      description="The Samsung Galaxy S26 Ultra is Samsung's top-tier 2026 flagship smartphone, featuring a massive 6.9-inch Privacy Display, the powerful Snapdragon 8 Elite processor, an integrated S Pen, and a pro-grade 200MP quad-camera system enhanced by advanced Galaxy AI."/><br/>
      <Product name="Apple iPhone 18 Pro Max" price="₹1,79,900" 
      description="The Apple iPhone 18 Pro Max is Apple's 2026 flagship smartphone, featuring a 6.9-inch display, A20 Pro chip, and premium camera upgrades."/><br/>
      <Product name="Apple iPhone Duo" price="₹2,99,900"
      description="The Apple iPhone Duo is a premium, dual-screen smartphone starting at ₹2,99,900. It features a clamshell folding design, powerful performance, and top-tier camera capabilities."
      /><br/>
      <CustomButton text="Save" backgroundColor="blue"/><br/>
      <CustomButton text="Kill" backgroundColor="red"/><br/>
      <CustomButton text="Continue" backgroundColor="green"/><br/>
      <Employee name="Kabir" role="Cloud Engineer" salary="11,40,000"/><br/>
      <Employee name="Advait" role="Cybersecurity Analyst" salary="19,80,000"/><br/>
      <Employee name="Zayn Malik" role="DevOps Engineer" salary="6,40,000"/>
    </div>
  )
}

export default App

import React from 'react'
import { Link } from 'react-router-dom'

function Heart() {
  return (
    <>
    
    <h1 style={{color:"dark", textAlign:"center"}}>surya</h1>
    <h1 style={{color:"dark", textAlign:"center"}}>Roopa</h1>
    <h1 style={{textAlign:"center"}}><Link to={"/love/myheart"}   type="button" class="btn btn-primary">Click MyHeart</Link></h1>
       
        


  </> 
  )
}

export default Heart
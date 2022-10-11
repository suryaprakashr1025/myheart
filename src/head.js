import React from 'react'
import { Link } from 'react-router-dom'

function Head() {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" style={{color:"red"}}><b>LOVE</b></a>
    
      <form class="d-flex" role="search">
     <Link to={"/love"}class="btn btn-primary">Heart</Link>
      </form>
    </div>
  
</nav>

</>
  )
}

export default Head
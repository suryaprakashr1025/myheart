import React from 'react'
import first from "./first.jpg"
import second from "./second.jpg"
import third from "./third.jpg"
import foutrh from "./foutrh.jpg"
function Image() {
  return (
   <>
        <img src={first} style={{width:"250px", height:"300px"}} class="img-thumbnail" alt="..."/>
        <img src={second} style={{width:"250px", height:"300px"}} class="img-thumbnail" alt="..."/>
        <img src={third} style={{width:"250px", height:"300px"}} class="img-thumbnail" alt="..."/>
        <img src={foutrh} style={{width:"250px", height:"300px"}} class="img-thumbnail" alt="..."/>
    </>
)}

export default Image;
import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

function Loading(){
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
    <Spinner animation="border" variant="outline-danger" />
    </div>
  )
}

export default Loading

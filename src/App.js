import * as React from 'react'
import './App.css'
 
const Row=({children})=>{
  return (
    <div className='Row' >
      {children}
      </div>
  )
}

function LiveOrders(){
  return (
    <div className='App'>
      <Row spacing={32}>
        <p>Pizza Margarita</p>
        <p>2</p>
        <p>30$</p>
        <p>18:45</p>
        <p>Jill</p>
      </Row>
    </div>
  )
}

export default LiveOrders
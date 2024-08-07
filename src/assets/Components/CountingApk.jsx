import React from 'react'
import { useState } from 'react'
import '../CSS/Counter.css'

const CountingApk = () => {
const [count,SetCount]=useState(0)
console.log("Number: " ,count)
const increaseValue=()=>{
    SetCount(SetCount=>SetCount + 1)
}
const ResetValue=()=>{
    SetCount(0)
}
  return (
    <>
    <div className="box">
        <h1>Number:   {count} </h1>
    </div>
    <div className="buttons">
        <button className='sky' onClick={increaseValue}>IncreaseCount</button>
    <button className='green' onClick={ResetValue}>ResetButton</button>
    </div>
    </>
  )
}

export default CountingApk

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function ToggleComp() {
    const state = useSelector(state=>state)
    const dispatch = useDispatch()
    console.log(state)

    const timerHandler = ()=>{
        dispatch({type:"isOn"})
    }
    const toggleHandler = ()=>{
        dispatch({type:"toggle"})
    }
  return (
    <div className='app'>
        <button onClick={timerHandler}>Start Timer</button>
        <button onClick={toggleHandler}>Toggle</button>
    </div>
  )
}

export default ToggleComp
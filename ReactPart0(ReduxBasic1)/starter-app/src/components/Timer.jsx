import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Timer() {
const timer = useSelector(state=>state.count)
const isOn = useSelector(state=>state.isOn)
const dispatch = useDispatch()


useEffect(()=>{
if(isOn){
    setTimeout(() => {
        dispatch({type:"start"})
    }, 1000);
}
})

  return (
    <div className='app'>
        <h1>Timer: {timer}</h1>
    </div>
  )
}

export default Timer
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Page3() {
  return (
    <div className='app'>
        <h1>Page3</h1>
     <ul>
            <Link to='nested/1'>1</Link>
            <Link to='nested/2'>2</Link>
            <Link to='nested/3'>3</Link>
        </ul>    
        <Outlet/>
    </div>
  )
}

export default Page3
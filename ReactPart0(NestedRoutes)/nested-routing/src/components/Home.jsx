import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Home() {
  return (
    <div className='app'>
        <h1>Home</h1>
        <ul>
            <Link to='/p1'>p1</Link>
            <Link to='/p2'>p2</Link>
            <Link to='/p3'>p3</Link>
        </ul>

        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default Home
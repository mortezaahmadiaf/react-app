import React from 'react'
import {Link,Outlet} from 'react-router-dom'
import {urls} from 'app/routes'
 const Home = () => {
  return (
    <div className='d-flex flex-column' >
      <div>home</div>
      <Link to={urls.about_us} about='test'>go to about us</Link>
    </div>
  )
}

export default Home
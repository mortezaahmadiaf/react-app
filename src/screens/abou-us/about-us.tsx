import React from 'react'
import {Link} from 'react-router-dom'
import {urls} from 'app/routes' 
const AboutUs = () => {
  return (
    <div className='d-flex flex-column' >
      <div>AboutUs</div>
     <Link to={urls.home} >go to home</Link>
     
      </div>
  )
}
export default AboutUs
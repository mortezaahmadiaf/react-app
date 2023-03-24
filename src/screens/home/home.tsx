import React from 'react'
import {Link,Outlet} from 'react-router-dom'
import {urls} from 'app/routes'
import {useTranslation} from 'react-i18next'
import {changelang} from 'app/redux/slice/language'
import {useAppSelector} from 'app/redux/hooks'
import {useDispatch} from 'react-redux'
 const Home = () => {
  const {t}=useTranslation()
  const dispatch = useDispatch()
  const test=useAppSelector((state)=>state.language)
  return (
    <div className='d-flex flex-column' >
      <div>home</div>
      <button onClick={()=>{dispatch(changelang('fa'))}}>fa</button>
      <button onClick={()=>{dispatch(changelang('en'))}}>en</button>
      <Link to={urls.about_us} about='test'>go to about us</Link>
      {t('test')}
    </div>
  )
}

export default Home
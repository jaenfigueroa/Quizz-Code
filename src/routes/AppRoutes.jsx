import React, { useContext, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { AppContext } from '../context/AppContext'
import { Home } from '../pages/Home/Home'
import { Login } from '../pages/Login/Login'
import { Page404 } from '../pages/Page404/Page404'
import { Register } from '../pages/Register/Register'

/////////////////////////////////////////////
export const AppRoutes = () => {

  const {isAuthenticated} = useContext(AppContext)



  /////////////////////////////////////////////
  return (
    <BrowserRouter>

      {/* HEADER Y NAV */}
      <Header/>

      {/* CUERPO */}
      <Routes>
        <Route path='/' element={<Navigate to='/login'/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>

        {
          isAuthenticated && (
            <Route path='/home' element={<Home/>}/>
            // <Route path='/home' element={<Home/>}/>
            // <Route path='/home' element={<Home/>}/>
          )
        }

        <Route path='*' element={<Page404/>}/>
      </Routes>

      {/* FOOTER */}
      <Footer/>

    </BrowserRouter>
  )
}
import React, { useEffect } from 'react'
import { useRoutes, HashRouter, useLocation } from 'react-router-dom'
import Header from './Components/Header/Header'
import HomePage from './Components/HomePage/HomePage'
import UsPage from './Components/UsPage/UsPage'
import ContactPage from './Components/ContactPage/ContactPage'
import ServiceFivePage from './Components/ServiceFivePage/ServiceFivePage'
import Footer from './Components/Footer/Footer'
import './App.css'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const AppRoutes = () => {
  let routes = useRoutes ([
    { path: '/', element: <HomePage /> },
    { path: '/empresa', element: <UsPage /> },
    { path: '/contacto', element: <ContactPage /> },
    { path: '/equipos-en-arriendo', element: <ServiceFivePage /> },
  ])
  return (
    <>
      <ScrollToTop  />
      { routes }
    </>
  )
}

function App() {

  return (
    <HashRouter>
      <Header />
      <AppRoutes/>
      <Footer />
    </HashRouter>
  )
}

export default App

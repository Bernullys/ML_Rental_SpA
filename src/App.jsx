import React, { useEffect } from 'react'
import { useRoutes, HashRouter, useLocation } from 'react-router-dom'
import Header from './Components/Header/Header'
import HomePage from './Components/HomePage/HomePage'
import UsPage from './Components/UsPage/UsPage'
import ContactPage from './Components/ContactPage/ContactPage'
import ServicesPage from './Components/ServicesPage/ServicesPage'
import ServiceFirstPage from './Components/ServiceFirstPage/ServiceFirstPage'
import ServiceSecondPage from './Components/ServiceSecondPage/ServiceSecondPage'
import ServiceThirdPage from './Components/ServiceThirdPage/ServiceThirdPage'
import ServiceFourPage from './Components/ServiceFourPage/ServiceFourPage'
import ServiceFivePage from './Components/ServiceFivePage/ServiceFivePage'
import ProjectsPage from './Components/ProjectsPage/ProjectsPage'
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
    { path: '/nosotros', element: <UsPage /> },
    { path: '/contacto', element: <ContactPage /> },
    { path: '/servicios', element: <ServicesPage /> },
    { path: '/servicios/pruebas', element: <ServiceFirstPage /> },
    { path: '/servicios/control', element: <ServiceSecondPage /> },
    { path: '/servicios/mantenimiento', element: <ServiceThirdPage /> },
    { path: '/servicios/asesoría', element: <ServiceFourPage /> },
    { path: '/servicios/arriendo', element: <ServiceFivePage /> },
    { path: '/proyectos', element: <ProjectsPage /> },
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
      <AppRoutes />
      <Footer />
    </HashRouter>
  )
}

export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as React from "react"
import { BrowserRouter, Link } from 'react-router'
import './styles/main.scss'
import NavigationBar from './components/NavigationBar.jsx'
import RoutesCollector from './data/Routes.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter >
    <RoutesCollector />
      
    </BrowserRouter>
  </StrictMode>,
)

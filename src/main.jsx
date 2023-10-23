import React from 'react'
import ReactDOM from 'react-dom/client'
import NavigationBar from './components/MainNav.jsx'
import Home from './Pages/Home.jsx'
import call from './Api/calls.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavigationBar />
    <Home/>
  </React.StrictMode>,
)
  
call
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import OrderPage from './pages/OrderPage'

function App() {
  return (
  <Router>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path='/checkout' element={<OrderPage />} />
    </Routes>
  </Router>
  )
}

export default App

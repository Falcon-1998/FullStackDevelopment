import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Capstone from '../components/Capstone.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Capstone />
  </StrictMode>,
)

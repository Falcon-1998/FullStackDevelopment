import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Capstone from '../components/Capstone.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Capstone />
  </StrictMode>,
)

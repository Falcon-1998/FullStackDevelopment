import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ChefClaudeApp from '../components/ChefClaudeApp.jsx'

createRoot(document.getElementById('root')).render(
    < ChefClaudeApp />
)

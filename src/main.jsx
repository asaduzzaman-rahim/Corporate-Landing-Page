import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FramerMotion from "./Animation/FramerMotion.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FramerMotion/>    
  </StrictMode>,
)




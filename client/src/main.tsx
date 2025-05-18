import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './layaut/styles.css'
import App from './layaut/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

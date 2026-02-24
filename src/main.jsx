import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Roadmap from './roadmap'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Roadmap />
  </StrictMode>
)

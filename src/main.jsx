import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './context/ThemeContext.jsx'
import AuthProvider from './context/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ThemeProvider>
      <AuthProvider>
     <App/>
      </AuthProvider>
     </ThemeProvider>
    </StrictMode>,
)

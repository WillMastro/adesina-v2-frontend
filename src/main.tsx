import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './all.css'
import './typography.css'
import './media_queries.css'
import App from './App.tsx'
import { ToastContainer } from 'react-toastify'
import { GoogleOAuthProvider } from '@react-oauth/google'

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={googleClientId}>
      <ToastContainer />
      <App />
    </GoogleOAuthProvider>
  </StrictMode>,
)

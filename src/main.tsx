import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './Pages/HomePage.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import LoginPage from './Pages/LoginPage.tsx'
import AuthProvider from './context/AuthContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
)

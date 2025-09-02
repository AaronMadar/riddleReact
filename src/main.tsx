import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './Pages/HomePage.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import LoginPage from './Pages/LoginPage.tsx'
import AuthProvider from './context/AuthContext.tsx'
import SubscribePage from './Pages/SubscribePage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/subscribe' element={<SubscribePage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
)

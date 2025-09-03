import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './Pages/HomePage.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import LoginPage from './Pages/LoginPage.tsx'
import AuthProvider from './context/AuthContext.tsx'
import SubscribePage from './Pages/SubscribePage.tsx'
import GamePage from './Pages/GamePage.tsx'
import LevelPage from './Pages/LevelPage.tsx'
import LevelProvider from './context/LevelContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <LevelProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/subscribe' element={<SubscribePage />} />
            <Route path='/game' element={<GamePage />} />
            <Route path='/levelselection' element={<LevelPage />} />
          </Routes>
        </BrowserRouter>
      </LevelProvider>
    </AuthProvider>
  </StrictMode>,
)

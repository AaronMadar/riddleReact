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
import AdminPage from './Pages/AdminPage.tsx'
import Create from './Pages/CreatePage.tsx'
import Read from './Pages/ReadPage.tsx'
import Update from './Pages/UpdatePage.tsx'
import Delete from './Pages/DeletePage.tsx'
import LeaderBoard from './Pages/Leaderboard.tsx'

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
            <Route path='/adminpage' element={<AdminPage />} />
            <Route path='/leaderboard' element={<LeaderBoard />} />
            <Route path='/createnewriddle' element={<Create />} />
            <Route path='/getallriddle' element={<Read />} />
            <Route path='/updateriddle' element={<Update />} />
            <Route path='/deleteriddle' element={<Delete />} />
          </Routes>
        </BrowserRouter>
      </LevelProvider>
    </AuthProvider>
  </StrictMode>,
)

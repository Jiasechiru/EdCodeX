import { useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom"
import './App.css'
import RegAuth from './components/RegAuth/RegAuth'
import NavBar from './components/NavBar/NavBar'
// import "./components/RegAuth/RegAuth.css"
import "./components/NavBar/NavBar.css"
import Layout from './components/Layout/Layout'
import MainPage from './pages/MainPage/MainPage'
import HelloPage from './pages/HelloPage/HelloPage'
import Profile from './pages/Profile/Profile'

function App() {
  // const [count, setCount] = useState(0)
  const [isAuth, setIsAuth] = useState(false);
  const [isContinue, setIsContinue] = useState(false);
  const navigate = useNavigate();

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/helloPage" element={<HelloPage />} />
        <Route path="/registration" element={<RegAuth />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </Layout>
  )
}

export default App

import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Aboutme } from './Aboutme.tsx'
import { Goals } from './Goals.tsx'
import { Home } from './Home.tsx'
import { Chatwidget } from './Chatwidget.tsx'
import {Experience} from './Experience.tsx'

function AppContent() {
  const location = useLocation()
  
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/aboutme">About Me</Link> | <Link to="/experience">Experience</Link> | <Link to='/goals'>Goals</Link> 
      </nav>  
      <div key={location.pathname} className="page-transition">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<Aboutme/>} />
          <Route path="/goals" element={<Goals/>}/>
          <Route path="/experience" element={<Experience/>}/>
        </Routes>
      </div>
      <Chatwidget/>
    </>
  )
}

export function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

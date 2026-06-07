import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Aboutme } from './Aboutme.tsx'
import {Goals} from './Goals.tsx'
import {Home} from './Home.tsx'
import { Chatwidget } from './Chatwidget.tsx'


export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<Aboutme/>} />
        <Route path="/goals" element={<Goals/>}/>
      </Routes>
      <nav>
        <Link to="/">Home</Link> | <Link to="/aboutme">About Me</Link> | <Link to='/goals'>goals</Link>
      </nav>
      <Chatwidget/>
    </BrowserRouter>
  )
}

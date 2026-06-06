import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Aboutme } from './Aboutme.tsx'
import {Goals} from './goals.tsx'

function Home() {
  return <h1>Hello, my name is Max</h1>
}

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
    </BrowserRouter>
  )
}

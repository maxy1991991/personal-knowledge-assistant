import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Aboutme } from './Aboutme.tsx'
import { Goals } from './Goals.tsx'
import { Home } from './Home.tsx'
import { Chatwidget } from './Chatwidget.tsx'
import {Experience} from './Experience.tsx'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'



function Pokemonbutton() {  
    const MAX_POKEMON = 1025;
    const[id,setid]=useState<number>(1);
    const {data,isLoading}=useQuery({
        queryKey: ['pokemon',id],
        queryFn: async ()=> {
        const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return await response.json();
        }
    })      
    function newid() {
        setid(Math.floor(Math.random() * MAX_POKEMON) + 1);
    }
    let show=<html></html>;
    if (isLoading) {
        show= (<div>Loading...</div>);
    }
    else{
        show= (<img src={data.sprites.front_default}></img>);
    }
    return (
    <div className='buttondisplay'>
        {show}
        <button onClick={newid}>Spawn a Pokemon</button>
    </div>
    )
}

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
    <Pokemonbutton/>
    <Chatwidget/>
    </>
    )
}

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </QueryClientProvider>
  )
}
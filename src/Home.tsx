import cooking from './assets/cooking.webp'
import canyon from './assets/canyon.webp'
import soccer from './assets/soccer.webp'
import vacation from './assets/vacation.webp'

async function pokemon() {
  const response=await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
  const data=await response.json();
  const sprite=data['sprites']['front_default'];
  return (
    <div>
      <img src={sprite}/>
    </div>
  )
}

export function Home() {
    return (
        <div>
            <h2>Hi, I'm Maxwell Yang</h2>
            <p>I'm a junior Computer Science student at Oregon State University, currently spending my summer as an intern at IBM.</p>

            <h3>Hobbies</h3>
            <div className="image-grid">
                <img src={cooking}/>
                <img src={soccer}/>
            </div>

            <h3>Exploring</h3>
            <div className="image-grid">
                <img src={canyon}/>
                <img src={vacation}/>
            </div>
        </div>
    )
}

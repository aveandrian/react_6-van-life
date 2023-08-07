import { Link } from "react-router-dom"
import '../styles/HomePage.css'

export default function Home(){
    return (
      <main className='home-page'>
        <div className='home-page--content'>
          <h1 className='home-page--title'>You got the travel plans, we got the travel vans.</h1>
          <p className='home-page--description'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
          <Link to="/vans" className='btn'>Find your van</Link>
        </div>
      </main>
    )
  }
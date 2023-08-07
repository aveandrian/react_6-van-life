import { Link } from 'react-router-dom'
import AboutBg from '../assets/about-img.svg?component'
import '../styles/AboutPage.css'

export default function About(){
    return (
      <main className='about-page'>
        <AboutBg className='about-page--image'/>
        <div className='about-page--text'>
          <h1 className='about-page--title'>Don’t squeeze in a sedan when you could relax in a van.</h1>
          <p className='about-page--description'>
          Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
          (Hitch costs extra 😉)</p>
          <p className='about-page--description'>
          Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
          </p>
        </div>
        <div className='about-page--section'>
          <h2 className='about-page--section-title'>
            Your destination is waiting.<br/>
            Your van is ready.
          </h2>
          <Link to='/vans' className='about-page--section-btn'>Explore our vans</Link>
        </div>
      </main>
    )
  }
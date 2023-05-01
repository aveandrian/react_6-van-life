import { Link } from "react-router-dom"
export default function Fallback(){
    return (
        <main className='fallback-page'>
            <div className='fallback--content'>
              <h1 className='fallback--title'>Sorry, the page you were looking for was not found.</h1>
              <Link to="/" className='fallback-btn'>Return to home</Link>
            </div>
      </main>
        
    )
    
}
import { useEffect, useState } from "react"
import VanComponent from "../../components/VanComponent"

export default function Vans(){
    const [vansData, setVansData] = useState([])

    useEffect(()=>{
        fetch("/api/vans").then(
            data => data.json()
        ).then(
            body => setVansData(body.vans)
        )
    }, [])

    return (
        <main className="vans-page">
            <div className="vans-page--header">
                <h1 className="vans-page--title">Explore our van options</h1>
                <div className="vans-filters">
                    <div className="vans-filers--type">Simple</div>
                    <div className="vans-filers--type">Luxury</div>
                    <div className="vans-filers--type">Rugged</div>
                    <p className="clear-filters-btn">Clear filters</p>
                </div>
                </div>
            <div className="vans-list">
                {vansData.map(van => <VanComponent 
                key={van.id} 
                id={van.id} 
                name={van.name} 
                price={van.price} 
                imageUrl={van.imageUrl} 
                type={van.type} 
                />)}
            </div>
        </main>
    )
}
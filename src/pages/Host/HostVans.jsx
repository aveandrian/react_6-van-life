import HostVanComponent from "../../components/HostVanComponent"
import { useState, useEffect } from "react"

export default function HostVans(){
    const [vansData, setVansData] = useState(null)

    useEffect(()=>{
        fetch("/api/host/vans").then(
            data => data.json()
        ).then(
            body => setVansData(body.vans)
        )
    }, [])


    return (
        <div className="host-van-list">
            {vansData ? (
                <>
                    <h1 className="host-van-list--title">Your listed vans</h1>
                    {vansData.map(van => <HostVanComponent 
                        key={van.id} 
                        id={van.id} 
                        imageUrl={van.imageUrl}
                        name={van.name} 
                        price={van.price}  
                    />)}
                </>
                ) : <h2>Loading...</h2>
            }
        </div>
    )
}

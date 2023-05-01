import VanComponent from "../../components/VanComponent"
import {  useLoaderData, useSearchParams, defer } from "react-router-dom"
import { getVans } from "../../api"
import { Await } from "react-router-dom"
import { Suspense } from "react"

export function loader(){
    return defer({vans: getVans()})
}

export default function Vans(){
    const vansData = useLoaderData()
    const [searchParams, setSearchParams] = useSearchParams()

    const typeFilter = searchParams.get("type")

    function getVansElements(vans) {
        const desplayedVansData =  typeFilter 
            ? vans.filter(van => van.type === typeFilter) 
            : vans

        return (
        <>
            <div className="vans-page--header">
               <div className="vans-filters">
                   <button 
                   onClick={()=>setSearchParams({type: "simple"})} 
                   className={`vans-filers--type filter-simple ${typeFilter === "simple" ? "selected" : null}`}
                   >Simple</button>
                   <button 
                   onClick={()=>setSearchParams({type: "luxury"})} 
                   className={`vans-filers--type filter-luxury ${typeFilter === "luxury" ? "selected" : null}`}>Luxury</button>
                   <button 
                   onClick={()=>setSearchParams({type: "rugged"})}
                   className={`vans-filers--type filter-rugged ${typeFilter === "rugged" ? "selected" : null}`}>Rugged</button>
                   {typeFilter && <button onClick={()=>setSearchParams({})} className="clear-filters-btn">Clear filters</button>}
               </div>
            </div>
            <div className="vans-list">
               { desplayedVansData.map(van => <VanComponent 
                           key={van.id} 
                           id={van.id} 
                           name={van.name} 
                           price={van.price} 
                           imageUrl={van.imageUrl} 
                           type={van.type}
                           searchParams={searchParams}
                       />)}
            </div>
        </>
        )
    }

    return (
        <main className="vans-page">
            <h1 className="vans-page--title">Explore our van options</h1>
            <Suspense fallback={<h2>Loading vans.....</h2>}>
                <Await resolve={vansData.vans}>
                    {getVansElements}
                </Await>
            </Suspense>
        </main>
    )
}
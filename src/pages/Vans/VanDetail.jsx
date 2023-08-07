import { Link, useLocation, useLoaderData, defer, Await } from "react-router-dom"
import { getVans } from "../../api";
import { Suspense } from "react";
import '../../styles/VanDetail.css'

export function loader({params}){
    return defer({vanDetailPromise: getVans(params.id)})
}

export default function VanDetail(){
    const location = useLocation()
    const vanDetail = useLoaderData()
   
    const search = location.state?.search !== "" ? `..?${location.state.search}` : ".."
    const backText = location.state?.type ? location.state.type : "all"

    function getVansDetailsElemetns(vanDetail){ 
        return( 
            <>
                <div className="van--detail--content">
                    <img src={vanDetail.imageUrl} className="van--detail--image"/>
                    <div className="van-detail--description">

                        <div className={`van--type ${vanDetail.type}`}>{vanDetail.type ? vanDetail.type.charAt(0).toUpperCase() + vanDetail.type.slice(1) : ""}</div>   
                        <h1 className="van--name">{vanDetail.name}</h1>
                        <div><span className="van--price">${vanDetail.price}</span><span>/day</span></div>
                        <p className="van--detail--text">{vanDetail.description}</p>   
                        <Link to="/" className='btn'>Rent this van</Link>
                    </div>
                </div>
            </>
        )
    }

    return (
        <main className="van--detail">
            <Link to={search} relative="path" className="van--detail-back" >&larr; <span className="back--link">Back to {backText} vans</span></Link>
            <Suspense fallback={<h2>Loading van's details...</h2>}>
                <Await resolve={vanDetail.vanDetailPromise}>
                   {getVansDetailsElemetns}
                </Await>
            </Suspense>
        </main>
    )
}
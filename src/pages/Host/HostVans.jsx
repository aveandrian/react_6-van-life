import { useLoaderData, defer, Await } from "react-router-dom"
import { getHostVans } from "../../api"
import { Link } from "react-router-dom"
import { requireAuth } from "../../utils"
import { Suspense } from "react"

export async function loader({request}){
    await requireAuth(request)
    return defer({hostVans: getHostVans()})
}

export default function HostVans(){
    const vansData = useLoaderData()

    function getHostVansData(vansData){
        return vansData.map(van => (
            <Link to={van.id} className="host-van-container" key={van.id}>
                <img src={van.imageUrl} className="host-van-image"/>
                <div className="host-van-description">
                    <h1 className="host-van-name">{van.name}</h1>
                    <p className="host-van-price">${van.price}/day</p>
                </div>
            </Link>
            )
        )
    }

    return (
        <div className="host-van-list">
            <h1 className="host-van-list--title">Your listed vans</h1>
            <Suspense fallback={<h2>Loading your vans...</h2>}>
                <Await resolve={vansData.hostVans}>
                    {getHostVansData}
                </Await>
            </Suspense>
        </div>
    )
}

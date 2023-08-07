import { Await, Link, NavLink, Outlet, useLoaderData, defer } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";
import { Suspense } from "react";
import '../../styles/HostVanDetails.css'

export async function loader({params, request}){
    await requireAuth(request)
    return defer({vanDetailPromise: getHostVans(params.id)})
}

export default function HostVansGeneral(){
    const vanDetail = useLoaderData()
    const activeStyles = {
        textDecoration: "underline",
        fontWeight: 700,
    }

    function getVanDetailElements(vanDetail){
        return (
            <div className="host-van-general-container">
                <div className="host-van-general">
                    <img className="host-van-general-image" src={vanDetail.imageUrl}/>
                    <div className="host-van-general-descr">
                        <div className={`van--type ${vanDetail.type}`}>{vanDetail.type.charAt(0).toUpperCase() + vanDetail.type.slice(1)}</div>
                        <h1 className="van--name">{vanDetail.name}</h1>
                        <span>${vanDetail.price}</span><span>/day</span>
                    </div>
                </div>
                <div className="host-van-general-content">
                    <nav className="host-van-general-links">
                        <NavLink end to="." style={({isActive}) => isActive? activeStyles : null}>Details</NavLink>
                        <NavLink to="pricing" style={({isActive}) => isActive? activeStyles : null}>Pricing</NavLink>
                        <NavLink to="photos" style={({isActive}) => isActive? activeStyles : null}>Photos</NavLink>
                    </nav>
                    <Outlet context={{vanDetail}} />
                </div>
            </div>
        )
    }

    return (
        <div className="host-van">
            <Link to="../vans" className="van--detail-back" >&larr; <span className="back--link">Back to the vans</span></Link>
            <Suspense fallback={<h2>Loading van's details...</h2>}>
                <Await resolve={vanDetail.vanDetailPromise}>
                    {getVanDetailElements}
                </Await>
            </Suspense>
        </div>
    )
    
}
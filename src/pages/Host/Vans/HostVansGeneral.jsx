import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function HostVansGeneral(){
    const params = useParams()
    const [vanDetail, setVanDetail] = useState(null)
    console.log(vanDetail)

    useEffect(()=>{
        fetch(`/api/host/vans/${params.id}`)
        .then(res=>res.json())
        .then(data => setVanDetail(data.vans[0]))
    }, [params])

    const activeStyles = {
        textDecoration: "underline",
        fontWeight: 700,
    }

    return (
        <>
        
        <div className="host-van">
        <Link to=".." relative="path" className="van--detail-back" >&larr; <span className="back--link">Back to the vans</span></Link>
            {vanDetail ? (
                        <div className="host-van-general-container">
                            <div className="host-van-general">
                                <img className="host-van-general-image" src={vanDetail.imageUrl}/>
                                <div className="host-van-general-descr">
                                    <div className={`van--type ${vanDetail.type}`}>{vanDetail.type.charAt(0).toUpperCase() + vanDetail.type.slice(1)}</div>
                                    <h1 className="van--name">{vanDetail.name}</h1>
                                    <span>${vanDetail.price}</span><span>/day</span>
                                </div>
                            </div>
                            <nav className="host-van-general-links">
                                <NavLink end to="." style={({isActive}) => isActive? activeStyles : null}>Details</NavLink>
                                <NavLink to="pricing" style={({isActive}) => isActive? activeStyles : null}>Pricing</NavLink>
                                <NavLink to="photos" style={({isActive}) => isActive? activeStyles : null}>Photos</NavLink>
                            </nav>
                            <Outlet context={{vanDetail}} />
                        </div>

            ) : <h2>Loading...</h2> }
        </div>
        </>
    )
    
}
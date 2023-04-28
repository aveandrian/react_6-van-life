import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"

export default function VanDetail(){
    const params = useParams();
    const [vanDetail, setVanDetail] = useState(null)
    console.log(vanDetail)

    useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
        .then(res=>res.json())
        .then(data => setVanDetail(data.vans))
    }, [params])

    return (
        <main className="van--detail">
            {vanDetail ? (
                <>
                    <Link to=".." relative="path" className="van--detail-back" >&larr; <span className="back--link">Back to the vans</span></Link>
                    <img src={vanDetail.imageUrl} className="van--detail--image"/>
                    <div className={`van--type ${vanDetail.type}`}>{vanDetail.type ? vanDetail.type.charAt(0).toUpperCase() + vanDetail.type.slice(1) : ""}</div>   
                    <h1 className="van--name">{vanDetail.name}</h1>
                    <div><span className="van--price">${vanDetail.price}</span><span>/day</span></div>
                    <p className="van--detail--text">{vanDetail.description}</p>   
                    <Link to="/" className='btn'>Rent this van</Link>
                </>
            ) : <h2>Loading...</h2>}
        </main>
    )
}
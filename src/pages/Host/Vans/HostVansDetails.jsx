import { useOutletContext  } from "react-router-dom"

export default function HostVansDetails(){
    const {vanDetail} = useOutletContext ()
    console.log(vanDetail)
    return (
        <div className="host-van-details">
            <p><span style={{fontWeight: "bold"}}>Name: </span>{vanDetail.name}</p>
            <p><span style={{fontWeight: "bold"}}>Category: </span>{vanDetail.type}</p>
            <p><span style={{fontWeight: "bold"}}>Description: </span>{vanDetail.description}</p>
            <p><span style={{fontWeight: "bold"}}>Visibility: </span>Public</p>
        </div>
    )
}
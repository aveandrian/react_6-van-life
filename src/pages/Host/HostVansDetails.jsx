import { useOutletContext  } from "react-router-dom"

export default function HostVansDetails(){
    const {vanDetail} = useOutletContext()
    return (
        <div className="host-van-details">
            <p><span style={{fontWeight: "bold"}}>Name: </span>{vanDetail.name}</p>
            <div className="host-van-details--type"><span style={{fontWeight: "bold"}}>Category: </span> <p>{vanDetail.type}</p></div>
            <p><span style={{fontWeight: "bold"}}>Description: </span>{vanDetail.description}</p>
            <p><span style={{fontWeight: "bold"}}>Visibility: </span>Public</p>
        </div>
    )
}
import { useOutletContext } from "react-router-dom"

export default function HostVansPhotos(){
    const {vanDetail} = useOutletContext()
    return (
        <div className="host-van-photos">
            <img src={vanDetail.imageUrl} alt="" />
        </div>
    )
}
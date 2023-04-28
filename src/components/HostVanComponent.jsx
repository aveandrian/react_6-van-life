import { Link } from "react-router-dom";

export default function HostVanComponent(props){
    return (
        <Link to={props.id} className="host-van-container">
            <img src={props.imageUrl} className="host-van-image"/>
            <div className="host-van-description">
                <h1 className="host-van-name">{props.name}</h1>
                <p className="host-van-price">${props.price}/day</p>
            </div>
        </Link>
    )
}
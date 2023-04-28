import { Link } from "react-router-dom";

export default function VanComponent(props){
    return (
        <Link to={`/vans/${props.id}`} className="van">
            <img src={props.imageUrl} className="van--image"/>
            <div className="van--description-section">
                <div>
                    <h1 className="van--name">{props.name}</h1>
                    <div className={`van--type ${props.type}`}>{props.type.charAt(0).toUpperCase() + props.type.slice(1)}</div>
                </div>
                <div className="van--price-section">
                    <p className="van--price">${props.price}</p>
                    <p className="van--price-day">/day</p>
                </div>
            </div>
        </Link>
    )
}
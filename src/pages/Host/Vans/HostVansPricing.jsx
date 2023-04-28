import { useOutletContext  } from "react-router-dom"

export default function HostVansPricing(){
    const styles = {
        fontWeight: 500,
        fontSize: "24px"
    }
    const {vanDetail} = useOutletContext();
    return (
        <div>
            <p><span style={styles}>${vanDetail.price}</span>/day</p>
        </div>
    )
}
import { Link } from "react-router-dom";

export default function Hero () {
    return (
        <>
        <div style={{ padding : "100px 0"}} className="text-center  border-bottom">
            <h2 style={{lineHeight : "4rem"}}>Zerodha Products</h2>
            <h5>Sleek, modern, and intuitive trading platforms</h5>
            <p>Check out our <Link>Investment offerings <i className="fa-solid fa-arrow-right-long"></i></Link></p>
        </div>
        </>
    )
}
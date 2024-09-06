import bgImage from "../assets/Background.png"
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const AppContentBg = () => {
    return (
        <div className="content-img">
            <img src={bgImage} className="img-fluid bg-img" alt="..."></img>
            <div className="content-caption">
                <h1 className="my-4">Easy to setup.
                    <br />
                    Easy to maintain</h1>
                <p style={{ fontSize: "22px" }}>Bootstrap is a widely-used, sleek, intuitive and powerful front-end framework for faster and easier web development.</p>
                <div className="mt-5"> 
                    <FaYoutube  className="yt-logo" />
                    <button type="button" className="btn ms-3" style={{background:"#25DAC5"}}><Link to="/signup">Get Started</Link></button>
                </div>
            </div>
        </div>
    )
}

export default AppContentBg;
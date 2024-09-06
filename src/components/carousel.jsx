import image from "../assets/Image.png"
import "./styles.css"
import { Link } from "react-router-dom";
import AppNav from "./navbar";

function IndividualIntervalsExample() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={image} className="d-block w-100 carouselbg" alt="..." />
                            <div className="nav">
                                <AppNav></AppNav>
                            </div>
                            <div className="carousel-caption">
                                <h5>Startup 3</h5>
                                <h1>Forgot About Code</h1>
                                <p className="carouset-para">Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding. </p>
                                <button type="button" className="btn"><Link to="/signup">Create an Account</Link></button>
                            </div>
                        </div>                
                        {/* </div> */}
                {/* <div className="carousel-item">
                    <img src={image} className="d-block w-100 carouselbg" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={image} className="d-block w-100 carouselbg" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div> */}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default IndividualIntervalsExample;
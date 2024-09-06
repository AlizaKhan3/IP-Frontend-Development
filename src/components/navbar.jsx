import { FaDribbble } from "react-icons/fa";
import "./styles.css"
import { FaBehance } from "react-icons/fa";
import { Link } from "react-router-dom";

const AppNav = () => {
    return(
        <ul className="nav justify-content-center">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page"><Link to="/">Home</Link></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link"><Link to="/features">Features</Link></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link"><Link to="/pricing">Pricing</Link></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" ><Link to="/blog">Blog</Link></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link">
                                        <FaDribbble/>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" aria-disabled="true"><FaBehance /></a>
                                    </li>
                                </ul>
    );
}

export default AppNav;
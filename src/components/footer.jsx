import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";

const AppFooter = () => {
    return (
        <div class="container my-5">
            <footer className="text-center text-lg-start text-dark">
                <section className="d-flex justify-content-between p-4 text-white">
                    <div className="me-5">
                        <h5>Startup 3</h5>
                    </div>
                    <div>
                        <a href="" className="text-white me-4">
                            Privacy Policy
                        </a>
                        <a href="" className="text-white me-4">
                            Terms
                        </a>
                        <a href="" className="text-white me-4">
                            <FaTwitter />
                        </a>
                        <a href="" className="text-white me-4">
                            <FaFacebookF />
                        </a>
                        <a href="" className="text-white me-4">
                            <FaGooglePlusG />
                        </a>
                        <a href="" className="text-white me-4">
                            {/* <i className="fab fa-github"></i> */}
                        </a>
                    </div>
                </section>
                <hr style={{color:"#ddd"}}/>
                <section className="d-flex justify-content-between p-4 text-white">
                <div>
                        <a href="" className="text-white me-4">
                        Tour
                        </a>
                        <a href="" className="text-white me-4">
                            Features
                        </a>
                        <a href="" className="text-white me-4">
                           Pricing Plans
                        </a>
                        <a href="" className="text-white me-4">
                           Our Works
                        </a>
                        <a href="" className="text-white me-4">
                           Brands
                        </a>
                        <a href="" className="text-white me-4">
Contacts                        </a>

                    </div>
                    <div className="me-5">
                        <p>© 2017 Designmodo. All rights reserved.</p>
                    </div>
                </section>
            </footer>
        </div>
    );
}

export default AppFooter;
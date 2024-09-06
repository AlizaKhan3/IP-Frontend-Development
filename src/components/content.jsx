import contentImage from "../assets/content.png"
import AppCard from "./card";
import AppCardTwo from "./bgContent";
import userImg1 from "../assets/Mask (1).png"
import userImg2 from "../assets/Mask.png"
import userImg3 from "../assets/Userpic (1).png"
import userImg4 from "../assets/Userpic.png"

const Content = () => {
    return (
        <div className="content">
            <div className="content-img">
                <img src={contentImage} className="img-fluid bg-img" alt="..."></img>
                <div className="content-caption">
                    <p className="my-5">FREE SAMPLE</p>
                    <h1 className="my-4">Powerful Generator and Free Figma Sources </h1>
                    <p>Startup Framework contains components and complex blocks which can easily be integrated into almost any design. All of the components are made in the same style, and can easily be integrated into projects, allowing you to create hundreds of solutions.</p>
                </div>
            </div>
            <br />
            <div>
                <div className="col">
                    <div className="row d-flex justify-content-center gap-4">
                        <h1 style={{ textAlign: "center", color: "#fff" }} >Our Happy Clients</h1>
                        <AppCard imgSrc={userImg2} cardText="Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support" userName="RAYHAN CURRAN" />
                        <AppCard imgSrc={userImg4} cardText="The most important part of the Startup Framework is the samples" userName="GENE WHITFIELD" />
                    </div>
                    <div className="row d-flex justify-content-center gap-4">
                        <AppCard imgSrc={userImg1} cardText="As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website" userName="KAYLEY FRAME" />
                        <AppCard imgSrc={userImg3} cardText="I’ve built my website with Startup just in one day, and it was ready-to-go." userName="ALLAN KIM" />
                    </div>
                </div>
            </div>
            <br />
            <div className="col">
                <AppCardTwo/>
            </div>


        </div>

    );
}

export default Content;
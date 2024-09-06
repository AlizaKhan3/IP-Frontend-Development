import userImg1 from "../assets/Mask (1).png"
import userImg2 from "../assets/Mask.png"
import userImg3 from "../assets/Userpic (1).png"
import userImg4 from "../assets/Userpic.png"

const AppWork = () => {
    return (
        <div class="card mb-3 p-4">
            <div class="row g-0">
                <div class="col-md-2">
                    <img src={userImg1} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body" style={{color:"#fff"}}>
                        <p class="card-text">Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support</p>
                        <p class="card-text">RAYHAN CURRAN</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppWork;
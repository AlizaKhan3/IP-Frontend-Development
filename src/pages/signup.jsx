import "../components/styles.css";
import formBg from "../assets/content.png"
import { IoRemoveOutline } from "react-icons/io5";

const Signup = () => {
  return (
    <div className="row ">
      <img src={formBg} className="img-fluid signimg" alt="..."></img>
      <div className="row contact d-flex justify-content-center align-items-center">
        <div className="col-md-6 col-sm-12 col-xs-12" style={{ color: "#fff" }}>
          <h1 className="pb-3">We solve digital <br/> problems with an <br/> outstanding <br/> creative flare</h1>
          <p className="pb-4">We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.</p>

        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 p-4 form" style={{ background: "#fff", borderRadius: "10px" }}>
          <form className="d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex">
              <div className="mb-5 form-label" style={{paddingRight:"50px"}}>
                LOGIN
              </div>
              <div className="mb-5 form-label"  style={{paddingLeft:"50px"}}>
                SIGNUP
              </div>
            </div>
            <div className="mb-4" style={{ width: "100%" }}>
              <input type="text" className="form-control input-style" id="exampleFormControlInput1" placeholder="Your email" />
            </div>

            <div className="mb-4" style={{ width: "100%" }}>
              <input type="password" className="form-control input-style" id="exampleFormControlInput1" placeholder="Your password" />
            </div>

            <button type="button" className="btn ms-3 contact-btn form-btn" style={{ background: "#25DAC5" }}>Create an Account</button>
            <div className="d-flex my-2">
              <IoRemoveOutline className="pt-2" /> <p>Or</p><IoRemoveOutline className="pt-2" />
            </div>
            <button type="button" className="btn ms-3 contact-btn form-btn" style={{ background: "#25DAC5" }}>Login via Twitter</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup;
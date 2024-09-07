import ContactBg from "../assets/ContactBg.png"
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaBuilding } from "react-icons/fa";

const AppContact = ({formHeading, formPara}) => {
  return (
    <div className="row">
      <img src={ContactBg} className="img-fluid content-img" alt="..."></img>
      <div className="row contact d-flex justify-content-center align-items-center">
        <div className="col-md-6 col-sm-12 col-xs-12" style={{ color: "#fff" }}>
          <h1 className="pb-3">{formHeading}</h1>
          <p className="pb-4">{formPara}</p>
          <p className="pb-4"><FaPhoneAlt />+1 555 505 5050 </p>
          <p className="pb-4"><IoMdMail /> info@designmodo.com</p>
          <p className="pb-4"><FaBuilding /> San Francisco, CA560 Bush St & 20th Ave, Apt5 San Francisco, 230909</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 p-3 form" style={{ background: "#fff", borderRadius: "10px" }}>
          <form>
            <div className="d-flex justify-content-between align-items-center">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">YOUR NAME</label>
                <input type="text" className="form-control input-style" id="exampleFormControlInput1" placeholder="First name" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">BUDGET</label>
                <select class="form-select input-style" aria-label="Default select example">
                  <option selected>$ 500</option>
                  <option value="2">$ 600</option>
                  <option value="3">$ 800</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">INPUT FIELD</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">YOUR MESSAGE</label>
              <textarea className="form-control input-style" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
            </div>
            <div className="d-flex gap-2 justify-content-between align-items-center">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  Send me a copy
                </label>
              </div>
              <button type="button" className="btn ms-3 contact-btn" style={{ background: "#25DAC5" }}>Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
}

export default AppContact;
import Plan from "../components/plan";
import pricingImg from "../assets/pricingImg.png"
const Price = () => {
  return (
    <div className="container" style={{color:"#fff"}}>
            <img src={pricingImg} className="img-fluid pricingBg" alt="..."></img>
            <div className="row pricing">
      <div className="text-center">
        <h1>Plans & Pricing </h1>
        <p>Startup Framework is free forever — you only pay for custom domain hosting or to export your site.</p>
      </div>
        <div className="col-4 plan-detail">
          <Plan title="Starter" amount="99.9$" />
        </div>
        <div className="col-4 plan-detail" >
          <Plan title="Professional" amount="19.99$" />
        </div>  <div className="col-4 plan-detail">
          <Plan title="Team" amount="49.99$" />
        </div>
      </div>
    </div>
  )
}

export default Price;
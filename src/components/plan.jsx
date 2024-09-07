import "../components/styles.css"

const Plan = ({title, amount}) => {
    return (
        <div className="col-4">
        <p>{title}</p>
        <h1>{amount}</h1> 
        <p>2 GB of space</p>         
        <p>14 days of backup</p>
        <p>Social integrations</p>
        <p>Client billing</p>
        <p>Remote access</p>
        <p>Custom domain</p>
        <p>24 hours support</p>
        <p>Admin tools</p>
        <p>Collaboration tools</p>
        <p>User management</p>
        </div>
    );

}
export default Plan;
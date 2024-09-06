const AppWork = ({workImage, imgHeading, imgPara}) => {
    return (
        <div class="card mb-5" style={{border:"none"}}>
        <img src={workImage} class="card-img-top" alt="..."/>
        <div class="card-body" style={{textAlign:"center", color:"#fff"}} >
          <h5 class="card-title">{imgHeading}</h5>
          <p class="card-text">{imgPara}</p>
        </div>
      </div>
    )
}

export default AppWork;
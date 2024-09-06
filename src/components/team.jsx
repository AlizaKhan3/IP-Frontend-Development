const AppTeam = ({ userImg, userName, userInfo, userLogo }) => {
    return (
          <div class="card" style={{ border: "none", width:"200px" }}>
            <img src={userImg} class="card-img-top team-card" alt="..." />
            <div class="card-body">
              <h5 class="card-title" style={{ color: "#fff" }}>{userName}</h5>
              <p class="card-text" style={{ color: "#fff" }}>{userInfo}</p>
              <div className="d-flex">
                <p class="card-text">{userLogo}</p>
                <p class="card-text">{userLogo}</p>
                <p class="card-text">{userLogo}</p>
                <p class="card-text">{userLogo}</p>
              </div>
            </div>
          </div>
    )
}

export default AppTeam;
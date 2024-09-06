const AppCard = ({ imgSrc, cardText, userName }) => {
  return (
    <div class="card mb-3 p-4">
      <div class="row g-0">
        <div class="col-md-2">
          <img src={imgSrc} class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body" style={{ color: "#fff" }}>
            <p class="card-text">{cardText}</p>
            <p class="card-text">{userName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AppCard;
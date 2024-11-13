import "./styleCom/styleBannerBr.css";

//======================== phần Banner dành cho Browse page ===============================
export function BannerBr(props) {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${props.imglink})`,
        backgroundSize: "cover",
      }}
    >
      <div className="text">
        <h1>{props.name && props.name}</h1>
        <div>
          <button>Play</button>
          <button>My List</button>
        </div>
        <div className="p">
          <p>{props.overview && props.overview}</p>
        </div>
      </div>
    </div>
  );
}

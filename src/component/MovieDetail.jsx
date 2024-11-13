import "./styleCom/styleMoDe.css";
import { pagevideot } from "../linkData/link";
import { useEffect } from "react";
import React from "react";
import { MoDeContext } from "../store/MoDeContext";
import { useAPI } from "../hooks/useAPI";
import YouTube from "react-youtube";

//==== phần show chi tiết trailer film được click chọn từ các danh mục trang Browse page =====
export function MovieDetail(props) {
  const datacontext = React.useContext(MoDeContext);
  const [data, reload] = useAPI(pagevideot(datacontext.getData().id));

  useEffect(() => {
    reload(pagevideot(datacontext.getData().id));
  }, [datacontext]);

  const datafinter = data
    ? data.results.filter(
        (x) =>
          x.site == "YouTube" &&
          (x.type == "Trailer" ? true : x.type == "Teaser")
      )
    : [];
  const getdatacontext = datacontext.getData();
  const videoId = datafinter.length > 0 ? datafinter[0].key : "";
  const otps = {
    height: "400",
    width: "100%",
    playerVars: { autoplay: 0 },
  };

  return (
    <div className={"movie-detail"} id={"mvdt"}>
      <div className={"detail-text"}>
        <h2>{getdatacontext.title}</h2>
        <h4>Release Date: {getdatacontext.release_date}</h4>
        <h4>
          Vote: {getdatacontext.vote_average}/{getdatacontext.vote_count}
        </h4>
        <p>{getdatacontext.overview}</p>
      </div>
      <div className={"video-frame"}>
        {videoId != "" ? (
          <YouTube videoId={videoId} opts={otps} />
        ) : (
          <img className={"video"} src={getdatacontext.hinh} alt={""} />
        )}
      </div>
    </div>
  );
}

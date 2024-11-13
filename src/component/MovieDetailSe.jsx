import "./styleCom/styleMoDe.css";
import { pagevideot } from "../linkData/link";
import { useEffect } from "react";
import React from "react";
import { SearchContext } from "../store/SearchContext";
import { useAPI } from "../hooks/useAPI";
import YouTube from "react-youtube";

//================= phần lõi của MovieDetailSe ==============================================
export function Detail() {
  const datacontext = React.useContext(SearchContext);
  const [data, reload] = useAPI(pagevideot(datacontext.getdata().id));

  useEffect(() => {
    reload(pagevideot(datacontext.getdata().id));
  }, [datacontext]);

  const datafinter = data
    ? data.results.length > 0
      ? data.results.filter(
          (x) =>
            x.site == "YouTube" &&
            (x.type == "Trailer" ? true : x.type == "Teaser")
        )
      : []
    : [];
  const getdatacontext = datacontext.getdata();
  const videoId = datafinter.length > 0 ? datafinter[0].key : "";
  const otps = {
    height: "400",
    width: "100%",
    playerVars: { autoplay: 0 },
  };

  return (
    <>
      <h3 style={{ color: "white" }}>Movie Detail</h3>
      <div className={"movie-detail"} id="mvdt">
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
    </>
  );
}

//========== phần show chi tiết phim và trailer cho trang Search page ======================
export function MovieDetailSe() {
  const datacontext = React.useContext(SearchContext);

  return <>{datacontext.getdata() ? <Detail /> : ""}</>;
}

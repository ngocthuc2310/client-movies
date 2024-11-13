import React from "react";
import "./styleBrowse.css";
import { NavBar } from "../../component/NavBar";
import { useAPI } from "../../hooks/useAPI";
import { BannerBr } from "../../component/BannerBr";
import { BodyBr } from "../../component/BodyBr";
import { MoDeProvider } from "../../store/MoDeContext";
import { urll, pagehinh } from "../../linkData/link";

//============== Trang Chủ ==============================================================
function Browse() {
  const [data] = useAPI(urll.urlNetflix);

  const dataBanner = data
    ? data.results.length > 0
      ? data.results[Math.floor(Math.random() * (data.results.length - 1))]
      : null
    : null;

  const imageBanner = dataBanner ? pagehinh + dataBanner.backdrop_path : "";

  return (
    <div className="app">
      <div className={"container"}>
        <NavBar />
        <BannerBr
          imglink={imageBanner && imageBanner}
          name={dataBanner && dataBanner.name && dataBanner.name}
          overview={dataBanner && dataBanner.overview && dataBanner.overview}
        />
        <MoDeProvider>
          <BodyBr />
        </MoDeProvider>
      </div>
    </div>
  );
}

export default Browse;

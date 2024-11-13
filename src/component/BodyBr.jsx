import { useAPI } from "../hooks/useAPI";
import "./styleCom/styleBodyBr.css";
import { urll, pagehinh } from "../linkData/link";
import React from "react";
import { MoDeContext } from "../store/MoDeContext";
import { MovieDetail } from "./MovieDetail";

//============ Phần thân cho Browse page ===============================================
export function BodyBr() {
  const dataContext = React.useContext(MoDeContext);

  return (
    <>
      <DanhMucOri url={urll.urlNetflix} theloai="ORI" />
      {dataContext.getData().theloai == "ORI" && <MovieDetail />}

      <h3 className="title">Xu Hướng</h3>
      <DanhMuc url={urll.urlTrending} theloai="XH" />

      <h3 className="title">Xếp Hạng Cao</h3>
      <DanhMuc url={urll.urlTop} theloai="TOP" />

      <h3 className="title">Hành Động</h3>
      <DanhMuc url={urll.urlAction} theloai="HD" />

      <h3 className="title">Hài Hước</h3>
      <DanhMuc url={urll.urlComedy} theloai="HH" />

      <h3 className="title">Kinh Dị</h3>
      <DanhMuc url={urll.urlHorror} theloai="KD" />

      <h3 className="title">Lãng mạng</h3>
      <DanhMuc url={urll.urlRomance} theloai="LM" />

      <h3 className="title">Tài Liệu</h3>
      <DanhMuc url={urll.urlDocument} theloai="TL" />
    </>
  );
}

//================== phần Danh mục cho BodyBr trang Browse page =======================
function DanhMuc(props) {
  const dataContext = React.useContext(MoDeContext);

  return (
    <>
      <DMuc {...props} />
      {dataContext.getData().theloai == props.theloai && <MovieDetail />}
    </>
  );
}

//================== phần lõi phần DanhMuc cho BodyBr trang Browse page =======================
function DMuc(props) {
  const dataContext = React.useContext(MoDeContext);
  const [listData] = useAPI(props.url);
  // console.log("listDT", listData);

  const list = listData
    ? listData.results.map((x) => ({
        id: x.id,
        hinh: x.backdrop_path
          ? pagehinh + x.backdrop_path
          : "./HinhTest/noimage.jpg",
        title: x.title,
        release_date: x.release_date,
        vote_average: x.vote_average,
        vote_count: x.vote_count,
        overview: x.overview,
        theloai: props.theloai,
      }))
    : [];

  function evClick(x) {
    dataContext.setData(x);
  }

  return (
    <div className="danh-muc">
      <div className="content">
        {list.map((x) => (
          <img
            src={x.hinh}
            alt=""
            onClick={() => {
              evClick(x);
            }}
          />
        ))}
      </div>
    </div>
  );
}

//=========== phần danh mục Original cho phần BodyBr trang Browse page ==================
function DanhMucOri(props) {
  const dataContext = React.useContext(MoDeContext);
  const [listData] = useAPI(props.url);
  const list = listData
    ? listData.results.map((x) => ({
        id: x.id,
        hinh: pagehinh + x.poster_path,
        title: x.title,
        release_date: x.release_date,
        vote_average: x.vote_average,
        vote_count: x.vote_count,
        overview: x.overview,
        theloai: props.theloai,
      }))
    : [];

  function evClick(x) {
    dataContext.setData(x);
  }

  return (
    <div className="danh-muc-ori">
      <div className="content-ori">
        {list.map((x) => (
          <img
            src={x.hinh}
            alt=""
            onClick={() => {
              evClick(x);
            }}
          />
        ))}
      </div>
    </div>
  );
}

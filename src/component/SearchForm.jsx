import "./styleCom/styleSearchForm.css";
import { SearchIcon } from "../svg/SvgCustom";
import { useRef } from "react";
import { pagesearcht, pagehinh } from "../linkData/link";
import { SearchContext } from "../store/SearchContext";
import React from "react";

//=========== phần form text input search từ Page Search ======================================
export function SearchForm() {
  const datacontext = React.useContext(SearchContext);
  const input = useRef("");

  const evSubmit = (e) => {
    e.preventDefault();
    fetch(pagesearcht, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ q: input.current.value }),
    })
      .then((x) => x.json())
      .then((y) => {
        const tt =
          y &&
          y.results.map((x) => {
            return {
              id: x.id,
              hinh: x.poster_path
                ? x.poster_path != ""
                  ? pagehinh + x.poster_path
                  : "./HinhTest/noimage.jpg"
                : "./HinhTest/noimage.jpg",
              title: x.title ? x.title : x.name,
              release_date: x.release_date,
              vote_average: x.vote_average,
              vote_count: x.vote_count,
              overview: x.overview,
              theloai: " ",
            };
          });
        datacontext.setlist(tt);
      })
      .catch((err) => alert(err));
  };

  return (
    <div className={"banner-se"}>
      <form action="" className={"form-bn"} onSubmit={evSubmit}>
        <div className={"input-group"}>
          <input type={"text"} ref={input} required />
          <SearchIcon color={"#BE9796"} className={"icon-f"} />
        </div>
        <div className={"button-group"}>
          <button type={"submit"} className={"search"}>
            SEARCH
          </button>
          <button type={"reset"} className={"reset"}>
            RESET
          </button>
        </div>
      </form>
    </div>
  );
}

import "./styleCom/styleResultList.css";
import { SearchContext } from "../store/SearchContext";
import React, { useContext } from "react";

//========= Phần show hình ảnh danh sách kết quả cho Search page  =========================
export function ResultList() {
  const datacontext = useContext(SearchContext);

  function evClick(x) {
    datacontext.setdata(x);
    const link = document.createElement("a");
    link.href = "#mvdt";
    setTimeout(() => {
      link.click();
    }, 500);
  }
  //=======================================================================================
  console.log("datacontext.getlist()", datacontext.getlist());
  return (
    <>
      <h3 className="title-result">Search Result</h3>
      <div className={"result-list"}>
        {datacontext.getlist() &&
          datacontext.getlist().map((x) => (
            <img
              src={x.hinh}
              alt={""}
              onClick={() => {
                evClick(x);
              }}
            />
          ))}
      </div>
    </>
  );
}

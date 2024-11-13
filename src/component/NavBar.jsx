import "./styleCom/styleNavBar.css";
import { SearchIcon } from "../svg/SvgCustom";
import { useEffect, useState } from "react";

//============= phần NavBar cho Web App ==================================================
export function NavBar() {
  const [classNB, setClassNB] = useState("navbar");

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 100) setClassNB("navbar-tt");
      else setClassNB("navbar");
    });
  }, []);

  return (
    <div className={classNB}>
      <a className="a" href="/">
        Movie App
      </a>
      <a href="/search">
        <SearchIcon color={"#BE9796"} className={"icon"} />
      </a>
    </div>
  );
}

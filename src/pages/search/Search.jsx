import "./styleSearch.css";
import { NavBar } from "../../component/NavBar";
import React from "react";
import { SearchForm } from "../../component/SearchForm";
import { ResultList } from "../../component/ResultList";
import { SearchProvider } from "../../store/SearchContext";
import { MovieDetailSe } from "../../component/MovieDetailSe";

//============ Trang Chức năng Search Movie =============================================
const Search = () => {
  return (
    <div className="app">
      <div className={"container"}>
        <NavBar />
        <SearchProvider>
          <SearchForm />
          <ResultList />
          <MovieDetailSe />
        </SearchProvider>
      </div>
    </div>
  );
};

export default Search;

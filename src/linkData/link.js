const link = "http://localhost:5000";
const apiKey = "fe7e23df9dc11789d3754c465e538268";

export const urll = {
  urlTop: link + "/api/movies/top-rate/1?token=zxcvbnm",
  urlTrending: link + "/api/movies/trending/1?token=zxcvbnm",
  urlAction: link + "/api/movies/bymore/1?gen=Action&token=zxcvbnm",
  urlComedy: link + "/api/movies/bymore/1?gen=Comedy&token=zxcvbnm",
  urlDocument: link + "/api/movies/bymore/1?gen=Documentary&token=zxcvbnm",
  urlHorror: link + "/api/movies/bymore/1?gen=Horror&token=zxcvbnm",
  urlRomance: link + "/api/movies/bymore/1?gen=Romance&token=zxcvbnm",
  urlSearch: link + "/api/movies/bymore/1?gen=Action&token=zxcvbnm",
  urlNetflix: link + "/api/movies/bymore/1?gen=TV Movie&token=zxcvbnm",
};

export const pagehinh = "https://image.tmdb.org/t/p/w500";

export const pagevideot = (id) =>
  `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`;

export const pagesearcht = link + "/api/movies/search/1?token=zxcvbnm";

import React, { useState } from "react";

//======== phần Context giao tiếp cho trang Search page ======================
export const SearchContext = React.createContext({
  data: null,

  listItem: [],
  setlist: (list) => {},
  getlist: () => {},
  setdata: (dt) => {},
  getdata: () => {},
});

//======= phần Provider bao ngoài cho trang Search Page =======================
export function SearchProvider(props) {
  const [data, setData] = useState(null);
  const [list, setList] = useState([]);

  function setlist(dt) {
    setList(dt);
  }
  function getlist() {
    // Mấy cái get/set này không cần thiết, em nên cân nhắc bỏ. Set thì có thể cần còn get thì đưa state luôn
    return list;
  }
  function setdata(dt) {
    setData(dt);
  }
  function getdata() {
    return data;
  }

  const tt = {
    setlist,
    getlist,
    setdata,
    getdata,
  };
  // Nếu không cần Context thì hạn chế vì việc render lại toàn bộ children nằm dưới context khi có state thay đổi

  return (
    <SearchContext.Provider value={tt}>{props.children}</SearchContext.Provider>
  );
}

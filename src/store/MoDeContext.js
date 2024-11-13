import React, { useState } from "react";

//========== phần Context giao tiếp cho BodyBr trang Browse page ===================
export const MoDeContext = React.createContext({
  data: {
    id: 0,
    hinh: "",
    title: "",
    release_date: "",
    vote_average: 0,
    vote_count: 0,
    overview: "",
    theloai: "",
  },
  setData: (dt) => {},
  getData: () => {},
});

//======== phần bao ngoài Provide của ModeContext =====================================
export function MoDeProvider(props) {
  const [obj, setObj] = useState({
    id: 0,
    hinh: "",
    title: "",
    release_date: "",
    vote_average: 0,
    vote_count: 0,
    overview: "",
  });

  const setdata = (dt) => {
    setObj(dt);
  };
  const getdata = () => {
    return obj;
  };

  const modecontext = {
    setData: setdata,
    getData: getdata,
  };

  return (
    <MoDeContext.Provider value={modecontext}>
      {props.children}
    </MoDeContext.Provider>
  );
}

import { useCallback, useEffect, useState } from "react";

//============ Custom Hook giao tiếp với API ===============================
export function useAPI(url, runNow = true) {
  const [data, setData] = useState(null);

  const fetchAPI = useCallback((urll) => {
    (async function () {
      try {
        const response = await fetch(urll);
        if (!response.ok) throw new Error("Response.ok == false");
        const dt = await response.json();
        setData(dt);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  useEffect(() => {
    if (runNow) fetchAPI(url);
  }, []);

  return [data, fetchAPI];
}

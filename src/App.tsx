import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";

import { useRecoilState } from "recoil";

import { MainData } from "./recoil/atoms/MainData";
import { useCallback, useEffect } from "react";
import { requestAcion } from "utils";

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setMainData] = useRecoilState(MainData);

  const req = useCallback(
    () => requestAcion().then((r) => setMainData(r)),
    [setMainData]
  );

  useEffect(() => {
    req();
  }, [req]);

  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/contact" element={<Home />} />
    </Routes>
  );
}

export default App;

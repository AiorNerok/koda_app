import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";

import { useRecoilState, useRecoilValueLoadable } from "recoil";

import { AtomMainData, AtomUniqueData } from "./recoil/atoms";
import { useEffect } from "react";
import { SelectorLoadMainData } from "recoil/selector/SelectorLoadMainData";

function App() {
  const [, setAtomValMainData] = useRecoilState(AtomMainData);
  const [, setAtomValUniqueData] = useRecoilState(AtomUniqueData);

  const userData = useRecoilValueLoadable(SelectorLoadMainData);
  let { state } = userData;

  // @ts-ignore
  useEffect(() => {
    if (state === "hasValue") {
      let {
        contents: { items },
      } = userData;

      setAtomValMainData(items);
      // @ts-ignore
      let u: string[] = [...new Set(items.map((i) => i["department"]))];
      // @ts-ignore
      setAtomValUniqueData(u);
    }
  }, [setAtomValMainData, setAtomValUniqueData, state, userData]);

  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/contact" element={<Home />} />
    </Routes>
  );
}

export default App;

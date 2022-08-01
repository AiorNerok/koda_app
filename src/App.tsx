import React, { useEffect, useContext, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";

import { Context } from "./context";
import { GetUniqueValues, requestAcion, searchData } from "./utils";

function App() {
  const ctx = useContext(Context);

  const setDataOnRenderFilter = useCallback(() => {
    // @ts-ignore
    return ctx.data.filter((i) => i["department"] === ctx.filterValue);
  }, [ctx.data, ctx.filterValue]);

  const setDataOnRenderSearch = useCallback(() => {
    // @ts-ignore
    return searchData(ctx.dataOnRender, ctx.searchValue);
  }, [ctx.dataOnRender, ctx.searchValue]);

  useEffect(() => {
    requestAcion().then((r) => {
      ctx.data = r;
      ctx.tabsList = GetUniqueValues(r);
    });
    // @ts-ignore
    ctx.dataOnRender = setDataOnRenderFilter();
    // @ts-ignore
    ctx.dataOnRender = setDataOnRenderSearch();
  }, [ctx, setDataOnRenderFilter, setDataOnRenderSearch]);

  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/contact" element={<Home />} />
    </Routes>
  );
}

export default App;

import React from "react";
import Mainstream from "./pages/Mainstream";
import { Routes, Route } from "react-router-dom";
import H_page from "./pages/H_page";
import A_page from "./pages/A_page";
import C_page from './pages/C_page'
import P_page from './pages/P_page'
import S_web_page from './pages/S_web_page'
import S_prog_page from './pages/S_prog_page'
function Change() {
  return (
    <div>
      {" "}
      <Routes>
        <Route path="/" element={<Mainstream />}>
          <Route index element={<H_page />} />
          <Route path="/about" element={<A_page/>}/>
          <Route path="/contact" element={<C_page/>}/>
          <Route path="/skill/web" element={<S_web_page/>}/>
          <Route path="/skill/programming" element={<S_prog_page/>}/>
          <Route path="/project" element={<P_page/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default Change;

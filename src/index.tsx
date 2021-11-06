import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import Content from "./Content";
import "./styles.css";
/* ReactDOMレンダリング */
/* yeah entry point yo */
ReactDOM.render(
  <StrictMode>
    <Header />
    <Content />
  </StrictMode>,
  document.getElementById("root")
);

/* ad banner setting (start) */

let sy = 0;
let py = 0;
const ad : any = document.querySelector(".ad");
/* window.addEventListener('scroll',(e)=>{ */
const root = document.getElementsByClassName("prlx_root")[0];
root.addEventListener("scroll", (e) => {
  py = sy;
  /* sy = window.scrollY; */
  sy = root.scrollTop;
  if (sy > py) {
    //console.log("down");
    ad.style.bottom = (sy - py).toString() + "px";
  } else {
    //console.log("up");
    ad.style.bottom = (-(py - sy)).toString() + "px";
  }
});
/* クリックで消えるクラス付与 */
ad.addEventListener("click", (e : any) => {
  ad.classList.add("ad-hidden");
});

/* ad banner setting (end) */

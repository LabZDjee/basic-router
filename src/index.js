/* jshint esversion: 6 */

import routes from "./routes";
import { ErrorComponent } from "./components";
import "./style.css";

window.switchTo = function (id) {
  document.getElementById(id).click();
};

const parseLocation = () => location.hash.slice(1).toLowerCase() || "/";

const findComponentByPath = (path, routes) => routes.find((r) => r.path.match(new RegExp(`^${path}$`))) || undefined;

const baseTitle = document.getElementById("title").innerHTML;

const router = () => {
  // Find the component based on the current path
  const path = parseLocation();
  // If there's no matching route, get the "Error" component
  const { component = ErrorComponent } = findComponentByPath(path, routes) || {};
  // Render the component in the "app" placeholder
  document.getElementById("app").innerHTML = component.render();
  document.title = `${baseTitle} ${path}`;
};

window.addEventListener("hashchange", router);
window.addEventListener("load", router);

// test of a recurring promise to check if it works with polyfills (e.g. on IE 9)
const titleStyle = document.getElementById("title").style;
(function getTitleSwitchPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  }).then(() => {
    titleStyle.color = titleStyle.color === "grey" ? "black" : "grey";
    getTitleSwitchPromise();
  });
})();

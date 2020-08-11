/* jshint esversion: 6 */

import routes from "./routes";
import { ErrorComponent } from "./components";

const parseLocation = () => location.hash.slice(1).toLowerCase() || "/";

const findComponentByPath = (path, routes) => routes.find((r) => r.path.match(new RegExp(`^${path}$`))) || undefined;

const router = () => {
  // Find the component based on the current path
  const path = parseLocation();
  // If there's no matching route, get the "Error" component
  const { component = ErrorComponent } = findComponentByPath(path, routes) || {};
  // Render the component in the "app" placeholder
  document.getElementById("app").innerHTML = component.render();
};

window.addEventListener("hashchange", router);
window.addEventListener("load", router);

// test of a recurring promise to check if it works wit polyfills (e.g. on IE 9)
const titleStyle = document.getElementById("title").style;
let p;
function getTitleSwitchPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  }).then(() => {
    titleStyle.color = titleStyle.color === "grey" ? "black" : "grey";
    p = getTitleSwitchPromise();
  });
}
p = getTitleSwitchPromise();

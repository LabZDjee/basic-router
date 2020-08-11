/* jshint esversion: 6 */

import { HomeComponent, Page1Component, Page2Component, PageAboutComponent } from "./components";

export default [
  { path: "/", component: HomeComponent },
  { path: "/page-1", component: Page1Component },
  { path: "/page-2", component: Page2Component },
  { path: "/about-page", component: PageAboutComponent },
];

/* jshint esversion: 6 */

// Components
const HomeComponent = {
  render: () => {
    return `
        <section>
          <h1>Home</h1>
          <p>Laboris ex do id duis amet exercitation veniam ut deserunt in fugiat. Nisi mollit cillum sit ut tempor duis laboris ullamco adipisicing. Minim sint dolore aute deserunt laborum veniam cillum. Aliquip occaecat duis sunt in adipisicing voluptate ad dolor dolore dolore consectetur.</p>
        </section>
      `;
  },
};

const Page1Component = {
  render: () => {
    return `
        <section>
          <h1>Page 1</h1>
          <p>Excepteur nulla est consectetur et nisi</p>
        </section>
      `;
  },
};

const Page2Component = {
  render: () => {
    return `
        <section>
          <h1>Page 2</h1>
          <p>Incididunt voluptate sit ut</p>
        </section>
      `;
  },
};

const PageAboutComponent = {
  render: () => {
    return `
          <section>
            <h1>About</h1>
            <p>Goal is to give an idea of how it's possible to render different dynamic contents based on the URL with plain JavaScript</p>
          </section>
        `;
  },
};

const ErrorComponent = {
  render: () => {
    return `
        <section>
          <h1>Error</h1>
          <p>No landing page!</p>
        </section>
      `;
  },
};

// Routes
const routes = [
  { path: "/", component: HomeComponent },
  { path: "/page-1", component: Page1Component },
  { path: "/page-2", component: Page2Component },
  { path: "/about-page", component: PageAboutComponent },
];

const parseLocation = () => location.hash.slice(1).toLowerCase() || "/";

const findComponentByPath = (path, routes) => routes.find((r) => r.path.match(new RegExp(`^\\${path}$`))) || undefined;

const router = () => {
  // Find the component based on the current path
  const path = parseLocation();
  console.log(path);
  // If there's no matching route, get the "Error" component
  const { component = ErrorComponent } = findComponentByPath(path, routes) || {};
  // Render the component in the "app" placeholder
  document.getElementById("app").innerHTML = component.render();
};

window.addEventListener("hashchange", router);
window.addEventListener("load", router);

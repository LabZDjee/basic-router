/* jshint esversion: 6 */

const HomeComponent = {
  render: () => {
    return `
          <section>
            <h1 class="animate__animated animate__flash">Home</h1>
            <p>Laboris ex do id duis amet exercitation veniam ut deserunt in fugiat. Nisi mollit cillum sit ut tempor duis laboris ullamco adipisicing. Minim sint dolore aute deserunt laborum veniam cillum. Aliquip occaecat duis sunt in adipisicing voluptate ad dolor dolore dolore consectetur.</p>
          </section>
        `;
  },
};

const Page1Component = {
  render: () => {
    return `
          <section>
            <h1 class="animate__animated animate__flash">Page 1</h1>
            <p>Excepteur nulla est consectetur et nisi</p>
          </section>
        `;
  },
};

const Page2Component = {
  render: () => {
    return `
          <section>
            <h1 class="animate__animated animate__flash">Page 2</h1>
            <p>Incididunt voluptate sit ut et nisi</p>
          </section>
        `;
  },
};

const PageAboutComponent = {
  render: () => {
    return `
            <section>
              <h1 class="animate__animated animate__flash">About</h1>
              <p>Goal is to give an idea of how it is possible to render different dynamic contents based on the URL with plain JavaScript</p>
            </section>
          `;
  },
};

const ErrorComponent = {
  render: () => {
    return `
          <section>
            <h1 class="animate__animated animate__flash">Error</h1>
            <p>No landing page for this!</p>
          </section>
        `;
  },
};

export { HomeComponent, Page1Component, Page2Component, PageAboutComponent, ErrorComponent };

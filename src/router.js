import React from "react";
import App from "./App";
// import Contact from "./components/Contact";
import About from "./About";
const routes = {
  "/": () => <App />,
  "/about": () => <About />,
  // "/contact": () => <Contact />
};
export default routes;
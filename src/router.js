import React from "react";
import Projects from "./components/Projects";
import About from "./components/About";
import Home from "./components/Home";

const routes = {
  "/": () => <Home />,
  // "/about": () => <About />,
  // "/projects": () => <Projects />
};
export default routes;
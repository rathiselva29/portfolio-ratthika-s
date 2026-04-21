import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";

const Projects = lazy(() => import("./pages/Projects"));
const Skills = lazy(() => import("./pages/Skills"));
const Resume = lazy(() => import("./pages/Resume"));
const Contact = lazy(() => import("./pages/Contact"));
const CodingProfiles = lazy(() => import("./pages/CodingProfiles"));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-muted-foreground">Loading...</div>
  </div>
);

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/projects"
          element={
            <Suspense fallback={<PageLoader />}>
              <Projects />
            </Suspense>
          }
        />
        <Route
          path="/skills"
          element={
            <Suspense fallback={<PageLoader />}>
              <Skills />
            </Suspense>
          }
        />
        <Route
          path="/resume"
          element={
            <Suspense fallback={<PageLoader />}>
              <Resume />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<PageLoader />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/profiles"
          element={
            <Suspense fallback={<PageLoader />}>
              <CodingProfiles />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;

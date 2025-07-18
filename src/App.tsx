import React, { Suspense } from "react";
import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  useNavigate,
} from "react-router-dom";

import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Login from "./pages/Login";
import NotFount from "./components/NotFount";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import ContactLayout from "./layout/ContactLayout";
import JobsLayout from "./layout/JobsLayout";
import { jobsLoader } from "./pages/Jobs";
const Jobs = React.lazy(() => import("./pages/Jobs"));
import JobDetails, { jobDetailsLoader } from "./components/JobDetails";
import Error from "./components/Error";
import Exercise from "./pages/Exercise";
import ExDetails from "./components/ExDetails";

function App() {
  //const navigate = useNavigate();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<Login />} />
        <Route path="/" element={<RootLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<ContactLayout />}>
            <Route path="info" element={<ContactInfo />} />
            <Route path="form" element={<ContactForm />} />
          </Route>
          <Route path="product" element={<Product />} />
          <Route path="jobs" element={<JobsLayout />} errorElement={<Error />}>
            <Route index element={<Jobs />} loader={jobsLoader} />
            <Route
              path=":id"
              element={<JobDetails />}
              loader={jobDetailsLoader}
            />
          </Route>
          <Route path="exercise">
            <Route index element={<Exercise />} />
            <Route path=":name" element={<ExDetails />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFount />} />
      </>
    )
  );
  return (
    <>
      <Suspense fallback={<div>Loading page...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;

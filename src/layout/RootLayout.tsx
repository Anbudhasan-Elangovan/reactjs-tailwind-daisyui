import { Outlet, useNavigate, Navigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import Header from "../components/Header";
import { useState } from "react";

const RootLayout = () => {
  const user = localStorage.getItem("user");
  return (
    <>
      {user ? (
        <div className="w-screen h-screen">
          <div className="h-1/12 border-b-1 border-gray-300 shadow-md flex justify-end items-center px-4 bg-slate-700">
            <Header />
          </div>
          <div className="flex h-10/12">
            <div className="h-full w-1/5 border-r-2 border-gray-300 p-4 bg-slate-200">
              <Navbar />
            </div>
            <div className="h-full w-4/5 p-4 bg-slate-100">
              <Outlet />
            </div>
          </div>
          <div className="h-1/12 border-t-1 border-gray-300 flex justify-center items-center px-4 bg-amber-600">
            footer
          </div>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default RootLayout;

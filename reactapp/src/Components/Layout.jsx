import React from "react";

import Appbar from "../Components/Appbar";
import SideMenu from "../Components/SideMenu";
const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      {/* <header className="bg-blue-600 text-white p-4 fixed w-full top-0 z-10">
        <h1>Top Navigation</h1>
      </header> */}
      {/* Top Navigation */}
      <Appbar />
      <div className="flex flex-1 pt-16">
        {/* Sidebar */}

        <SideMenu mFrom={3} />

        <main className="flex-1 ml-64 p-4 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;

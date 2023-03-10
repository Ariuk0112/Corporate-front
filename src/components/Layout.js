import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="font-[Constantia] animate-fade">
      <Header />
      {children}
      <Sidebar />
      <Footer />
    </div>
  );
};

export default React.memo(Layout);

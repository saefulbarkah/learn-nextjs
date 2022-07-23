import React from "react";
import Footer from "./Footer";
import Header from "./Header";
export default function Layout({ children }) {
  return (
    <>
      <div className="flex flex-col h-screen justify-between ">
        <Header />
        <main className="mb-auto  w-full">{children}</main>
        <Footer />
      </div>
    </>
  );
}

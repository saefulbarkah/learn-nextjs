import React from "react";
import ItemNav from "./itemNav";

export default function NavBar() {
  return (
    <>
      <ul className="hidden space-x-10 text-white font-semibold py-10 capitalize sm:block">
        <ItemNav name="Beranda" to="/" />
        <ItemNav name="Cek pesanan" to="/cek_pesanan" />
        <ItemNav name="Hubungi kami" addClassName="btn" to="/hubungi" />
      </ul>
    </>
  );
}

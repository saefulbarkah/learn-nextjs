import Link from "next/link";
import React from "react";
import ItemNav from "./itemNav";

export default function NavMobile({ addClassName }) {
  return (
    <>
      <div
        className={`md:hidden rounded-t-3xl w-full bg-dark fixed bottom-0 z-999 h-[320px] border-t-4 border-gray text-white transition-transform ${
          addClassName == "to_bottom" ? "translate-y-full" : ""
        }`}
      >
        <ul className="flex flex-col mx-auto text-white text-2xl px-16 py-10 font-semibold">
          <Link href="/">
            <a className="pb-2">Beranda</a>
          </Link>
          <Link href="/">
            <a className="pb-20 mb-auto py-5">Cek Pesanan</a>
          </Link>
          <Link href="/hubungi">
            <a className="btn text-center text-xl">Hubungi kami</a>
          </Link>
        </ul>
      </div>
    </>
  );
}

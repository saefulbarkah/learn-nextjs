import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
export default function ItemNav({ name, addClassName, to }) {
  const router = useRouter();
  return (
    <>
      <Link href={to}>
        <a
          className={`py-10 hover:border-b-2 hover:border-primary ${
            addClassName == "btn" ? "btn" : ""
          } ${
            router.asPath === to
              ? "active:opacity-100 border-b-2 border-primary"
              : "text-slate-400 hover:text-white transition"
          }`}
        >
          {name}
        </a>
      </Link>
    </>
  );
}

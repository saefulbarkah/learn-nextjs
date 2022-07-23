import React from "react";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

export default function index() {
  return (
    <>
      <Layout>
        <Hero />
        <Banner />
      </Layout>
    </>
  );
}

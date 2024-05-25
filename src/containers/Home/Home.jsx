import { StickyNavbar } from "@/components/Header/index";
import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer/Footer";
import Loading from "@/components/Loading/Loading";
import About from "@/containers/Home/Section/About/About";
import Product from "@/containers/Home/Section/Product/Product";
import Project from "@/containers/Home/Section/Project/Project";
import Achievement from "@/containers/Home/Section/Achievement/Achievement";
import Service from "@/containers/Home/Section/Service/Service";
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <StickyNavbar />
          <About />
          <Product />
          <Project />
          {/* <Achievement /> */}
          <Service />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;

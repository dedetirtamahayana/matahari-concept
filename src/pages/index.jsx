import { StickyNavbar } from "@/components/Header";
import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer/Footer";
import Loading from "@/components/Loading/Loading";
import About from "@/components/About/About";
import Product from "@/components/Product/Product";
import Project from "@/components/Project/Project";
import Achievement from "@/components/Achievement/Achievement";
import Service from "@/components/Service/Service";
const index = () => {
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
          <Achievement />
          <Service />
          <Footer />
        </>
      )}
    </>
  );
};

export default index;

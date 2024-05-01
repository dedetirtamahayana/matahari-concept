import { StickyNavbar } from "@/components/Header";
import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer/Footer";
import Loading from "@/components/Loading/Loading";
import About from "@/components/About/About";
import Product from "@/components/Product/Product";
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
          <Footer />
        </>
      )}
    </>
  );
};

export default index;

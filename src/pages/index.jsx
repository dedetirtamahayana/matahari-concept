import { StickyNavbar } from "@/components/Header";
import Count from "@/components/Count/Count";
import React, { useState, useEffect } from "react";
import { Populer } from "@/components/Populer/Populer";
import Mitra from "@/components/Mitra/Mitra";
import Lowongan from "@/containers/Lowongan/Lowongan";
import Layanan from "@/components/Layanan/Layanan";
import Freelance from "@/containers/Freelance/Freelance";
import Faq from "@/components/FAQ/Faq";
import Unggulan from "@/components/Unggulan/Unggulan";
import Footer from "@/components/Footer/Footer";
import Loading from "@/components/Loading/Loading";

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
          <Count />
          <Populer />
          <Mitra />
          <Lowongan />
          <Layanan />
          <Freelance />
          <Unggulan />
          <Faq />
          <Footer />
        </>
      )}
    </>
  );
};

export default index;

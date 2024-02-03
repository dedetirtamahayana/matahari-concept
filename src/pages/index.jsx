import { StickyNavbar } from "@/components/Header";
import Count from "@/components/Count/Count";
import React from "react";
import { Populer } from "@/components/Populer/Populer";
import Mitra from "@/components/Mitra/Mitra";
import Lowongan from "@/containers/Lowongan/Lowongan";
import Layanan from "@/components/Layanan/Layanan";
import Freelance from "@/components/Freelance/Freelance";
import Faq from "@/components/FAQ/Faq";
import Unggulan from "@/components/Unggulan/Unggulan";
import Footer from "@/components/Footer/Footer";

const index = () => {
  return (
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
  );
};

export default index;

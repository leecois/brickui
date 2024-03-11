import React from "react";

import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import { Testimonials } from "./_components/testimonials";

const Home = () => {
  return (
    <>
      <div className="overflow-hidden bg-n-8 pt-[4.75rem] lg:pt-[5.25rem]">
        <Header />
        <Hero />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default Home;

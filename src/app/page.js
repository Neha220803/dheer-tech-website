"use client";

import HomeAboutUsComp from "@/components/about";
import { HomeHeroComp } from "@/components/hero";
import { OurProjectsComp } from "@/components/our-projects";
import { OurServiceComp } from "@/components/our-services";
import { HomeTestimonialComp } from "@/components/testimonial";
import HomeTimelineComp from "@/components/timeline";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <main className="">
      <HomeHeroComp />
      <HomeAboutUsComp />
      <OurServiceComp />
      <OurProjectsComp />
      <HomeTestimonialComp />
      <HomeTimelineComp />
    </main>
  );
}

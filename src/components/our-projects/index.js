"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTransform, useScroll, motion } from "framer-motion";
import "./styles.css";

const images = [
  "crown-3.png",
  "aadhi-2.png",
  "hds-1.png",
  "aadhi-3.png",
  "maya-1.png",
  "aadhi-3.png",
  "maya-3.png",
  "aadhi-1.png",
  "crown-2.png",
];

export const OurProjectsComp = () => {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="bg-neutral-700 text-white" id="projects">
      <div className="projects-header">
        <h1 className="projects-title">PROJECTS</h1>
        <p className="projects-description">
          We don't just build websites, we craft digital experiences. Every
          pixel tells a story, every interaction sparks joy. Our team blends
          cutting-edge technology with human-centered design to create solutions
          that don't just work—they inspire.
          <span className="arrow-line"></span>
          <span className="projects-description-highlight">
            Plus, we're pretty fun to work with.
          </span>
        </p>
      </div>
      <div
        ref={gallery}
        className="h-[175vh] bg-neutral-700 relative flex gap-[2vw] p-[2vw] box-border overflow-hidden"
      >
        <Column
          images={[images[0], images[1], images[2]]}
          y={y}
          topOffset="-top-[45%]"
        />
        <Column
          images={[images[3], images[4], images[5]]}
          y={y2}
          topOffset="-top-[95%]"
        />
        <Column
          images={[images[6], images[7], images[8]]}
          y={y3}
          topOffset="-top-[45%]"
        />
      </div>
    </div>
  );
};

const Column = ({ images, y, topOffset }) => {
  return (
    <motion.div
      className={`relative h-full w-1/3 flex flex-col gap-[2vw] ${topOffset}`}
      style={{ y }}
    >
      {images.map((src, index) => {
        return (
          <div
            key={index}
            className="h-full w-full relative rounded-[1vw] overflow-hidden"
          >
            <Image
              src={`/assets/images/projects/${src}`}
              fill
              alt="img"
              className="object-cover"
            />
          </div>
        );
      })}
    </motion.div>
  );
};

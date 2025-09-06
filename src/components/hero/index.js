import Image from "next/image";
import React from "react";

const vieLeft = "/assets/videos/video-bg.mp4";

const earthImg = "/assets/images/home.svg";

export const HomeHeroComp = () => {
  return (
    <div className="h-screen  px-30">
      <div className="grid md:grid-cols-2 grid-cols-1 h-screen ">
        <div className="flex justify-center items-center">
          <img
            src={earthImg}
            alt="ds"
            style={{ width: "100%", height: "70%", objectFit: "contain" }}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 ">
          <div className="w-3/4  flex flex-col justify-center gap-4">
            <h1 className="text-4xl font-medium">Secure. Scalable. Smart</h1>
            <p className="text-lg">
              We design and develop web-based solutions that empower businesses
              to grow with security and confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";

const headerVid = "/assets/videos/earth-hero-vid.mp4";

export const HomeHeroComp = () => {
  return (
    <div className="bg-black text-white h-screen">
      <div className="grid md:grid-cols-2 grid-cols-1 h-screen mx-30">
        <div className="flex justify-center items-center p-4">
          <video
            src={headerVid}
            autoPlay
            // loop
            // muted
            className="w-full h-full object-cover"
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

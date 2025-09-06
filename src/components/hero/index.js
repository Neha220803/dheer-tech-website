import React from "react";

export const HomeHeroComp = () => {
  return (
    <section className="bg-primary ">
      <div className="grid md:grid-cols-2 grid-cols-1 h-screen">
        <div className="flex justify-center items-center">Image/Video</div>
        <div className="flex flex-col justify-center gap-4">
          <div className="w-3/4 flex flex-col justify-center gap-4">
            <h1 className="text-4xl font-medium">Secure. Scalable. Smart</h1>
            <p className="text-lg">
              We design and develop web-based solutions that empower businesses
              to grow with security and confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

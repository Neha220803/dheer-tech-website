import React from "react";
import { Button } from "../ui/button";
import "./styles.css";
import { Card } from "../ui/card";

const buildIcon = "/assets/images/home/building.svg";
const supportIcon = "/assets/images/home/support-icon.svg";
const jobIcon = "/assets/images/home/job-icon.svg";
const secureIcon = "/assets/images/home/security-icon.svg";
const settingsIcon = "/assets/images/home/settings-icon.svg";

export const HomeHeroComp = () => {
  return (
    <section className="home-bg-section" id="home">
      <div className="max-w-5xl text-center md:my-10 mt-14 mb-6">
        <h1 className="md:text-5xl text-3xl font-semibold">
          Delivering Smart Web Solutions for Growing Businesses with Dheer Tech
          Inc
        </h1>
      </div>
      <div className="grid grid-cols-12 gap-4  w-full">
        {/* First column */}
        <div className="md:col-span-3 col-span-12 flex items-center justify-center ">
          <div className="left-grid-big-card h-full">
            <div className="z-1000">
              <div className="text-2xl font-medium">
                Innovation Meets Security
              </div>
              <p>We Create Smart Web Solutions That Scale with Your Business</p>
            </div>
            <div className="red-overlay"></div>
          </div>
        </div>

        {/* Second column - nested grid with 2 rows */}
        <div className="md:col-span-6 col-span-12 md:grid md:grid-rows-3 gap-4">
          <div className="md:row-span-1 hidden md:flex flex-col space-y-4 items-center justify-center text-center px-8">
            <p className="text-lg">
              We design and develop web-based solutions that empower businesses
              to grow with security and confidence.
            </p>
            <Button className="rounded-2xl px-8 py-6">Contact Us</Button>
          </div>
          <div className="row-span-2 ">
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="col-span-2 md:col-span-1 h-full flex flex-col space-y-4 ">
                <Card className="h-1/2 middle-col-cards">
                  <div className="header-card-img-cont flex-shrink-0">
                    <img src={buildIcon} alt="icon" className="h-full w-auto" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="text-lg font-medium">
                      From Startup to Empire
                    </div>

                    <p>Building the technology that builds your empire.</p>
                  </div>
                </Card>
                <Card className="h-1/2 middle-col-cards">
                  <div className="header-card-img-bottom-cont flex-shrink-0">
                    <img
                      src={supportIcon}
                      alt="icon"
                      className="h-full w-auto"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="text-lg font-medium">24/7 Support</div>

                    <p>Creating the support that creates your stability</p>
                  </div>
                </Card>
              </div>
              <div className="col-span-2 md:col-span-1">
                <Card className="h-full middle-col-cards-right">
                  <div className="flex flex-col gap-1">
                    <div className="text-2xl font-bold">
                      Your Business, Your Rules, Your Software
                    </div>
                    <p>
                      Creating the custom software that creates your advantage
                    </p>
                  </div>
                  <div className="flex justify-between gap-2">
                    <div className="middle-col-cards-right-icon">
                      <img
                        src={jobIcon}
                        alt="icon"
                        className="h-full w-auto "
                      />
                    </div>
                    <div className="middle-col-cards-right-icon">
                      <img
                        src={settingsIcon}
                        alt="icon"
                        className="h-full w-auto "
                      />
                    </div>
                    <div className="middle-col-cards-right-icon">
                      <img
                        src={secureIcon}
                        alt="icon"
                        className="h-full w-auto"
                      />
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Third column */}
        <div className="md:col-span-3 hidden md:flex items-center justify-center ">
          <div className="left-grid-big-right-card h-full">
            <div className="z-1000">
              <div className="text-2xl font-medium">
                Build Once, Scale Forever
              </div>
              <p>Future-proof solutions that grow with your ambitions</p>
            </div>
            <div className="red-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

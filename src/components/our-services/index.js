import React from "react";
import { Card, CardContent } from "../ui/card";
import { motion } from "framer-motion";
import "./styles.css";
import {
  titleVariants,
  leftCardVariants,
  rightCardVariants,
  bottomCardVariants,
} from "../animation/anim.js";

const aiTool = "/assets/images/services/ai-tool.svg";
const softDev = "/assets/images/services/soft-dev.svg";
const eCom = "/assets/images/services/e-com-icon.svg";
const cyberSec = "/assets/images/services/secure.svg";
const custWebApp = "/assets/images/services/cust-web-dev.svg";

export const OurServiceComp = () => {
  return (
    <section className="flex flex-col space-y-10">
      {/* Animated Title */}
      <motion.div
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <h1 className="text-7xl font-medium">Service We Provide</h1>
      </motion.div>

      <div className="space-y-4 max-w-4xl">
        {/* First Row - 2 columns */}
        <div className="grid grid-cols-2 gap-4">
          {/* Left Card */}
          <motion.div
            variants={leftCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <Card className="rounded-2xl">
              <CardContent>
                <img
                  src={custWebApp}
                  alt="icon"
                  className="service-icons rounded"
                />
                <h2 className="text-2xl">Custom Web Application</h2>
                <p>
                  We build custom web applications tailored to your business
                  needs.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Card */}
          <motion.div
            variants={rightCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <Card className="rounded-2xl">
              <CardContent>
                <img src={cyberSec} alt="icon" className="service-icons" />
                <h2 className="text-2xl">Cyber Security Protection</h2>
                <p>
                  We provide top-notch cyber security solutions to protect your
                  business from online threats.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Second Row - 3 columns */}
        <div className="grid grid-cols-3 gap-4">
          {/* Left Card */}
          <motion.div
            variants={leftCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <Card className="rounded-2xl">
              <CardContent>
                <img src={aiTool} alt="icon" className="service-icons" />
                <h2 className="text-2xl">AI & Automation Tools</h2>
                <p>
                  We leverage AI and automation to optimize business processes
                  and enhance productivity.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Center Card - comes from bottom */}
          <motion.div
            variants={bottomCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <Card className="rounded-2xl">
              <CardContent>
                <img src={softDev} alt="icon" className="service-icons" />
                <h2 className="text-2xl">Software Development</h2>
                <p>
                  We offer comprehensive software development services to bring
                  your ideas to life.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Card */}
          <motion.div
            variants={rightCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <Card className="rounded-2xl">
              <CardContent>
                <img src={eCom} alt="icon" className="service-icons" />
                <h2 className="text-2xl">E-Commerce Platform</h2>
                <p>
                  We create robust e-commerce platforms that drive sales and
                  enhance user experience.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import "./styles.css";

const aiTool = "/assets/images/services/ai-tool.svg";
const softDev = "/assets/images/services/soft-dev.svg";
const eCom = "/assets/images/services/e-com-icon.svg";
const cyberSec = "/assets/images/services/secure.svg";
const custWebApp = "/assets/images/services/cust-web-dev.svg";

const custWebApp2 = "/assets/images/services/cust-web-dev2.svg";

export const OurServiceComp = () => {
  return (
    <section className="flex flex-col space-y-8">
      <div>
        <h1 className="text-7xl font-medium">Service section</h1>
      </div>
      <div className="space-y-4 max-w-4xl">
        <div className="grid grid-cols-2 gap-4">
          <Card className=" rounded-2xl">
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
          <Card className=" rounded-2xl">
            <CardContent>
              <img src={cyberSec} alt="icon" className="service-icons" />
              <h2 className="text-2xl">Cyber Security Protection</h2>
              <p>
                We provide top-notch cyber security solutions to protect your
                business from online threats.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Card className=" rounded-2xl">
            <CardContent>
              <img src={aiTool} alt="icon" className="service-icons" />
              <h2 className="text-2xl">AI & Automation Tools</h2>
              <p>
                We leverage AI and automation to optimize business processes and
                enhance productivity.
              </p>
            </CardContent>
          </Card>
          <Card className=" rounded-2xl">
            <CardContent>
              <img src={softDev} alt="icon" className="service-icons" />
              <h2 className="text-2xl">Software Development</h2>
              <p>
                We offer comprehensive software development services to bring
                your ideas to life.
              </p>
            </CardContent>
          </Card>
          <Card className=" rounded-2xl">
            <CardContent>
              <img src={eCom} alt="icon" className="service-icons" />
              <h2 className="text-2xl">E-Commerce Platform</h2>
              <p>
                We create robust e-commerce platforms that drive sales and
                enhance user experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

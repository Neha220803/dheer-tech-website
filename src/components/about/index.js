"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

// Import your SVG icons
const AiIcon = "/assets/images/about/ai.svg";
const AnalyticsIcon = "/assets/images/about/analytics.svg";
const CloudIcon = "/assets/images/about/cloud.svg";
const CollabIcon = "/assets/images/about/collab.svg";
const PerfIcon = "/assets/images/about/perf.svg";
const RespIcon = "/assets/images/about/resp.svg";
const SecurityIcon = "/assets/images/about/security.svg";
const SeoIcon = "/assets/images/about/seo.svg";
const SupportIcon = "/assets/images/about/support.svg";
const WebDevIcon = "/assets/images/about/web-dev.svg";

const HomeAboutUsComp = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const contentSets = [
    [
      { content: "Innovation First" },
      { icon: AiIcon, alt: "AI Innovation" },
      {
        content: "Cutting-edge Solutions",
        icon: WebDevIcon,
        alt: "Web Development",
      },
      { content: "Future-Ready Tech" },
      { icon: CloudIcon, alt: "Cloud Solutions" },
    ],
    [
      { icon: SecurityIcon, alt: "Security" },
      { content: "Enterprise Security" },
      {
        content: "Data Protection",
        icon: AnalyticsIcon,
        alt: "Analytics",
      },
      { content: "Trusted Solutions" },
      { icon: SupportIcon, alt: "24/7 Support" },
    ],
    [
      {
        content: "Peak Performance",
        icon: PerfIcon,
        alt: "Performance",
      },
      { content: "Seamless Experience" },
      { icon: CollabIcon, alt: "Collaboration" },
      { content: "Team Collaboration" },
      { content: "SEO Optimized", icon: SeoIcon, alt: "SEO" },
      { icon: RespIcon, alt: "Responsive Design" },
    ],
  ];

  return (
    <div className="overflow-hidden bg-primary">
      {/* Hero Section */}
      <div className="text-center pt-18 pb-4 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl font-bold mb-8 text-primary-foreground"
        >
          We Promote Innovation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl text-gray-300 mb-4"
        >
          & Deliver Bulletproof Security
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-300 max-w-3xl mx-auto"
        >
          Your trusted partner in building scalable, secure, and innovative
          digital solutions that drive your business forward in the modern
          world.
        </motion.p>
      </div>

      {/* Scrolling Content */}
      <div ref={container}>
        {contentSets.map((contentSet, index) => (
          <Slide
            key={index}
            contentSet={contentSet}
            direction={index % 2 === 0 ? "left" : "right"}
            left={index === 0 ? "-20%" : index === 1 ? "-40%" : "-60%"}
            progress={scrollYProgress}
            speed={1 + index * 0.3}
          />
        ))}
      </div>

      {/* Closing Section */}
      <div className="text-center py-8 px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-primary-foreground mb-6"
        >
          Ready to Build Something Amazing?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl text-gray-300"
        >
          Let's turn your vision into reality with our expertise and innovation.
        </motion.p>
      </div>
    </div>
  );
};

const Slide = ({ contentSet, direction, left, progress, speed = 1 }) => {
  const dir = direction === "left" ? -1 : 1;
  const translateX = useTransform(
    progress,
    [0, 1],
    [150 * dir * speed, -150 * dir * speed]
  );

  return (
    <motion.div
      style={{ x: translateX, left: left }}
      className="relative flex whitespace-nowrap my-8"
    >
      <ContentRow contentSet={contentSet} />
      <ContentRow contentSet={contentSet} />
      <ContentRow contentSet={contentSet} />
    </motion.div>
  );
};

const ContentRow = ({ contentSet }) => (
  <div className="flex gap-8 items-center px-8">
    {contentSet.map((item, index) => (
      <ContentCard key={index} item={item} />
    ))}
  </div>
);

const ContentCard = ({ item }) => (
  <Card className="rounded-full h-full flex items-center justify-center">
    <CardContent className="">
      {item.content && !item.icon && (
        <p className="text-2xl font-semibold text-card-foreground text-center">
          {item.content}
        </p>
      )}

      {item.icon && !item.content && (
        <div className="w-12 h-12 relative">
          <Image
            src={item.icon}
            alt={item.alt}
            fill
            className="object-contain"
          />
        </div>
      )}

      {item.content && item.icon && (
        <div className="flex items-center gap-4 min-w-[240px]">
          <div className="w-10 h-10 relative flex-shrink-0">
            <Image
              src={item.icon}
              alt={item.alt}
              fill
              className="object-contain"
            />
          </div>
          <p className="text-xl font-semibold text-card-foreground">
            {item.content}
          </p>
        </div>
      )}
    </CardContent>
  </Card>
);

export default HomeAboutUsComp;

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import "./styles.css";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import HomeCTAComp from "../cta";

const testimonialData = [
  {
    name: "Taste of Chennai",
    institution: "Taste of Chennai - Restaurant",
    rating: 5,
    date: "April 18, 2023",
    description:
      "We reached out to DheerTech for our restaurant website designing and they did a great job. The design is beautiful and the final website was completed and launched on time. It's very user friendly, making it easy for our customers to order online. We are extremely happy with their customer service and their professional nature. I would definitely recommend DheerTech for anyone looking for a smooth experience.",
    image: null,
    id: "testimonial-card1",
  },
  {
    name: "Kailasnath Nagaraju",
    institution: "Ocean Ayush Care Clinic",
    rating: 5,
    date: "August 22, 2025",
    description:
      "We are delighted with the outstanding website designed by DheerTech Inc for our Ocean Ayush Care Clinic. Their team understood our vision perfectly and transformed it into a modern, user-friendly, and visually appealing website that truly represents the essence of our clinic.",
    image: null,
    id: "testimonial-card2",
  },
  {
    name: "Neeharika",
    institution: "Adhi Constructions",
    rating: 5,
    date: "June 27, 2025",
    description:
      "DheerTech Inc built us a beautiful construction website and made it super secure. No more bots flooding our inbox thanks to their cybersecurity setup. The team was very flexible, paid attention to every detail, and delivered exactly what we needed. Great work and highly recommend!",
    image: null,
    id: "testimonial-card3",
  },
  {
    name: "Ali Jahmi",
    institution: "Parent and zenda user",
    rating: 5,
    date: "May 17, 2025",
    description:
      "This application is awesome.. It facilitates school payments for my kids' tuition fees and they have good assistance service through Whatsapp. Thanks alot.",
    image: null,
    id: "testimonial-card4",
  },
  {
    name: "Sarah Johnson",
    institution: "Tech Startup Co",
    rating: 5,
    date: "July 15, 2025",
    description:
      "DheerTech delivered exceptional results for our tech startup. Their innovative approach and attention to detail helped us launch our platform successfully. The team was responsive and professional throughout the entire process.",
    image: null,
    id: "testimonial-card5",
  },
  {
    name: "Michael Chen",
    institution: "E-commerce Solutions",
    rating: 5,
    date: "September 3, 2025",
    description:
      "Outstanding work on our e-commerce platform! The user experience is seamless, and the backend is robust. DheerTech's expertise in modern web technologies really shows in the final product.",
    image: null,
    id: "testimonial-card6",
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <Card className="testimonial-card">
      <CardContent className="flex flex-col h-full p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="font-bold text-lg text-gray-900">
              {testimonial.name}
            </div>
            <div className="text-sm text-gray-600">
              {testimonial.institution}
            </div>
            <div className="flex items-center mt-1">
              <div className="text-yellow-500 mr-2">
                {"⭐".repeat(testimonial.rating)}
              </div>
              <div className="text-xs text-gray-500">{testimonial.date}</div>
            </div>
          </div>
          <Avatar className="testimonial-avatar-container">
            {testimonial.image ? (
              <AvatarImage
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-avatar"
              />
            ) : (
              <AvatarFallback className="testimonial-avatar bg-primary text-white">
                {testimonial.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            )}
          </Avatar>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed flex-1 overflow-y-auto">
          {testimonial.description}
        </p>
      </CardContent>
    </Card>
  );
};

const HorizontalScrollTestimonials = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate the transform based on the number of test
  // imonials
  // Adjust the end value based on your needs
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-85%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="w-full">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Hear what our Customers Say
            </h2>
            <p className="text-gray-600 text-lg">
              Real feedback from our valued clients
            </p>
          </div>
          <motion.div style={{ x }} className="flex gap-8 px-8">
            {testimonialData.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const HomeTestimonialComp = () => {
  return <HorizontalScrollTestimonials />;
};

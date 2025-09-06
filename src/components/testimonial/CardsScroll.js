import React, { useEffect, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import "./styles.css";
import { Card, CardContent } from "../ui/card";

const testimonialData = [
  {
    name: "Taste of Chennai",
    institution: "Taste of Chennai - Restaurant",
    rating: 5,
    date: "April 18, 2023",
    description:
      "We reached out to DheerTech for our restaurant website designing and they did a great job. The design is beautiful and the final website was completed and launched on time. It’s very user friendly, making it easy for our customers to order online. We are extremely happy with their customer service and their professional nature. I would definitely recommend DheerTech for anyone looking for a smooth experience.",
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
];

const CardsScrollComp = () => {
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating
            ? "fill-red-500 text-red-500"
            : "fill-gray-300 text-gray-300"
        }`}
      />
    ));
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  const getAvatarColor = (index) => {
    const colors = [
      "bg-red-700", // Purple for first
      "bg-blue-700", // Blue for second
      "bg-green-700", // Green for third
      "bg-orange-400", // Orange for fourth
      "bg-pink-300", // Pink for fifth
    ];
    return colors[index % colors.length];
  };

  return (
    <section
      ref={sectionRef}
      className="testimonial-section overflow-auto mx-30"
    >
      {/* Scrollable Row */}
      <div ref={scrollContainerRef} className="scrollable-container relative">
        {testimonialData.map((testimonial, index) => (
          <div key={index} className="testimonial-card-container">
            <Card className="testimonial-custom-card" id={testimonial.id}>
              {/* Left Content */}
              <CardContent className="testimonial-content">
                <div className="grid grid-cols-2">
                  <div className="space-y-4">
                    <div>
                      <h2 className="font-bold text-4xl ">
                        {testimonial.name}
                      </h2>
                      <p className="font-semibold text-md text-gray-400">
                        {testimonial.institution}
                      </p>
                    </div>

                    <div className="flex justify-between">
                      <span className="flex items-center gap-2">
                        {renderStars(testimonial.rating)}
                      </span>
                      <span className="text-sm font-normal text-gray-400">
                        {testimonial.date}
                      </span>
                    </div>

                    <p className="text-lg text-gray-600 ">
                      {testimonial.description}
                    </p>
                  </div>

                  {/* Right Avatar - Large Circle */}
                  <div className=" flex testimonial-avatar-container">
                    <Avatar className="testimonial-avatar">
                      <AvatarImage
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="object-cover"
                      />
                      <AvatarFallback
                        className={`${getAvatarColor(
                          index
                        )} text-white text-4xl font-bold`}
                      >
                        {getInitials(testimonial.name)}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
        <div className="absolute bottom-20 left-4 flex gap-2 z-1000">
          <div className="arrow-button-card">
            <ArrowLeft />
          </div>
          <div className="arrow-button-card">
            <ArrowRight />
          </div>
        </div>
      </div>
    </section>
  );
};
export default CardsScrollComp;

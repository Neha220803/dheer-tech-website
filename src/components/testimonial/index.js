import "./styles.css";
import CardsScrollComp from "./CardsScroll";

const HomeTestimonialComp = () => {
  return (
    <section className="testimonial-section ">
      {/* <div className="testimonial-header  items-center justify-between mb-8 px-10">
        <h2 className="text-3xl font-semibold">What Our Users Say</h2>
      </div> */}
      {/* Scrollable Row */}
      <CardsScrollComp />
    </section>
  );
};

export default HomeTestimonialComp;

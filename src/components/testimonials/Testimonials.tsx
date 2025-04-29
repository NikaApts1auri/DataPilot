import { testimonials } from "./testimonialsData";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const restartIndex = 5;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex > restartIndex ? 0 : nextIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex > restartIndex ? 0 : nextIndex;
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, [restartIndex]);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 md:px-32 lg:px-48">
      <div className="w-full text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
          What Our Customers Say
        </h2>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 gap-8 lg:gap-16"
            style={{
              transform: `translateX(-${
                (currentIndex % testimonials.length) * (100 / 3)
              }%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 flex-shrink-0 w-full sm:w-1/3 md:w-1/4"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full mb-4 w-24 h-24 object-cover border-4 border-blue-500 dark:border-blue-400"
                  />
                </div>
                <p className="italic mb-4 text-lg text-gray-600 dark:text-gray-300">
                  &quot;{testimonial.feedback}&quot;
                </p>
                <h4 className="font-semibold text-xl mb-1 text-gray-900 dark:text-white">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            ))}
          </div>

          <div
            className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 cursor-pointer"
            onClick={handlePrev}
          >
            <svg
              className="w-8 h-8 text-gray-900 dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
          <div
            className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 cursor-pointer"
            onClick={handleNext}
          >
            <svg
              className="w-8 h-8 text-gray-900 dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import { testimonials } from "./testimonialsData";

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 md:px-32 lg:px-48">
      <div className="w-full text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 cursor-pointer md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center 
                        transition-transform duration-300 hover:scale-105
                        border border-gray-200 dark:border-gray-700"
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
      </div>
    </section>
  );
};

export default Testimonials;

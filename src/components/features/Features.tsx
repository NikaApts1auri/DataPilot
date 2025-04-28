import { features } from "./featuresData";

const Features = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 md:px-32 lg:px-48">
      <div className="w-full text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white cursor-pointer dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300
                       hover:scale-105 hover:shadow-lg border border-gray-200 dark:border-gray-700
                       flex flex-col items-center justify-center"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

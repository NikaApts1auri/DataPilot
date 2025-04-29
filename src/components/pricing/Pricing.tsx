import { useState } from "react";
import { plans } from "./plansData";

const Pricing = () => {
  const [displayMonthly, setDisplayMonthly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleTogglePricing = (isMonthly: boolean) => {
    setDisplayMonthly(isMonthly);
  };

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 md:px-32 lg:px-48">
      <div className="w-full">
        <div className="text-center  mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Pricing Plans
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Find the perfect plan for your business growth
          </p>
          <div className="mt-6 gap-[1rem] inline-flex rounded-md shadow">
            <button
              onClick={() => handleTogglePricing(true)}
              className={`inline-flex items-center cursor-pointer justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md ${
                displayMonthly
                  ? "text-white bg-orange-500 hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700"
                  : "text-gray-700 bg-gray-100 hover:bg-gray-200 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => handleTogglePricing(false)}
              className={`inline-flex cursor-pointer items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md ${
                !displayMonthly
                  ? "text-white bg-orange-500 hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700"
                  : "text-gray-700 bg-gray-100 hover:bg-gray-200 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 cursor-pointer md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const price = displayMonthly
              ? plan.price.monthly
              : plan.price.yearly;
            const isSelected = selectedPlan === plan.name;

            return (
              <div
                key={index}
                className={`
                  bg-white rounded-xl shadow-lg
                  ${
                    isSelected
                      ? "border-2 border-orange-500 shadow-xl hover:shadow-2xl transition-shadow duration-300 transform scale-105 dark:border-orange-400 dark:shadow-orange-500/50"
                      : "hover:shadow-xl transition-shadow duration-300 hover:scale-[1.02] dark:border dark:border-gray-700 dark:hover:border-orange-500"
                  }
                  flex flex-col p-6 sm:p-8
                  dark:bg-gray-800 dark:shadow-lg dark:shadow-gray-900
                `}
                onClick={() => handlePlanSelect(plan.name)}
              >
                <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
                  {plan.name}
                </h3>
                <p className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
                  {price}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-gray-600 dark:text-gray-300 flex items-center"
                    >
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className="mt-auto py-3 px-6 cursor-pointer rounded-md font-semibold
                             bg-orange-500 text-white hover:bg-orange-600 transition-colors dark:bg-orange-600 dark:hover:bg-orange-700"
                >
                  {isSelected ? "Select Plan" : "Contact Us for Pricing"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

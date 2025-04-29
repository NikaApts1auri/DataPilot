import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

const FaqAccordion = ({ items }: FaqAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-gray-300 dark:border-gray-700 rounded"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center px-4 py-3 text-gray-800 dark:text-gray-200 font-medium focus:outline-none"
          >
            {item.question}
            <span>{openIndex === index ? "-" : "+"}</span>
          </button>
          {openIndex === index && (
            <div className="px-4 py-3 text-gray-600 dark:text-gray-400">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;

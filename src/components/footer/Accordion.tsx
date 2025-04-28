import React from "react";
import { useState } from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="space-y-2">
      <button
        onClick={toggleAccordion}
        className="w-full text-left text-lg text-blue-400"
      >
        {title}
      </button>
      {isOpen && <div className="mt-2 text-gray-300">{children}</div>}
    </div>
  );
};

export default Accordion;

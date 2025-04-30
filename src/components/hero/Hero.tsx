import { Rocket } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import useScrollToBottom from "../../hooks/useScrollToBottom";


const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Rocket className="mx-auto h-12 w-12 text-blue-500 mb-6" />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight">
          Supercharge Your Data Workflow
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          DataPilot is the ultimate platform for streamlining your data
          analysis, visualization, and collaboration. Unlock powerful insights
          and accelerate your productivity.
        </p>
        <Button
          className={cn(
            "bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-8 py-3 rounded-full",
            "transition-colors duration-300 shadow-lg"
          )}
          onClick={useScrollToBottom()}
        >
          Get Started - Demo
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;

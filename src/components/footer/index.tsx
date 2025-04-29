import { FaFacebook, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import FaqAccordion from "./FaqAccordion";
import { faqItems } from "./faqItems";

const Footer = () => {
  return (
    <footer className="  bg-gray-100  dark:bg-gray-800 py-10">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
              DataPilot
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Empowering innovation and creativity.
            </p>
          </div>


          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            <a
              href="#features"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#about"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

   
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Frequently Asked Questions
          </h3>
          <FaqAccordion items={faqItems} />
        </div>

       
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-center">
            Subscribe to our Newsletter
          </h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing!");
            }}
            className="mt-4 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="p-2 w-full sm:w-auto border text-gray-800 dark:text-white border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="p-2 bg-blue-500 text-white cursor-pointer rounded-md hover:bg-blue-600 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

        
        <div className="mt-10 flex justify-center space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300  hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300  hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            <FaInstagram size={24} />
          </a>
        </div>

       
        <div className="mt-10 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} DataPilot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
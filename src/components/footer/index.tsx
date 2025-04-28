import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Accordion from "./Accordion";

const Footer = () => {
  return (
    <div className="flex flex-col justify-between">
      <footer className="mt-auto w-full bg-gray-700 py-10 text-white">
        <div className="container mx-auto grid grid-cols-1 gap-10 px-8 sm:px-10 md:grid-cols-2  lg:grid-cols-4 md:px-[8rem] lg:px-[12rem]">
          <div className="flex flex-col gap-[2rem] text-[1.2rem] text-white">
            <Link to={"/about"} className="text-xl font-semibold">
              About Us
            </Link>
            <p>
              We are a platform offering a variety of services and products. Our
              mission is to provide high-quality solutions at affordable prices.
            </p>
          </div>

          <div className="space-y-4 text-[1.2rem] text-white">
            <Link to={"/contact"} className="text-xl font-semibold">
              Contact
            </Link>
            <ul className="flex flex-col gap-[1rem]">
              <li>
                Email:{" "}
                <a href="mailto:DataPilot@gmail.com" className="text-blue-400">
                  mailto:DataPilot@gmail.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+995 577 77 77 77" className="text-blue-400">
                  +995 577 77 77 77
                </a>
              </li>
              <li>Address: Georgia, Tbilisi, Rustaveli Avenue 10</li>
            </ul>
          </div>

          <div className="space-y-4 text-[1.2rem] text-white">
            <h3 className="text-xl font-semibold">FAQ</h3>

            <Accordion title="Data Storage and Retrieval">
              User orders, usage, and accounts are securely stored in our
              database.
            </Accordion>

            <Accordion title="Buying and Using Services">
              Users can purchase various packages (Basic, Premium, and others)
              and use the corresponding services.
            </Accordion>

            <Accordion title="Dashboard (Personal Space)">
              After logging in, users can view their personal data, account,
              usage statistics, and payment history.
            </Accordion>

            <Accordion title="Communication with Services">
              Users can utilize DataPilot's AI systems, send requests, and
              receive results in real-time.
            </Accordion>
          </div>

          <div className="flex flex-col gap-[3rem] text-white">
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <FaFacebook size={30} />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-700"
                >
                  <FaInstagram size={30} />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <FaTwitter size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 bg-gray-900 py-4 text-white">
          <div className="container mx-auto text-center text-sm">
            <p>&copy; 2025. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

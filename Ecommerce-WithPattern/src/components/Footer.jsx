import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white pt-16 pb-8 px-8 md:px-20">
      
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-700 pb-12">
        
        {/* Brand */}
        <div>
          <h1 className="text-4xl font-bold text-pink-500 mb-5">
            Myntra
          </h1>

          <p className="text-gray-400 leading-7">
            Discover the latest fashion trends with premium
            quality and modern style. Shop smarter with
            Myntra-inspired collections.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6">
            
            <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center hover:scale-110 transition duration-300 cursor-pointer">
              <FaFacebookF />
            </div>

            <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center hover:scale-110 transition duration-300 cursor-pointer">
              <FaInstagram />
            </div>

            <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center hover:scale-110 transition duration-300 cursor-pointer">
              <FaTwitter />
            </div>

            <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center hover:scale-110 transition duration-300 cursor-pointer">
              <FaYoutube />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-pink-500">
            Quick Links
          </h2>

          <ul className="space-y-4 text-gray-400">
            <li className="hover:text-pink-500 cursor-pointer transition duration-300">
              Home
            </li>

            <li className="hover:text-pink-500 cursor-pointer transition duration-300">
              About
            </li>

            <li className="hover:text-pink-500 cursor-pointer transition duration-300">
              Products
            </li>

            <li className="hover:text-pink-500 cursor-pointer transition duration-300">
              Contact
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-pink-500">
            Support
          </h2>

          <ul className="space-y-4 text-gray-400">
            <li className="hover:text-pink-500 cursor-pointer transition duration-300">
              Help Center
            </li>

            <li className="hover:text-pink-500 cursor-pointer transition duration-300">
              Privacy Policy
            </li>

            <li className="hover:text-pink-500 cursor-pointer transition duration-300">
              Terms & Conditions
            </li>

            <li className="hover:text-pink-500 cursor-pointer transition duration-300">
              Return Policy
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-pink-500">
            Contact
          </h2>

          <div className="space-y-5 text-gray-400">
            
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-pink-500 mt-1" />
              <p>Kolkata, West Bengal, India</p>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-pink-500" />
              <p>+91 9876543210</p>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-pink-500" />
              <p>support@myntra.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-5">
        
        <p className="text-gray-500 text-center">
          © 2026 Myntra. All Rights Reserved.
        </p>

        <div className="flex items-center gap-6 text-gray-400">
          <span className="hover:text-pink-500 cursor-pointer transition duration-300">
            Privacy
          </span>

          <span className="hover:text-pink-500 cursor-pointer transition duration-300">
            Security
          </span>

          <span className="hover:text-pink-500 cursor-pointer transition duration-300">
            Sitemap
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
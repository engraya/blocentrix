import { Link } from 'react-router-dom';
import { blocentrixLogo2 } from '../../assets';
import { FaXTwitter, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa6';
import { StayUpdated } from './StayUpdated';
import { WhyBlocentrix } from './WhyBlocentrix';
import { OurProducts } from './OurProducts';
import { WhatWeDo } from './WhatWeDo';

export const Footer = () => {
  return (
    <>
      <WhatWeDo />
      <OurProducts />
      <WhyBlocentrix />
      <StayUpdated />
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Logo and Social Section */}
            <div className="text-center lg:text-left">
              <div className="w-40 mx-auto lg:mx-0 mb-4">
                <img src={blocentrixLogo2} alt="BlocEntrix" className="w-full h-full object-contain" />
              </div>
              <p className="text-gray-300 mb-6 text-sm lg:text-base">
              Building the infrastructure for a tokenized
              future, one block at a time.
              </p>
              {/* Social Icons */}
              <div className="flex justify-center lg:justify-start space-x-4">
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full inline-flex justify-center items-center hover:bg-gray-600 transition-colors duration-200">
                  <FaXTwitter className="text-white text-lg" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full inline-flex justify-center items-center hover:bg-gray-600 transition-colors duration-200">
                  <FaLinkedin className="text-white text-lg" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full inline-flex justify-center items-center hover:bg-gray-600 transition-colors duration-200">
                  <FaGithub className="text-white text-lg" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full inline-flex justify-center items-center hover:bg-gray-600 transition-colors duration-200">
                  <FaDiscord className="text-white text-lg" />
                </a>
              </div>
            </div>

            {/* Company, Products, Resources - Flex Layout */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center lg:text-left">
                  <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm lg:text-base">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/careers" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm lg:text-base">
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm lg:text-base">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link to="/press" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm lg:text-base">
                        Press
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm lg:text-base">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-lg font-semibold mb-6 text-white">Products</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/products/blocpay" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm lg:text-base">
                        BlocPay
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/blocsight" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm lg:text-base">
                        BlocSight
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/blocmint" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm lg:text-base">
                        BlocMint
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/blocestate" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm lg:text-base">
                        BlocEstate
                      </Link>
                    </li>
                    <li>
                      <Link to="/api-docs" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm lg:text-base">
                        API Documentation
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="text-center lg:text-left col-span-2 lg:col-span-1">
                  <h3 className="text-lg font-semibold mb-6 text-white">Resources</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/resources/documentation" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm lg:text-base">
                        Documentation
                      </Link>
                    </li>
                    <li>
                      <Link to="/resources/whitepaper" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm lg:text-base">
                        Whitepaper
                      </Link>
                    </li>
                    <li>
                      <Link to="/resources/case-studies" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm lg:text-base">
                        Case Studies
                      </Link>
                    </li>
                    <li>
                      <Link to="/resources/faq" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm lg:text-base">
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link to="/support" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm lg:text-base">
                        Support
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full pt-8 mt-16 border-t border-gray-700">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
                <div className="text-center lg:text-left">
                  <div className="text-gray-300 text-sm font-normal leading-tight">© 2025 Blocentrix. All rights reserved.</div>
                </div>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 lg:gap-6">
                  <Link to="/privacy" className="text-gray-300 text-sm font-normal leading-tight hover:text-white transition-colors duration-200">
                    Privacy Policy
                  </Link>
                  <Link to="/terms" className="text-gray-300 text-sm font-normal leading-tight hover:text-white transition-colors duration-200">
                    Terms of Service
                  </Link>
                  <Link to="/cookies" className="text-gray-300 text-sm font-normal leading-tight hover:text-white transition-colors duration-200">
                    Cookie Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer; 
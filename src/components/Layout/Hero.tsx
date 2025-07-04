import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className="relative w-full min-h-[466px] bg-gradient-to-r from-[#a7a3a8] via-[#d8b7e1] to-[#704597]">
      <div className="absolute inset-0 w-full h-full opacity-90 mix-blend-overlay">
        <div className="w-full h-full bg-gradient-to-r from-white via-white to-transparent" />
      </div>
      
      <div className="relative py-24 w-full flex justify-center">
        <div className="w-full max-w-[1536px] px-6 flex flex-col justify-start items-start">
          <div className="w-full max-w-[672px] flex flex-col justify-start items-start gap-8">
            {/* Headline */}
            <div className="self-stretch">
              <h1 className="text-gray-900 text-5xl font-bold leading-[56px]">
                Unlocking the Real-World<br/>Potential of Blockchain
              </h1>
            </div>

            {/* Subheadline */}
            <div className="self-stretch">
              <p className="text-gray-600 text-xl font-normal leading-7">
                From payments to property and minerals — Blocentrix builds the<br/>infrastructure powering a tokenized economy.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="self-stretch pt-4 flex justify-start items-start gap-4 flex-wrap">
              {/* Primary Button */}
              <Link 
                to="/products" 
                className="px-6 py-3 bg-purple-600 rounded-lg inline-flex justify-center items-center hover:bg-purple-700 transition-colors duration-200"
              >
                <span className="text-center text-white text-base font-medium leading-normal">
                  Explore Our Products
                </span>
              </Link>

              {/* Secondary Button */}
              <Link 
                to="/contact" 
                className="px-6 py-3 rounded-lg outline outline-1 outline-purple-600 inline-flex justify-center items-center hover:bg-purple-50 transition-colors duration-200"
              >
                <span className="text-center text-purple-600 text-base font-medium leading-normal">
                  Get in Touch
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 
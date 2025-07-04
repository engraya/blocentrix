import { Link } from 'react-router-dom';
import { ourTeam } from '../../assets';

export const WhatWeDo = () => {
  return (
    <div className="self-stretch py-20 bg-white flex flex-col justify-start items-center">
      <div className="w-full max-w-[1536px] px-6 flex flex-col justify-start items-start gap-16">
        {/* Title Section */}
        <div className="self-stretch flex flex-col justify-start items-center gap-4">
          <div className="self-stretch flex flex-col justify-start items-center">
            <h2 className="self-stretch text-center text-gray-900 text-2xl md:text-3xl font-bold leading-9">
              What We Do
            </h2>
          </div>
          <div className="w-20 h-1 bg-purple-600" />
        </div>

        {/* Content Section */}
        <div className="self-stretch flex flex-col lg:flex-row justify-start items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="flex-1 flex flex-col justify-start items-center lg:items-start gap-4 order-1">
            <div className="self-stretch text-center lg:text-left">
              <h3 className="text-gray-900 text-xl md:text-2xl font-semibold leading-loose">
                Blocentrix is a blockchain product studio and infrastructure<br className="hidden md:block"/>company
              </h3>
            </div>
            <div className="self-stretch text-center lg:text-left">
              <p className="text-gray-600 text-base font-normal leading-normal">
                We design and build real-world blockchain platforms for commerce, analytics, and ownership<br className="hidden md:block"/>— putting crypto to work for everyone.
              </p>
            </div>
            <div className="self-stretch pt-2 pb-4 text-center lg:text-left">
              <p className="text-gray-600 text-base font-normal leading-normal">
                Our team combines deep technical expertise with industry knowledge to create solutions that<br className="hidden md:block"/>bridge the gap between traditional systems and blockchain technology.
              </p>
            </div>
            <Link to="/about" className="px-6 py-3 bg-purple-600 rounded-lg inline-flex justify-center items-center hover:bg-purple-700 transition-colors duration-200">
              <span className="text-center text-white text-base font-medium leading-normal">
                Learn More About Us
              </span>
            </Link>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex flex-col justify-start items-start order-2 lg:order-2">
            <img 
              className="w-full h-[300px] md:h-[400px] lg:h-[606.31px] max-w-[720px] rounded-2xl shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] object-cover" 
              src={ourTeam} 
              alt="Blocentrix workspace"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo; 
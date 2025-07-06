import { Link } from 'react-router-dom';
import { heroImage } from '../../assets';

export const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-[1296px] px-6 inline-flex flex-col justify-start items-start gap-6">
        <div className="self-stretch flex flex-col justify-start items-start">
          <div className="justify-center">
            <span className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-[102.58px]">
              Unlocking the Real-World<br/>Potential of {" "}
            </span>
            <span className="text-pink-400 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-[102.58px]">
              Blockchain
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-4 sm:gap-6">
          <div className="flex flex-col justify-start items-start gap-6 sm:gap-8">
            <div className="w-full max-w-[659px] flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-gray-200 text-lg sm:text-xl md:text-2xl font-medium leading-relaxed sm:leading-relaxed md:leading-loose">
                From payments to property and minerals — Blocentrix builds the infrastructure powering a tokenized economy.
              </div>
            </div>
          </div>
          <div className="inline-flex justify-start items-center gap-3 sm:gap-4 flex-wrap content-center">
            <Link to="/contact">
              <div data-:hover="false" data-variant="1" className="w-full sm:w-40 px-6 sm:px-8 py-3 bg-white rounded-[300px] shadow-[0px_4px_8px_0px_rgba(77,145,225,0.10)] outline outline-1 outline-offset-[-1px] outline-white flex justify-center items-center hover:bg-gray-50 hover:shadow-[0px_6px_12px_0px_rgba(77,145,225,0.15)] transition-all duration-200">
                <div className="flex-1 inline-flex flex-col justify-start items-center">
                  <div className="text-center justify-center text-color-green-7 text-sm sm:text-base font-semibold leading-tight">
                    Get in Touch
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/products">
              <div data-:hover="false" data-variant="3" className="w-full sm:w-auto max-w-[1248px] px-6 sm:px-8 py-3 rounded-[300px] shadow-[0px_1px_4px_0px_rgba(25,33,61,0.10)] outline outline-1 outline-offset-[-1px] outline-white flex justify-center items-center hover:bg-white/10 transition-all duration-200">
                <div className="inline-flex flex-col justify-start items-center">
                  <div className="text-center justify-center text-white text-sm sm:text-base font-medium leading-tight">
                    Explore Our Products
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Hero Image - Full Width */}
      <div className="w-full mt-6 sm:mt-8">
        <img 
          src={heroImage} 
          alt="Blocentrix Hero" 
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Hero; 
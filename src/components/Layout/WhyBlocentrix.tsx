import { whyBlocentrix } from '../../assets';
import { mobile } from '../../assets';

export const WhyBlocentrix = () => {
  return (
    <div id="why-us" className="self-stretch py-12 sm:py-16 md:py-20 bg-white flex flex-col justify-start items-center">
      <div className="w-full max-w-[1536px] px-6 flex flex-col justify-start items-start gap-8 sm:gap-12 md:gap-16">
        <div className="w-full max-w-[1296px] px-6 inline-flex flex-col justify-start items-start gap-6 sm:gap-8">
          <div className="w-full max-w-[680px] flex flex-col justify-start items-start gap-4">
            <div className="self-stretch pb-px flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-green-7 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-[66.90px]">
                Why Blocentrix?
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-grey-26 text-base sm:text-lg font-normal leading-relaxed">
                Experience the future of blockchain technology with our comprehensive suite of solutions designed for your success.
              </div>
            </div>
          </div>
          
          <div data-property-1="Bult for scale" className="w-full lg:h-[580px] flex flex-col justify-center items-start">
            <div className="w-full h-full lg:h-full rounded-[16px] sm:rounded-[24px] md:rounded-[32px] overflow-hidden">
              {/* Mobile Image */}
              <img 
                className="w-full h-auto lg:hidden" 
                src={mobile} 
                alt="Why Blocentrix Mobile" 
              />
              {/* Desktop Image */}
              <img 
                className="w-full h-full object-cover hidden lg:block" 
                src={whyBlocentrix} 
                alt="Why Blocentrix" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyBlocentrix; 
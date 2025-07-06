import { studio } from '../../assets';

export const Studio = () => {
  return (
    <div id="home" className="self-stretch py-12 sm:py-16 md:py-20 bg-gray-50 flex flex-col justify-start items-center">
      <div className="w-full max-w-[1536px] px-6 flex flex-col justify-start items-start gap-8 sm:gap-12 md:gap-16">
        <div className="self-stretch min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:h-[681.67px] pl-6 sm:pl-12 md:pl-16 lg:pl-24 pr-6 sm:pr-12 md:pr-16 lg:pr-0 pt-8 sm:pt-12 md:pt-16 lg:pt-0 pb-8 sm:pb-12 md:pb-16 lg:pb-0 relative rounded-[16px] sm:rounded-[24px] md:rounded-[32px] inline-flex flex-col justify-center items-start gap-6 sm:gap-8 md:gap-[0px] overflow-hidden" style={{background: 'var(--Gradient-2-Light, linear-gradient(138deg, var(--color-Purple-50, #EEECFB) 29.57%, var(--color-Purple-200, #B2A8ED) 93.72%))'}}>
          {/* Desktop Image - Absolute Positioned */}
          <div className="hidden lg:block w-[668.16px] left-[628px] top-[56.10px] absolute rounded-tl-[31.65px] rounded-tr-xl rounded-bl-[31.65px] rounded-br-xl flex-col justify-center items-end overflow-hidden">
            <img className="w-[614.50px] h-[626.69px] max-w-[614.50px] p-2.5" src={studio} alt="Studio" />
          </div>
          
          <div className="w-full lg:w-[594px] flex flex-col justify-start items-start gap-4 sm:gap-6">
            <div className="self-stretch pb-[0.77px] flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-green-7 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight sm:leading-tight md:leading-tight lg:leading-[60px]">
                Blocentrix is a blockchain product studio and infrastructure company.
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-grey-26 text-base sm:text-lg font-normal leading-relaxed">
                We design and build real-world blockchain platforms for commerce, analytics, and ownership — putting crypto to work for everyone.
              </div>
            </div>
            
            {/* Learn More Button - Mobile Only */}
            <div className="lg:hidden w-full pt-4">
              <div data-:hover="false" data-variant="2" className="w-full px-8 py-3 bg-white/0 rounded-[300px] shadow-[0px_1px_4px_0px_rgba(25,33,61,0.10)] outline outline-offset-[-1px] outline-zinc-400 inline-flex justify-center items-center">
                <div className="inline-flex flex-col justify-start items-center">
                  <div className="text-center justify-center text-color-green-7 text-base font-medium leading-tight">Learn more</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile/Tablet Image - Bottom Position */}
          <div className="lg:hidden w-full flex justify-center items-center pt-6 sm:pt-8 mt-auto">
            <div className="w-full max-w-[400px] sm:max-w-[500px] rounded-tl-[20px] sm:rounded-tl-[25px] rounded-tr-xl rounded-bl-[20px] sm:rounded-bl-[25px] rounded-br-xl flex flex-col justify-center items-center overflow-hidden">
              <img className="w-full h-auto max-w-full p-2 sm:p-3" src={studio} alt="Studio" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studio; 
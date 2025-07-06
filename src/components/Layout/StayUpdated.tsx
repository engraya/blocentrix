export const StayUpdated = () => {
  return (
    <div className="self-stretch py-12 sm:py-16 inline-flex flex-col justify-start items-center rounded-t-3xl" style={{background: 'var(--Footer-gradient, linear-gradient(132deg, var(--color-Purple-700, #3E2E99) -13.32%, var(--color-Purple-900, #251B5B) 50.3%))'}}>
      <div className="w-full max-w-[1296px] px-6 flex flex-col justify-start items-start">
        <div className="self-stretch min-h-[200px] sm:min-h-[250px] md:h-32 relative">
          {/* Mobile/Tablet Layout - Stacked */}
          <div className="lg:hidden flex flex-col justify-start items-center gap-6 sm:gap-8 w-full">
            <div className="w-full flex flex-col justify-start items-center">
              <div className="self-stretch justify-center text-center">
                <span className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight sm:leading-tight md:leading-tight lg:leading-[66.90px]">
                  Let's Build the Future<br className="lg:hidden" />{" "}
                </span>
                <span className="text-purple-200 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight sm:leading-tight md:leading-tight lg:leading-[66.90px]">
                  Together
                </span>
              </div>
            </div>
            <div className="w-full flex flex-col justify-start items-center gap-6">
              <div className="self-stretch flex flex-col justify-start items-center">
                <div className="self-stretch justify-center text-center text-gray-100 text-base sm:text-lg font-normal leading-relaxed">
                  Have a blockchain vision for your industry?<br className="lg:hidden" /> Partner with us, integrate our products,<br className="lg:hidden" /> or invest in the future.
                </div>
              </div>
              <div className="self-stretch inline-flex justify-center items-center">
                <button 
                  className="w-full px-8 py-3 bg-white rounded-[300px] shadow-[0px_4px_8px_0px_rgba(77,145,225,0.10)] outline outline-1 outline-offset-[-1px] outline-white flex justify-center items-center hover:bg-gray-50 hover:shadow-[0px_6px_12px_0px_rgba(77,145,225,0.15)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 focus:ring-offset-[#0B1938]"
                  onClick={() => window.location.href = '/contact'}
                >
                  <span className="text-center text-color-green-7 text-base font-semibold leading-tight">Contact us</span>
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Side by Side */}
          <div className="hidden lg:block w-full h-full relative">
            <div className="w-[484px] pb-[0.83px] left-0 top-[-1.06px] absolute inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center">
                <span className="text-white text-6xl font-normal leading-[66.90px]">Let's Build the Future </span>
                <span className="text-purple-200 text-6xl font-normal leading-[66.90px]">Together</span>
              </div>
            </div>
            <div className="w-[510px] max-w-[510px] left-[738px] top-[4.89px] absolute inline-flex flex-col justify-start items-start gap-6">
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-gray-100 text-lg font-normal leading-relaxed">Have a blockchain vision for your industry? Partner with us, integrate our products, or invest in the future.</div>
              </div>
              <div className="self-stretch inline-flex justify-start items-center gap-4">
                <button 
                  className="px-8 py-3 bg-white rounded-[300px] shadow-[0px_4px_8px_0px_rgba(77,145,225,0.10)] outline outline-1 outline-offset-[-1px] outline-white flex justify-center items-center hover:bg-gray-50 hover:shadow-[0px_6px_12px_0px_rgba(77,145,225,0.15)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 focus:ring-offset-[#0B1938]"
                  onClick={() => window.location.href = '/contact'}
                >
                  <span className="text-center text-color-green-7 text-base font-semibold leading-tight">Contact us</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayUpdated; 
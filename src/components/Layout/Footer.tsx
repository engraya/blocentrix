import FooterIcon from './FooterIcon';
import { StayUpdated } from './StayUpdated';

export const Footer = () => {
  return (
    <>
      <StayUpdated />
      <footer className="self-stretch py-8 sm:py-12 md:py-16 bg-purple-100 rounded-tl-[16px] sm:rounded-tl-[24px] md:rounded-tl-[32px] rounded-tr-[16px] sm:rounded-tr-[24px] md:rounded-tr-[32px] inline-flex flex-col justify-start items-center">
        <div className="w-full max-w-[1296px] px-4 sm:px-6 flex flex-col justify-start items-start">
          <div className="self-stretch flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-0">
            {/* Left Column */}
            <div className="w-full lg:w-96 max-w-full lg:max-w-96 inline-flex flex-col justify-start items-start gap-3">
              <FooterIcon />
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-color-grey-26 text-base sm:text-lg font-normal leading-relaxed">
                  Subscribe to our newsletter for the <span className="sm:hidden"><br /></span><span className="hidden sm:inline"> </span>latest updates, industry insights, and <span className="sm:hidden"><br /></span><span className="hidden sm:inline"> </span>exclusive offers.
                </div>
              </div>
              <div className="self-stretch pt-3 flex flex-col justify-start items-start gap-3">
                <form className="self-stretch flex flex-col md:flex-row gap-0 md:h-16 px-4 py-3 md:py-5 bg-white rounded-[300px] shadow-[0px_1px_3px_0px_rgba(25,33,61,0.10)] border border-gray-200 md:flex md:items-center overflow-hidden">
                  <input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="flex-1 bg-transparent border-none outline-none text-gray-700 text-base sm:text-lg font-normal placeholder-gray-400 focus:outline-none py-3 md:py-0"
                    required
                  />
                </form>
                <button 
                  type="submit"
                  className="w-full md:hidden px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-700 rounded-[300px] shadow-[0px_4px_8px_0px_rgba(77,145,225,0.10)] text-white text-sm sm:text-base font-semibold leading-tight transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Contact Us
                </button>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="w-full lg:w-80 max-w-full lg:max-w-80 inline-flex flex-col justify-start items-start gap-4">
              <div className="self-stretch inline-flex justify-center lg:justify-center items-center gap-4">
                <a href="#" className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path d="M11.3672 19.522V11.2993H14.2773L14.707 8.11572H11.3672V6.06494C11.3672 5.59619 11.4714 5.21859 11.6797 4.93213C11.888 4.64567 12.3438 4.50244 13.0469 4.50244H14.8242V1.65088C14.668 1.62484 14.349 1.59554 13.8672 1.56299C13.3854 1.53044 12.8385 1.51416 12.2266 1.51416C11.5885 1.51416 11.0026 1.60531 10.4688 1.7876C9.9349 1.96989 9.47917 2.24007 9.10156 2.59814C8.72396 2.95622 8.43099 3.40218 8.22266 3.93604C8.01432 4.45687 7.91016 5.06234 7.91016 5.75244V8.11572H5V11.2993H7.91016V19.522H11.3672Z" fill="#0E1810"/>
                  </svg>
                </a>
                <a href="#" className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path d="M7.53906 11.2017L0.898438 19.0142H3.78906L8.90625 12.979L13.5156 19.0142H19.4531L12.0508 9.30713L18.2422 2.02197H15.3516L10.6836 7.51025L6.48438 2.02197H0.546875L7.53906 11.2017ZM14.375 17.2759L4.08203 3.76025H5.625L15.918 17.2759H14.375Z" fill="#0E1810"/>
                  </svg>
                </a>
                <a href="#" className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path d="M10 13.604C10.8464 13.604 11.5723 13.3013 12.1777 12.6958C12.7832 12.0903 13.0859 11.3644 13.0859 10.5181C13.0859 9.67171 12.7832 8.9458 12.1777 8.34033C11.5723 7.73486 10.8464 7.43213 10 7.43213C9.15365 7.43213 8.42773 7.73486 7.82227 8.34033C7.2168 8.9458 6.91406 9.67171 6.91406 10.5181C6.91406 11.3644 7.2168 12.0903 7.82227 12.6958C8.42773 13.3013 9.15365 13.604 10 13.604ZM1.85547 3.83838C1.42578 4.4764 1.17513 5.29997 1.10352 6.30908C1.0319 7.3182 0.996094 8.72119 0.996094 10.5181C0.996094 12.3149 1.0319 13.7179 1.10352 14.7271C1.17513 15.7362 1.42578 16.5597 1.85547 17.1978C2.05078 17.4972 2.26888 17.7674 2.50977 18.0083C2.75065 18.2492 3.02083 18.4673 3.32031 18.6626C3.95833 19.0923 4.7819 19.3429 5.79102 19.4146C6.80013 19.4862 8.20312 19.522 10 19.522C11.7969 19.522 13.1999 19.4862 14.209 19.4146C15.2181 19.3429 16.0417 19.0923 16.6797 18.6626C16.9792 18.4673 17.2493 18.2492 17.4902 18.0083C17.7311 17.7674 17.9492 17.4972 18.1445 17.1978C18.5742 16.5597 18.8249 15.7362 18.8965 14.7271C18.9681 13.7179 19.0039 12.3149 19.0039 10.5181C19.0039 8.72119 18.9681 7.3182 18.8965 6.30908C18.8249 5.29997 18.5742 4.4764 18.1445 3.83838C17.9492 3.5389 17.7311 3.26872 17.4902 3.02783C17.2493 2.78695 16.9792 2.56885 16.6797 2.37354C16.0417 1.94385 15.2181 1.6932 14.209 1.62158C13.1999 1.54997 11.7969 1.51416 10 1.51416C8.20312 1.51416 6.80013 1.54997 5.79102 1.62158C4.7819 1.6932 3.95833 1.94385 3.32031 2.37354C3.02083 2.56885 2.75065 2.78695 2.50977 3.02783C2.26888 3.26872 2.05078 3.5389 1.85547 3.83838ZM15.9375 5.61572C15.9375 5.92822 15.8301 6.18864 15.6152 6.39697C15.4004 6.60531 15.1432 6.70947 14.8438 6.70947C14.5443 6.70947 14.2871 6.60531 14.0723 6.39697C13.8574 6.18864 13.75 5.92822 13.75 5.61572C13.75 5.31624 13.8574 5.05908 14.0723 4.84424C14.2871 4.62939 14.5443 4.52197 14.8438 4.52197C15.1432 4.52197 15.4004 4.62939 15.6152 4.84424C15.8301 5.05908 15.9375 5.31624 15.9375 5.61572ZM14.668 10.5181C14.668 11.1561 14.5443 11.7616 14.2969 12.3345C14.0495 12.8944 13.7142 13.3859 13.291 13.8091C12.8678 14.2323 12.3763 14.5675 11.8164 14.8149C11.2435 15.0623 10.638 15.186 10 15.186C9.36198 15.186 8.75651 15.0623 8.18359 14.8149C7.6237 14.5675 7.13216 14.2323 6.70898 13.8091C6.28581 13.3859 5.95052 12.8944 5.70312 12.3345C5.45573 11.7616 5.33203 11.1561 5.33203 10.5181C5.33203 9.88005 5.45573 9.27458 5.70312 8.70166C5.95052 8.14176 6.28581 7.65023 6.70898 7.22705C7.13216 6.80387 7.6237 6.46859 8.18359 6.22119C8.75651 5.9738 9.36198 5.8501 10 5.8501C10.638 5.8501 11.2435 5.9738 11.8164 6.22119C12.3763 6.46859 12.8678 6.80387 13.291 7.22705C13.7142 7.65023 14.0495 8.14176 14.2969 8.70166C14.5443 9.27458 14.668 9.88005 14.668 10.5181Z" fill="#0E1810"/>
                  </svg>
                </a>
                <a href="#" className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path d="M0.996094 3.50635C0.996094 3.21989 1.04818 2.95622 1.15234 2.71533C1.25651 2.47445 1.40625 2.26286 1.60156 2.08057C1.8099 1.89828 2.04427 1.7583 2.30469 1.66064C2.5651 1.56299 2.85807 1.51416 3.18359 1.51416C3.50911 1.51416 3.79883 1.55973 4.05273 1.65088C4.30664 1.74203 4.53125 1.88525 4.72656 2.08057C4.9349 2.26286 5.09115 2.4777 5.19531 2.7251C5.29948 2.97249 5.35156 3.25244 5.35156 3.56494C5.35156 3.83838 5.29948 4.09229 5.19531 4.32666C5.09115 4.56104 4.94141 4.76937 4.74609 4.95166C4.55078 5.13395 4.31966 5.27393 4.05273 5.37158C3.78581 5.46924 3.48958 5.51807 3.16406 5.51807H3.14453C2.81901 5.51807 2.5293 5.46924 2.27539 5.37158C2.02148 5.27393 1.79036 5.13395 1.58203 4.95166C1.38672 4.75635 1.24023 4.53825 1.14258 4.29736C1.04492 4.05648 0.996094 3.79281 0.996094 3.50635ZM1.23047 18.6626V7.1001H5.07812V18.6626H1.23047ZM7.22656 18.6626H11.0742V12.1978C11.0742 12.0024 11.0872 11.8267 11.1133 11.6704C11.1393 11.5142 11.1719 11.3774 11.2109 11.2603C11.2891 11.0649 11.39 10.8859 11.5137 10.7231C11.6374 10.5604 11.7839 10.4074 11.9531 10.2642C12.1224 10.134 12.3112 10.0363 12.5195 9.97119C12.7279 9.90609 12.9557 9.87354 13.2031 9.87354C13.8411 9.87354 14.3229 10.0884 14.6484 10.5181C14.974 10.9478 15.1367 11.5988 15.1367 12.4712V18.6626H19.0039V12.022C19.0039 11.1756 18.903 10.4269 18.7012 9.77588C18.4993 9.12484 18.1966 8.57796 17.793 8.13525C17.3763 7.69255 16.901 7.36051 16.3672 7.13916C15.8333 6.91781 15.2344 6.80713 14.5703 6.80713C13.8281 6.80713 13.1641 6.96989 12.5781 7.29541C11.9922 7.62093 11.4909 8.1027 11.0742 8.74072V8.77979H11.0547L11.0742 8.74072V7.1001H7.22656C7.23958 7.28239 7.24609 7.65999 7.24609 8.23291C7.24609 8.80583 7.24609 9.57406 7.24609 10.5376C7.24609 11.0194 7.24609 11.5532 7.24609 12.1392C7.24609 12.7121 7.24609 13.3371 7.24609 14.0142C7.24609 14.6912 7.23958 15.4204 7.22656 16.2017C7.22656 16.9699 7.22656 17.7902 7.22656 18.6626Z" fill="#0E1810"/>
                  </svg>
                </a>
              </div>
              <div className="self-stretch flex justify-center items-center">
                <div className="text-color-grey-26 text-base sm:text-lg font-normal leading-relaxed text-center">Copyright © Blockcentrix 2025</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer; 
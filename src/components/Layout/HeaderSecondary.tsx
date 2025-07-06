import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';

const HeaderSecondary = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full bg-white">
      <div className="self-stretch py-4 sm:py-6 flex flex-col justify-start items-center">
        <div className="w-full max-w-[1296px] px-4 sm:px-6 flex flex-col justify-start items-start">
          <div className="self-stretch inline-flex justify-between items-center">
            <div className="flex justify-start items-center gap-2 sm:gap-4">
              <div className="pr-2 sm:pr-6 inline-flex flex-col justify-start items-start">
                <div className="self-stretch pt-[3.17px] inline-flex justify-start items-start">
                  <Link to="/" className="flex justify-start items-start overflow-hidden hover:opacity-80 transition-opacity duration-200 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="168" height="33" viewBox="0 0 168 33" fill="none" className="w-32 h-6 sm:w-40 sm:h-8 md:w-48 md:h-9 lg:w-[168px] lg:h-[33px]">
                      <path d="M61.017 5.41489H56.8945V28.3861H61.017V5.41489Z" fill="#0B1938"/>
                      <path d="M69.501 28.7852C67.1709 28.7852 65.2973 28.0467 63.9303 26.5913C62.5633 25.1359 61.875 22.9444 61.875 20.067C61.875 17.1897 62.5681 15.0484 63.9327 13.6503C65.2973 12.2522 67.1733 11.5401 69.501 11.5401C71.8287 11.5401 73.6665 12.257 75.0359 13.667C76.4052 15.077 77.0935 17.2303 77.0935 20.067C77.0935 22.9038 76.3957 25.112 75.0215 26.5746C73.6474 28.0372 71.7857 28.7852 69.501 28.7852ZM69.501 14.7926C68.3443 14.7926 67.5055 15.1822 66.9343 15.9876C66.3631 16.7929 66.0596 18.1743 66.0596 20.0694C66.0596 21.8188 66.3679 23.1762 66.9725 24.1322C67.2457 24.5538 67.6201 24.9005 68.0615 25.1405C68.5029 25.3805 68.9974 25.5062 69.4998 25.5062C70.0022 25.5062 70.4967 25.3805 70.9381 25.1405C71.3795 24.9005 71.7539 24.5538 72.0271 24.1322C72.6317 23.1762 72.94 21.8212 72.94 20.0694C72.94 18.1743 72.646 16.8001 72.0653 15.9876C71.4846 15.175 70.6553 14.7807 69.501 14.7807V14.7926Z" fill="#0B1938"/>
                      <path d="M85.452 28.7852C83.0789 28.7852 81.2124 28.0348 79.91 26.5531C78.6075 25.0714 77.9551 22.9205 77.9551 20.1292C77.9551 17.3378 78.6266 15.1631 79.9267 13.6957C81.2268 12.2283 83.0168 11.5257 85.3134 11.5257H85.5189C87.6435 11.5257 89.3427 12.0587 90.5543 13.1078C91.766 14.1569 92.4208 15.6339 92.4662 17.4717V17.7106H88.5158V17.4956C88.5158 17.1346 88.4396 16.7777 88.2921 16.4483C88.1447 16.1188 87.9294 15.8242 87.6602 15.5837C87.1273 15.1201 86.3864 14.8835 85.4616 14.8835H85.4138C83.2151 14.8835 82.1254 16.2935 82.0871 19.1852V21.0803C82.1062 22.476 82.4289 23.5658 83.0431 24.3138C83.3306 24.6744 83.6988 24.9624 84.1181 25.1546C84.5374 25.3468 84.9959 25.4378 85.4568 25.4203H85.5572C86.549 25.4203 87.328 25.1454 87.8705 24.6006C88.4605 23.977 88.7882 23.1504 88.7858 22.292V22.0745H92.7482L92.7363 22.3135C92.6263 24.297 91.9357 25.8839 90.6858 27.0358C89.4359 28.1877 87.6889 28.7852 85.452 28.7852Z" fill="#0B1938"/>
                      <path d="M106.855 13.6192C105.455 12.2116 103.588 11.497 101.306 11.497C98.8683 11.497 96.9612 12.2475 95.6324 13.7244C94.3037 15.2013 93.6465 17.3283 93.6465 20.0551C93.6465 22.8416 94.3324 25.0236 95.6826 26.5268C97.0329 28.03 98.9567 28.8043 101.37 28.8043H101.488C103.56 28.8043 105.237 28.2546 106.473 27.1744C107.708 26.0942 108.454 24.5456 108.609 22.6337L108.628 22.3947H104.551L104.523 22.5859C104.414 23.3279 104.098 24.024 103.61 24.5934C103.132 25.1383 102.369 25.4155 101.306 25.4155C100.051 25.4155 99.1933 24.9758 98.6771 24.0652C98.1609 23.1547 97.9004 22.0124 97.8765 20.5928H108.767V20.3801C108.901 17.3139 108.26 15.034 106.855 13.6192ZM98.8277 16.0091C99.4825 15.2085 100.262 14.8141 101.179 14.8141C101.629 14.8161 102.073 14.9169 102.48 15.1093C102.887 15.3018 103.246 15.5812 103.533 15.9278C103.978 16.4249 104.265 17.1705 104.386 18.1599H97.984C98.0661 17.3778 98.3576 16.6323 98.8277 16.0019V16.0091Z" fill="#0B1938"/>
                      <path d="M119.279 28.3885V18.0596C119.238 16.0927 118.419 15.1344 116.772 15.1344C115.694 15.1344 114.939 15.5598 114.463 16.4321C113.972 17.3243 113.716 18.3268 113.718 19.3453V28.3885H109.598V11.8484H113.039L113.646 15.88C113.798 14.7614 114.308 13.7223 115.101 12.919C115.974 12.0565 117.147 11.5657 118.373 11.5496H118.586C119.846 11.5069 121.074 11.9569 122.008 12.8043C122.964 13.6814 123.423 15.0269 123.401 16.8001V28.3813L119.279 28.3885Z" fill="#0B1938"/>
                      <path d="M132.789 28.4004C131.337 28.4192 129.904 28.0672 128.626 27.3775C127.01 26.4933 126.181 24.7965 126.159 22.3398V15.2634H124.271V11.8794H124.635C126.011 11.8794 126.907 11.5735 127.299 10.9689C127.757 10.1892 128 9.3017 128.002 8.39741V8.17993H130.28V11.8818H133.948V15.2634H130.28V21.6634C130.28 22.942 130.626 23.7976 131.31 24.2014C132.108 24.6345 133.007 24.8457 133.914 24.8132H134.302V28.3072L134.101 28.3311C133.665 28.3797 133.227 28.4029 132.789 28.4004Z" fill="#0B1938"/>
                      <path d="M135.162 28.3885V17.5768C135.095 15.6888 135.475 14.2502 136.295 13.311C137.114 12.3717 138.696 11.877 140.986 11.877H146.167V15.4618H142.496C141.766 15.4518 141.037 15.532 140.326 15.7008C140.145 15.7479 139.978 15.8375 139.838 15.9622C139.698 16.0869 139.591 16.243 139.523 16.4177C139.363 16.8049 139.284 17.4741 139.284 18.4061V28.4124L135.162 28.3885Z" fill="#0B1938"/>
                      <path d="M146.834 28.3884V11.8818H150.954V28.3884H146.834ZM148.928 10.9426C148.298 10.9611 147.685 10.7389 147.214 10.3212C146.981 10.111 146.798 9.85219 146.676 9.56308C146.555 9.27396 146.499 8.96166 146.512 8.64834C146.505 8.33555 146.565 8.02493 146.686 7.73642C146.807 7.44792 146.987 7.1879 147.214 6.97306C147.677 6.53889 148.293 6.30452 148.928 6.32063C149.23 6.31291 149.532 6.36747 149.812 6.48093C150.093 6.5944 150.348 6.76434 150.56 6.98023C150.774 7.20447 150.941 7.46924 151.052 7.75897C151.162 8.04871 151.213 8.35758 151.203 8.66746C151.215 8.97069 151.164 9.27314 151.053 9.55572C150.943 9.8383 150.775 10.0949 150.56 10.3093C150.345 10.5208 150.09 10.6867 149.809 10.7972C149.529 10.9077 149.229 10.9604 148.928 10.9522V10.9426Z" fill="#0B1938"/>
                      <path d="M162.602 28.3885L159.612 21.2309L156.305 28.3885H151.912L156.608 20.0192L152.309 11.8818H156.826L159.634 18.7072L162.442 11.8818H166.959L162.659 20.0192L167.288 28.3885H162.602Z" fill="#0B1938"/>
                      <path d="M55.0043 18.1097C54.5302 17.41 53.9117 16.82 53.1904 16.3795C52.9886 16.2518 52.7777 16.1392 52.5594 16.0425C52.7825 15.884 52.9933 15.709 53.1904 15.5191C53.224 15.4908 53.2559 15.4605 53.286 15.4283C54.1057 14.6077 54.6638 13.5625 54.8898 12.4247C55.1157 11.287 54.9993 10.1078 54.5553 9.03623C54.1113 7.96463 53.3597 7.04867 52.3953 6.40411C51.4309 5.75955 50.2971 5.41531 49.1372 5.41489H39.2695V28.2833C39.2701 28.3085 39.2804 28.3324 39.2982 28.3502C39.316 28.368 39.34 28.3783 39.3651 28.3789H50.0716C50.3321 28.378 50.5923 28.3612 50.8507 28.3287C51.2008 28.2814 51.5456 28.2014 51.8807 28.0897C52.6437 27.8464 53.3499 27.4523 53.9575 26.9306C54.3555 26.5862 54.7073 26.1918 55.0043 25.7572C55.6731 24.7696 56.031 23.6043 56.0319 22.4115V21.4555C56.0319 20.2625 55.6739 19.097 55.0043 18.1097ZM43.4231 8.85148H48.1358C48.4935 8.85116 48.8476 8.92156 49.1779 9.05863C49.5082 9.1957 49.8082 9.39673 50.0605 9.65016C50.3128 9.90359 50.5125 10.2044 50.6481 10.5353C50.7838 10.8662 50.8526 11.2207 50.8507 11.5783V12.0563C50.8507 12.4127 50.7805 12.7656 50.644 13.0948C50.5075 13.4241 50.3075 13.7232 50.0554 13.9751C49.8033 14.227 49.504 14.4268 49.1746 14.5629C48.8452 14.6991 48.4923 14.769 48.1358 14.7687H43.4231V8.85148ZM43.4231 24.9734V18.1599H48.891C49.6838 18.1643 50.4428 18.4817 51.0027 19.043C51.5627 19.6043 51.8782 20.364 51.8807 21.1568V21.9837C51.8763 22.7752 51.5599 23.5331 51.0002 24.0928C50.4405 24.6526 49.6826 24.969 48.891 24.9734H43.4231Z" fill="#0B1938"/>
                      <path opacity="0.5" d="M21.2935 8.04376C21.2957 9.02239 21.1047 9.99182 20.7315 10.8965C20.3583 11.8012 19.8103 12.6233 19.1187 13.3158C18.8767 13.5566 18.6188 13.7809 18.3468 13.9873C17.0502 14.9724 15.4656 15.504 13.8372 15.5001H0V8.04376L2.16759 5.87617L7.45631 0.585063H13.8372C14.1971 0.583857 14.5565 0.609419 14.9126 0.661538C16.6856 0.920452 18.306 1.80893 19.4777 3.16447C20.6494 4.52001 21.2939 6.25203 21.2935 8.04376Z" fill="#0B1938"/>
                      <path d="M28.6235 22.6648C28.6244 23.968 28.3684 25.2586 27.87 26.4628C27.3717 27.6669 26.6408 28.761 25.7192 29.6824C24.7975 30.6038 23.7033 31.3344 22.499 31.8325C21.2947 32.3306 20.0041 32.5863 18.7008 32.585H11.9495L2.0293 22.6648V12.7445H18.7008C19.6972 12.7452 20.6879 12.8942 21.6404 13.1867C23.6634 13.8145 25.4325 15.0732 26.6889 16.7785C27.9454 18.4839 28.6233 20.5465 28.6235 22.6648Z" fill="#0B1938"/>
                    </svg>
                  </Link>
                </div>
              </div>
              {/* Desktop Navigation */}
              <div className="hidden lg:inline-flex flex-col justify-start items-start">
                <div className="w-96 inline-flex justify-center items-center gap-4">
                  <Link to="/" className="flex justify-center items-start hover:text-purple-600 transition-colors duration-200 cursor-pointer">
                    <div className="flex justify-center items-center">
                      <div className="inline-flex flex-col justify-start items-start">
                        <div className="justify-center text-gray-800 text-base font-normal leading-tight">Home</div>
                      </div>
                    </div>
                  </Link>
                  <Link to="#" className="w-16 flex justify-center items-start hover:text-purple-600 transition-colors duration-200 cursor-pointer">
                    <div className="w-16 flex justify-center items-center">
                      <div className="flex-1 inline-flex flex-col justify-start items-start">
                        <div className="justify-center text-gray-800 text-base font-normal leading-tight">About us</div>
                      </div>
                    </div>
                  </Link>
                  <Link to="#" className="flex justify-center items-start hover:text-purple-600 transition-colors duration-200 cursor-pointer">
                    <div className="flex justify-center items-center">
                      <div className="inline-flex flex-col justify-start items-start">
                        <div className="justify-center text-gray-800 text-base font-normal leading-tight">Products</div>
                      </div>
                    </div>
                  </Link>
                  <Link to="#" className="flex justify-center items-start hover:text-purple-600 transition-colors duration-200 cursor-pointer">
                    <div className="flex justify-center items-center">
                      <div className="inline-flex flex-col justify-start items-start">
                        <div className="justify-center text-gray-800 text-base font-normal leading-tight">Why Blockcentrix</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Desktop CTA Button */}
            <div className="hidden lg:flex justify-center items-center gap-6">
              <div className="inline-flex flex-col justify-start items-start">
                <Link to="/contact">
                  <div data-:hover="false" data-variant="1" className="w-full max-w-40 px-8 py-3 bg-white rounded-[300px] shadow-[0px_4px_8px_0px_rgba(77,145,225,0.10)] outline outline-offset-[-1px] outline-[#B7BAB7] inline-flex justify-center items-center hover:shadow-[0px_6px_12px_0px_rgba(77,145,225,0.15)] transition-all duration-200">
                    <div className="inline-flex flex-col justify-start items-center">
                      <div className="text-center justify-center text-[#0E1810] text-base font-semibold leading-tight">Get in touch</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="lg:hidden flex justify-center items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-800 hover:text-purple-600 transition-colors duration-200 p-2"
              >
                {isMenuOpen ? (
                  <IoClose className="w-6 h-6" />
                ) : (
                  <IoMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden w-full mt-4 bg-gray-50 rounded-lg p-4 shadow-lg">
              <div className="flex flex-col space-y-4">
                <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:text-purple-600 transition-colors duration-200 text-left py-2">
                  Home
                </Link>
                <Link to="#" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:text-purple-600 transition-colors duration-200 text-left py-2">
                  About us
                </Link>
                <Link to="#" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:text-purple-600 transition-colors duration-200 text-left py-2">
                  Products
                </Link>
                <Link to="#" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:text-purple-600 transition-colors duration-200 text-left py-2">
                  Why Blockcentrix
                </Link>
                <div className="pt-2 border-t border-gray-300">
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    <div className="w-full px-6 py-3 bg-white rounded-[300px] shadow-[0px_4px_8px_0px_rgba(77,145,225,0.10)] outline outline-offset-[-1px] outline-[#B7BAB7] inline-flex justify-center items-center hover:shadow-[0px_6px_12px_0px_rgba(77,145,225,0.15)] transition-all duration-200">
                      <div className="text-center justify-center text-[#0E1810] text-base font-semibold leading-tight">Get in touch</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderSecondary; 
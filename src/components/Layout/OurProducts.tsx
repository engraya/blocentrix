
import { blocMint, blocPay, blocSight, blocEstate } from '../../assets';

export const OurProducts = () => {
  return (
    <div id="products" className="self-stretch py-20 bg-gray-50 flex flex-col justify-start items-center">
      <div className="w-full max-w-[1536px] px-6 flex flex-col justify-start items-center gap-16">
        <div className="self-stretch inline-flex flex-col justify-start items-center">
          <div className="w-full max-w-[576px] flex flex-col justify-start items-start gap-4">
            <div className="self-stretch pb-px flex flex-col justify-start items-center">
              <div className="self-stretch text-center justify-center text-color-green-7 text-6xl font-medium leading-[66.90px]">Our Products</div>
            </div>
          <div className="self-stretch flex flex-col justify-start items-center">
              <div className="self-stretch text-center justify-center text-color-grey-26 text-lg font-normal leading-relaxed">Discover our comprehensive suite of blockchain solutions designed to transform industries and create new possibilities.</div>
          </div>
          </div>
        </div>
        <div className="w-full max-w-[1296px] flex flex-col justify-start items-center gap-6">
          <div className="w-full flex justify-center items-center gap-6 flex-wrap">
            <div className="w-[612px] h-[752.92px] rounded-[32px] inline-flex flex-col justify-between items-start overflow-hidden" style={{background: 'var(--Gradient-2-Light, linear-gradient(138deg, var(--color-Purple-50, #EEECFB) 29.57%, var(--color-Purple-200, #B2A8ED) 93.72%))'}}>
              <div className="self-stretch p-10 flex flex-col justify-start items-start gap-2">
                <div className="w-16 h-16 min-w-16 min-h-16 rounded-3xl flex justify-center items-center overflow-hidden">
                  <div className="w-16 h-16 bg-[#5741D8] flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M30.6672 19.0278C30.6672 23.8897 26.7323 27.8219 21.8672 27.8219L23.1243 25.3093" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M1.33203 13.1652C1.33203 8.30332 5.26689 4.37109 10.132 4.37109L8.87489 6.8837" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M14.4805 6.58819H30.33M18.1471 14.6112H26.9971C29.0221 14.6112 30.6638 12.9706 30.6638 10.947V5.08144C30.6638 3.05776 29.0221 1.41724 26.9971 1.41724H18.1471C16.1221 1.41724 14.4805 3.05776 14.4805 5.08144V10.947C14.4805 12.9706 16.1221 14.6112 18.1471 14.6112Z" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M1.33203 22.7325H17.1815M4.9987 30.7554H13.8487C15.8737 30.7554 17.5153 29.1149 17.5153 27.0912V21.2257C17.5153 19.202 15.8737 17.5615 13.8487 17.5615H4.9987C2.97365 17.5615 1.33203 19.202 1.33203 21.2257V27.0912C1.33203 29.1149 2.97365 30.7554 4.9987 30.7554Z" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="self-stretch justify-center text-color-green-7 text-4xl font-bold leading-10">BlocPay</div>
                </div>
                <div className="self-stretch pt-2 flex flex-col justify-start items-start">
                  <div className="self-stretch justify-center text-color-grey-26 text-lg font-normal leading-relaxed">A full-stack crypto payments solution for consumers and merchants — with seamless onramping/offramping and Web3-native APIs.</div>
                </div>
              </div>
              <img className="w-full h-[499.39px] max-w-[612px] relative" src={blocPay} alt="BlocPay" />
            </div>
            <div className="w-[612px] h-[752.92px] rounded-[32px] inline-flex flex-col justify-between items-start overflow-hidden" style={{background: 'var(--Gradient-2-Light, linear-gradient(138deg, var(--color-Purple-50, #EEECFB) 29.57%, var(--color-Purple-200, #B2A8ED) 93.72%))'}}>
              <div className="self-stretch p-10 flex flex-col justify-start items-start gap-2">
                <div className="w-16 h-16 min-w-16 min-h-16 rounded-3xl flex justify-center items-center overflow-hidden">
                  <div className="w-16 h-16 bg-[#5741D8] flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                      <path d="M21.7493 32.8128V18.1462C21.7493 16.4177 21.7493 15.5534 21.2124 15.0165C20.6754 14.4795 19.8112 14.4795 18.0827 14.4795C16.3542 14.4795 15.49 14.4795 14.953 15.0165C14.416 15.5534 14.416 16.4177 14.416 18.1462V32.8128C14.416 34.5413 14.416 35.4056 14.953 35.9425C15.49 36.4795 16.3542 36.4795 18.0827 36.4795C19.8112 36.4795 20.6754 36.4795 21.2124 35.9425C21.7493 35.4056 21.7493 34.5413 21.7493 32.8128Z" stroke="white" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M34.5833 19.9795V32.8128C34.5833 34.5413 34.5833 35.4056 34.0464 35.9425C33.5094 36.4795 32.6452 36.4795 30.9167 36.4795C29.1882 36.4795 28.3239 36.4795 27.787 35.9425C27.25 35.4056 27.25 34.5413 27.25 32.8128V19.9795" stroke="white" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M28.9688 13.8682L28.9688 4.09044M31.8333 4.09044V1.646M31.8333 16.3127V13.8682M28.9688 8.97933H34.6979M34.6979 8.97933C35.6472 8.97933 36.4167 9.80014 36.4167 10.8127V12.0349C36.4167 13.0474 35.6472 13.8682 34.6979 13.8682H27.25M34.6979 8.97933C35.6472 8.97933 36.4167 8.15852 36.4167 7.146V5.92377C36.4167 4.91125 35.6472 4.09044 34.6979 4.09044H27.25" stroke="white" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M8.91732 32.8128V23.6462C8.91732 21.9177 8.91732 21.0534 8.38035 20.5165C7.84338 19.9795 6.97913 19.9795 5.25065 19.9795C3.52217 19.9795 2.65793 19.9795 2.12096 20.5165C1.58398 21.0534 1.58398 21.9177 1.58398 23.6462V32.8128C1.58398 34.5413 1.58398 35.4056 2.12096 35.9425C2.65793 36.4795 3.52217 36.4795 5.25065 36.4795C6.97913 36.4795 7.84338 36.4795 8.38035 35.9425C8.91732 35.4056 8.91732 34.5413 8.91732 32.8128Z" stroke="white" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="self-stretch justify-center text-color-green-7 text-4xl font-bold leading-10">BlocSight</div>
                </div>
                <div className="self-stretch pt-2 flex flex-col justify-start items-start">
                  <div className="self-stretch justify-center text-color-grey-26 text-lg font-normal leading-relaxed">See on-chain behavior like never before — trace, analyze, and act on blockchain data in real-time.</div>
                </div>
              </div>
              <img className="w-full h-96 max-w-[612px] relative" src={blocSight} alt="BlocSight" />
            </div>
          </div>
          <div className="w-full flex justify-center items-center gap-6 flex-wrap">
            <div className="w-[612px] h-[752.92px] rounded-[32px] inline-flex flex-col justify-between items-start overflow-hidden" style={{background: 'var(--Gradient-2-Light, linear-gradient(138deg, var(--color-Purple-50, #EEECFB) 29.57%, var(--color-Purple-200, #B2A8ED) 93.72%))'}}>
              <div className="self-stretch p-10 flex flex-col justify-start items-start gap-2">
                <div className="w-16 h-16 min-w-16 min-h-16 rounded-3xl flex justify-center items-center overflow-hidden">
                  <div className="w-16 h-16 bg-[#5741D8] flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <path d="M6.03196 12.9367C6.20049 12.9367 6.35716 12.8588 6.6705 12.7028L9.18907 11.4489C10.3036 10.8941 10.8608 10.6167 10.8608 10.1774V4.65875M6.03196 12.9367C5.86343 12.9367 5.70676 12.8588 5.39342 12.7028L2.87484 11.4489C1.76037 10.8941 1.20312 10.6167 1.20312 10.1774V4.65875M6.03196 12.9367V7.41808M10.8608 4.65875C10.8608 4.21944 10.3036 3.94203 9.18907 3.38722L6.6705 2.1334C6.35716 1.97741 6.20049 1.89941 6.03196 1.89941C5.86343 1.89941 5.70676 1.97741 5.39342 2.1334L2.87484 3.38722C1.76036 3.94203 1.20313 4.21944 1.20312 4.65875M10.8608 4.65875C10.8608 5.09805 10.3036 5.37546 9.18907 5.93028L6.6705 7.1841C6.35716 7.34009 6.20049 7.41808 6.03196 7.41808M1.20312 4.65875C1.20312 5.09805 1.76036 5.37546 2.87484 5.93028L5.39342 7.1841C5.70676 7.34009 5.86343 7.41808 6.03196 7.41808" stroke="white" stroke-width="2.0695" stroke-linejoin="round"/>
                      <path d="M23.9675 12.9367C24.136 12.9367 24.2927 12.8588 24.606 12.7028L27.1246 11.4489C28.2391 10.8941 28.7963 10.6167 28.7963 10.1774V4.65875M23.9675 12.9367C23.799 12.9367 23.6423 12.8588 23.329 12.7028L20.8104 11.4489C19.6959 10.8941 19.1387 10.6167 19.1387 10.1774V4.65875M23.9675 12.9367V7.41808M28.7963 4.65875C28.7963 4.21944 28.2391 3.94203 27.1246 3.38722L24.606 2.1334C24.2927 1.97741 24.136 1.89941 23.9675 1.89941C23.799 1.89941 23.6423 1.97741 23.329 2.1334L20.8104 3.38722C19.6959 3.94203 19.1387 4.21944 19.1387 4.65875M28.7963 4.65875C28.7963 5.09805 28.2391 5.37546 27.1246 5.93028L24.606 7.1841C24.2927 7.34009 24.136 7.41808 23.9675 7.41808M19.1387 4.65875C19.1387 5.09805 19.6959 5.37546 20.8104 5.93028L23.329 7.1841C23.6423 7.34009 23.799 7.41808 23.9675 7.41808" stroke="white" stroke-width="2.0695" stroke-linejoin="round"/>
                      <path d="M14.3086 7.41797H15.6883" stroke="white" stroke-width="2.0695" stroke-linecap="round"/>
                      <path d="M1.20312 15.6958V20.5246C1.20312 22.4623 1.20312 23.4312 1.66816 24.1271C1.86947 24.4284 2.12816 24.6871 2.42945 24.8884C3.12542 25.3535 4.09427 25.3535 6.03196 25.3535" stroke="white" stroke-width="2.0695" stroke-linecap="round"/>
                      <path d="M28.7958 15.6958V20.5246C28.7958 22.4623 28.7958 23.4312 28.3308 24.1271C28.1295 24.4284 27.8708 24.6871 27.5695 24.8884C26.8735 25.3535 25.9045 25.3535 23.9668 25.3535" stroke="white" stroke-width="2.0695" stroke-linecap="round"/>
                      <path d="M12.5843 21.8092C12.8261 21.8057 13.0932 21.8057 13.3891 21.8057H16.6084C16.9043 21.8057 17.1714 21.8057 17.4132 21.8092M12.5843 21.8092C11.5866 21.8233 11.0209 21.8958 10.6414 22.2675C10.1699 22.7294 10.1699 23.4727 10.1699 24.9592C10.1699 26.4458 10.1699 27.1891 10.6414 27.651C11.1128 28.1128 11.8716 28.1128 13.3891 28.1128H16.6084C18.1259 28.1128 18.8847 28.1128 19.3561 27.651C19.8276 27.1891 19.8276 26.4458 19.8276 24.9592C19.8276 23.4727 19.8276 22.7294 19.3561 22.2675C18.9766 21.8958 18.411 21.8233 17.4132 21.8092M12.5843 21.8092V19.4406C12.5843 18.1343 13.6653 17.0754 14.9988 17.0754C16.3322 17.0754 17.4132 18.1343 17.4132 19.4406V21.8092" stroke="white" stroke-width="2.0695" stroke-linecap="round"/>
                    </svg>
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="self-stretch justify-center text-color-green-7 text-4xl font-bold leading-10">BlocMint</div>
                </div>
                <div className="self-stretch pt-2 flex flex-col justify-start items-start">
                  <div className="self-stretch justify-center text-color-grey-26 text-lg font-normal leading-relaxed">A platform for tokenizing and distributing rare earth mineral assets — turning natural resources into digital markets.</div>
                </div>
              </div>
              <img className="self-stretch h-[467.70px] relative" src={blocMint} alt="BlocMint" />
            </div>
            <div className="w-[612px] h-[752.92px] rounded-[32px] inline-flex flex-col justify-between items-start overflow-hidden" style={{background: 'var(--Gradient-2-Light, linear-gradient(138deg, var(--color-Purple-50, #EEECFB) 29.57%, var(--color-Purple-200, #B2A8ED) 93.72%))'}}>
              <div className="self-stretch p-10 flex flex-col justify-start items-start gap-2">
                <div className="w-16 h-16 min-w-16 min-h-16 rounded-3xl flex justify-center items-center overflow-hidden">
                  <div className="w-16 h-16 bg-[#5741D8] flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="26" viewBox="0 0 32 26" fill="none">
                      <path d="M1.33203 10.0727L8.66536 1.27271M8.66536 1.27271L16.6062 9.21355C17.0301 9.63746 17.2421 9.84942 17.5116 9.96106C17.7811 10.0727 18.0809 10.0727 18.6804 10.0727H30.6654L25.0911 3.38362C24.2261 2.34559 23.7936 1.82658 23.2023 1.54964C22.611 1.27271 21.9354 1.27271 20.5842 1.27271H8.66536Z" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M14.5341 7.13965V24.7396H2.80078V8.39679" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M14.5332 24.7393H29.1999V8.60596" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M4.26758 6.40604V1.27271" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M8.67802 13.0059L8.66484 13.0059" stroke="white" stroke-width="2.93333" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M8.66797 24.7395V18.8728" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M20.3987 15.9395L23.332 15.9395" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="self-stretch justify-center text-color-green-7 text-4xl font-bold leading-10">BlocEstate</div>
                </div>
                <div className="self-stretch pt-2 flex flex-col justify-start items-start">
                  <div className="self-stretch justify-center text-color-grey-26 text-lg font-normal leading-relaxed">Tokenized real estate made accessible, green, and borderless — for developers, landlords, and investors.</div>
                </div>
              </div>
              <img className="w-full h-[486.31px] max-w-[612px] relative" src={blocEstate} alt="BlocEstate" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts; 
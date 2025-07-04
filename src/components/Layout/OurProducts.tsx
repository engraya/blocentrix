import React from 'react';

interface ProductCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  buttonText: string;
}

const CheckmarkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
    <path d="M7.58668 10.4302L13.72 4.29682L14.6533 5.24349L7.58668 12.3235L3.34668 8.07015L4.28001 7.13682L7.58668 10.4302Z" fill="#8A2BE2"/>
  </svg>
);

const BlocPayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
    <path d="M4 3.31006H22C22.28 3.31006 22.5167 3.40672 22.71 3.60006C22.9033 3.79339 23 4.03006 23 4.31006V20.3101C23 20.5901 22.9033 20.8267 22.71 21.0201C22.5167 21.2134 22.28 21.3101 22 21.3101H4C3.72 21.3101 3.48333 21.2134 3.29 21.0201C3.09667 20.8267 3 20.5901 3 20.3101V4.31006C3 4.03006 3.09667 3.79339 3.29 3.60006C3.48333 3.40672 3.72 3.31006 4 3.31006ZM21 11.3101H5V19.3101H21V11.3101ZM21 9.31006V5.31006H5V9.31006H21ZM15 15.3101H19V17.3101H15V15.3101Z" fill="#8A2BE2"/>
  </svg>
);

const BlocSightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
    <path d="M5.63965 3.31006V19.3101H21.6396V21.3101H3.63965V3.31006H5.63965ZM20.9396 6.61006L22.3596 8.01006L16.6396 13.7301L13.6396 10.7301L9.35965 15.0101L7.93965 13.6101L13.6396 7.89006L16.6396 10.8901L20.9396 6.61006Z" fill="#8A2BE2"/>
  </svg>
);

const BlocMintIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
    <path d="M13 22.3101C11.64 22.3101 10.34 22.0501 9.1 21.5301C7.91333 21.0234 6.85667 20.3067 5.93 19.3801C5.00333 18.4534 4.28667 17.3967 3.78 16.2101C3.26 14.9701 3 13.6701 3 12.3101C3 10.9501 3.26 9.65006 3.78 8.41006C4.28667 7.22339 5.00333 6.16673 5.93 5.24006C6.85667 4.31339 7.91333 3.59673 9.1 3.09006C10.34 2.57006 11.64 2.31006 13 2.31006C14.36 2.31006 15.66 2.57006 16.9 3.09006C18.0867 3.59673 19.1433 4.31339 20.07 5.24006C20.9967 6.16673 21.7133 7.22339 22.22 8.41006C22.74 9.65006 23 10.9501 23 12.3101C23 13.6701 22.74 14.9701 22.22 16.2101C21.7133 17.3967 20.9967 18.4534 20.07 19.3801C19.1433 20.3067 18.0867 21.0234 16.9 21.5301C15.66 22.0501 14.36 22.3101 13 22.3101ZM13 20.3101C14.4533 20.3101 15.8 19.9434 17.04 19.2101C18.24 18.5034 19.1933 17.5501 19.9 16.3501C20.6333 15.1101 21 13.7634 21 12.3101C21 10.8567 20.6333 9.51006 19.9 8.27006C19.1933 7.07006 18.24 6.11673 17.04 5.41006C15.8 4.67673 14.4533 4.31006 13 4.31006C11.5467 4.31006 10.2 4.67673 8.96 5.41006C7.76 6.11673 6.80667 7.07006 6.1 8.27006C5.36667 9.51006 5 10.8567 5 12.3101C5 13.7634 5.36667 15.1101 6.1 16.3501C6.80667 17.5501 7.76 18.5034 8.96 19.2101C10.2 19.9434 11.5467 20.3101 13 20.3101ZM10 8.31006H16L18.5 11.8101L13 17.3101L7.5 11.8101L10 8.31006ZM11.04 10.3101L10.1 11.5901L13 14.4901L15.9 11.5901L14.98 10.3101H11.04Z" fill="#8A2BE2"/>
  </svg>
);

const BlocEstateIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
    <path d="M22 19.3101H24V21.3101H2V19.3101H4V4.31006C4 4.03006 4.09667 3.79339 4.29 3.60006C4.48333 3.40672 4.72 3.31006 5 3.31006H15C15.28 3.31006 15.5167 3.40672 15.71 3.60006C15.9033 3.79339 16 4.03006 16 4.31006V19.3101H20V11.3101H18V9.31006H21C21.28 9.31006 21.5167 9.40673 21.71 9.60006C21.9033 9.79339 22 10.0301 22 10.3101V19.3101ZM6 5.31006V19.3101H14V5.31006H6ZM8 11.3101H12V13.3101H8V11.3101ZM8 7.31006H12V9.31006H8V7.31006Z" fill="#8A2BE2"/>
  </svg>
);

const ProductCard: React.FC<ProductCardProps> = ({ icon, title, description, features, buttonText }) => (
  <div className="w-full lg:w-[728px] h-auto lg:h-96 p-6 lg:p-8 bg-white rounded-2xl shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.10)] shadow-md flex flex-col justify-start items-start gap-4 lg:gap-6 overflow-hidden">
    <div className="self-stretch flex justify-start items-center">
      <div className="w-16 h-12 pr-4 flex flex-col justify-start items-start">
        <div className="w-12 h-12 bg-purple-100 rounded-full flex justify-center items-center">
          {icon}
        </div>
      </div>
      <div className="flex flex-col justify-start items-start">
        <h3 className="text-gray-900 text-xl lg:text-2xl font-semibold leading-loose">{title}</h3>
      </div>
    </div>
    <div className="self-stretch">
      <p className="text-gray-600 text-sm lg:text-base font-normal leading-normal">{description}</p>
    </div>
    <div className="self-stretch pb-2 flex flex-col justify-start items-start gap-2">
      {features.map((feature, index) => (
        <div key={index} className="self-stretch flex justify-start items-start">
          <div className="w-7 h-5 pr-2 pt-0.5 flex justify-center items-center">
            <CheckmarkIcon />
          </div>
          <div className="text-gray-600 text-sm lg:text-base font-normal leading-normal">{feature}</div>
        </div>
      ))}
    </div>
    <button className="px-5 py-2 bg-purple-600 rounded-lg text-white text-sm lg:text-base font-normal hover:bg-purple-700 transition-colors duration-200">
      {buttonText}
    </button>
  </div>
);

export const OurProducts = () => {
  const products = [
    {
      icon: <BlocPayIcon />,
      title: "BlocPay",
      description: "A full-stack crypto payments solution for consumers and merchants — with seamless onramping/offramping and Web3-native APIs.",
      features: [
        "Instant cross-border transactions",
        "Multi-currency support",
        "Low transaction fees"
      ],
      buttonText: "Visit BlocPay"
    },
    {
      icon: <BlocSightIcon />,
      title: "BlocSight",
      description: "See on-chain behavior like never before — trace, analyze, and act on blockchain data in real-time.",
      features: [
        "Advanced analytics dashboard",
        "Custom reporting tools",
        "Real-time monitoring"
      ],
      buttonText: "Visit BlocSight"
    },
    {
      icon: <BlocMintIcon />,
      title: "BlocMint",
      description: "A platform for tokenizing and distributing rare earth mineral assets — turning natural resources into digital markets.",
      features: [
        "Fractional ownership",
        "Supply chain transparency",
        "Sustainable resource tracking"
      ],
      buttonText: "Visit BlocMint"
    },
    {
      icon: <BlocEstateIcon />,
      title: "BlocEstate",
      description: "Tokenized real estate made accessible, green, and borderless — for developers, landlords, and investors.",
      features: [
        "Global property marketplace",
        "Automated rental income distribution",
        "Smart contract property management"
      ],
      buttonText: "Visit BlocEstate"
    }
  ];

  return (
    <div className="self-stretch py-20 bg-gray-50 flex flex-col justify-start items-center">
      <div className="w-full max-w-[1536px] px-6 flex flex-col justify-start items-start gap-16">
        <div className="self-stretch flex flex-col justify-start items-center gap-4">
          <div className="self-stretch flex flex-col justify-start items-center">
            <h2 className="self-stretch text-center text-gray-900 text-2xl lg:text-3xl font-bold leading-9">
              Our Products
            </h2>
          </div>
          <div className="w-20 h-1 bg-purple-600" />
          <div className="w-full lg:w-[768px] max-w-[768px] pt-4 flex flex-col justify-start items-center">
            <p className="text-center text-gray-600 text-sm lg:text-base font-normal leading-normal px-4 lg:px-0">
              Discover our comprehensive suite of blockchain solutions designed to transform industries and create new possibilities.
            </p>
          </div>
        </div>
        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProducts; 
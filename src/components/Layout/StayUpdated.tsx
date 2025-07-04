import React, { useState } from 'react';

export const StayUpdated = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <div className="self-stretch py-16 bg-gradient-to-b from-purple-800 to-purple-500 flex flex-col justify-start items-center">
      <div className="w-full max-w-[768px] px-6 flex flex-col justify-start items-start gap-4">
        <div className="self-stretch flex flex-col justify-start items-center">
          <h2 className="self-stretch text-center text-white text-2xl lg:text-3xl font-bold leading-9">
            Stay Updated on Blockchain Innovations
          </h2>
        </div>
        <div className="self-stretch flex flex-col justify-start items-center">
          <p className="self-stretch text-center text-white/80 text-sm lg:text-base font-normal leading-normal px-4 lg:px-0">
            Subscribe to our newsletter for the latest updates, industry insights, and exclusive offers.
          </p>
        </div>
        <form onSubmit={handleSubscribe} className="self-stretch pt-4 flex flex-col lg:flex-row justify-center items-center gap-4">
          <div className="self-stretch w-full lg:min-w-80 px-4 py-3.5 bg-white rounded-lg flex flex-col justify-start items-start overflow-hidden">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full text-gray-600 text-sm lg:text-base font-normal focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full lg:w-auto px-6 py-3 bg-white rounded-lg flex justify-center items-center hover:bg-gray-50 transition-colors duration-200"
          >
            <span className="text-center text-purple-600 text-sm lg:text-base font-medium leading-normal">
              Subscribe
            </span>
          </button>
        </form>
        <div className="self-stretch flex flex-col justify-start items-center">
          <p className="self-stretch text-center text-white/60 text-xs lg:text-sm font-normal leading-tight px-4 lg:px-0">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StayUpdated; 
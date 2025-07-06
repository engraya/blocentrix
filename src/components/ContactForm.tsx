import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div data-device="Desktop" data-type="Contact us" className="w-full pt-8 sm:pt-12 md:pt-16 pb-24 sm:pb-32 md:pb-48 flex flex-col justify-start items-center">
      <div className="w-full max-w-[1296px] px-4 sm:px-6 flex flex-col justify-start items-center gap-8 sm:gap-10 md:gap-12">
        <div className="self-stretch flex flex-col justify-start items-center">
          <div className="w-full sm:w-[500px] md:w-[600px] max-w-full sm:max-w-[500px] md:max-w-[600px] flex flex-col justify-start items-start gap-3 sm:gap-4">
            <div className="self-stretch pb-[0.58px] flex flex-col justify-start items-center">
              <div className="self-stretch text-center justify-center text-color-green-7 text-4xl sm:text-6xl md:text-8xl font-medium leading-tight sm:leading-[80px] md:leading-[102.58px]">Contact us</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-center">
              <div className="self-stretch text-center justify-center text-color-grey-26 text-base sm:text-lg font-normal leading-relaxed px-4 sm:px-0">
                Lorem ipsum dolor sit amet consectetur massa arcu enim vestibulum<br className="hidden sm:block"/>nisl massa dolor feugiat m risus sed lacus nec aliquam nec a.
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col lg:flex-row justify-center items-start gap-6">
          <div className="w-full lg:w-[505.78px] self-stretch px-6 sm:px-8 md:px-12 py-12 sm:py-14 md:py-16 bg-gradient-to-br from-purple-200 via-purple-50 to-purple-200 rounded-tl-[16px] sm:rounded-tl-[24px] md:rounded-tl-[32px] rounded-tr-[12px] sm:rounded-tr-[16px] md:rounded-tr-xl rounded-bl-[16px] sm:rounded-bl-[24px] md:rounded-bl-[32px] rounded-br-[12px] sm:rounded-br-[16px] md:rounded-br-xl inline-flex flex-col justify-center items-start gap-6 sm:gap-7 md:gap-8 overflow-hidden">
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-color-green-7 text-2xl sm:text-3xl md:text-4xl font-medium leading-tight sm:leading-9 md:leading-10">More contact details</div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-color-grey-26 text-base sm:text-lg font-normal leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur massa<br className="hidden sm:block"/>arcu enim vestibulum nisl massa dolor feugiat.
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-4 sm:gap-5 md:gap-6">
              <div className="self-stretch h-auto sm:h-14 inline-flex flex-col sm:flex-row justify-start items-start sm:items-center gap-2.5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 min-w-12 min-h-12 sm:min-w-14 sm:min-h-14 rounded-xl inline-flex flex-col justify-start items-start overflow-hidden">
                  <div className="w-full max-w-12 sm:max-w-14 inline-flex justify-start items-start overflow-hidden">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 relative overflow-hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="57" viewBox="0 0 56 57" fill="none" className="w-full h-full">
                        <g clipPath="url(#clip0_315_2010)">
                          <path d="M56.5 -0.500061H-0.5V56.4999H56.5V-0.500061Z" fill="#5741D8"/>
                          <path d="M14.7695 19.3735C17.8256 22.3277 21.0087 25.0635 24.5071 27.475C26.6152 28.928 29.3876 28.928 31.4956 27.4749C34.9942 25.0634 38.1772 22.3276 41.2331 19.3734" stroke="white" strokeWidth="3.7037" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M20.3872 16.0887C18.7481 16.2452 17.2202 16.8671 16.0523 17.853C14.8845 18.8388 14.1458 20.1304 13.9567 21.5171C13.6771 23.627 13.4395 25.7901 13.4395 27.9986C13.4395 30.2071 13.6771 32.3721 13.9567 34.4801C14.1458 35.8667 14.8845 37.1585 16.0523 38.1442C17.2202 39.1301 18.7481 39.7521 20.3872 39.9087C22.8639 40.1333 25.4081 40.3226 28.0013 40.3226C30.5945 40.3226 33.1387 40.1333 35.6179 39.9087C37.2568 39.7521 38.7847 39.1301 39.9526 38.1442C41.1204 37.1585 41.8591 35.8667 42.0484 34.4801C42.3233 32.3702 42.5632 30.2071 42.5632 27.9986C42.5632 25.7901 42.3255 23.6251 42.0459 21.5171C41.8569 20.1304 41.118 18.8388 39.9504 17.853C38.7825 16.8671 37.2544 16.2452 35.6154 16.0887C33.1411 15.8639 30.5968 15.6746 28.0013 15.6746C25.4058 15.6746 22.8639 15.8639 20.3872 16.0887Z" stroke="white" strokeWidth="3.7037" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_315_2010">
                            <rect width="57" height="57" fill="white" transform="translate(-0.5 -0.500061)"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-80 pb-[1.50px] inline-flex flex-col justify-start items-start gap-1.5">
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-color-grey-26 text-base sm:text-lg font-normal leading-snug">Email address</div>
                  </div>
                  <div data-:hover="false" data-variant="1" className="max-w-full sm:max-w-80 inline-flex justify-center items-start">
                    <div className="inline-flex flex-col justify-start items-start">
                      <div className="justify-center text-color-green-7 text-base sm:text-lg font-semibold leading-snug">info@creditcore.com</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-auto sm:h-14 inline-flex flex-col sm:flex-row justify-start items-start sm:items-center gap-2.5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 min-w-12 min-h-12 sm:min-w-14 sm:min-h-14 rounded-xl inline-flex flex-col justify-start items-start overflow-hidden">
                  <div className="w-full max-w-12 sm:max-w-14 inline-flex justify-start items-start overflow-hidden">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 relative overflow-hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="57" viewBox="0 0 56 57" fill="none" className="w-full h-full">
                        <g clipPath="url(#clip0_315_2024)">
                          <path d="M56.5 -0.500061H-0.5V56.4999H56.5V-0.500061Z" fill="#5741D8"/>
                          <path d="M33.4776 14.4092C35.2332 12.9345 37.8487 13.1465 39.1808 15.0142C39.5365 15.5131 39.9581 16.1082 40.6862 17.0212C43.1911 20.162 43.1911 24.7098 40.6723 27.8394C38.8131 30.1499 36.8634 32.4811 34.6841 34.6656C32.5047 36.8501 30.179 38.8044 27.874 40.6681C24.7517 43.1929 20.2146 43.1929 17.0812 40.682C16.1094 39.9032 15.5031 39.4789 14.9884 39.1104C13.1885 37.822 12.9363 35.2948 14.3417 33.5828C15.4524 32.23 16.6891 30.9394 17.8822 29.6796C18.8326 28.6761 20.4197 28.6106 21.4984 29.474C21.7885 29.7063 22.1487 30.0123 22.8791 30.6987C26.4633 28.5638 28.6356 26.3599 30.7265 22.8328C30.0335 22.0918 29.7278 21.7297 29.4941 21.4361C28.6342 20.3557 28.698 18.7689 29.7051 17.8249C30.9325 16.6744 32.1817 15.4979 33.4776 14.4092Z" stroke="white" strokeWidth="3.7037" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_315_2024">
                            <rect width="57" height="57" fill="white" transform="translate(-0.5 -0.500061)"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-80 pb-[1.50px] inline-flex flex-col justify-start items-start gap-1.5">
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-color-grey-26 text-base sm:text-lg font-normal leading-snug">Phone number</div>
                  </div>
                  <div data-:hover="false" data-variant="1" className="max-w-full sm:max-w-80 inline-flex justify-center items-start">
                    <div className="inline-flex flex-col justify-start items-start">
                      <div className="justify-center text-color-green-7 text-base sm:text-lg font-semibold leading-snug">(123) 456 - 7890</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[718.20px] self-stretch px-6 sm:px-8 md:px-16 py-12 sm:py-14 md:py-16 bg-purple-50 rounded-tl-[12px] sm:rounded-tl-[16px] md:rounded-tl-xl rounded-tr-[16px] sm:rounded-tr-[24px] md:rounded-tr-[32px] rounded-bl-[12px] sm:rounded-bl-[16px] md:rounded-bl-xl rounded-br-[16px] sm:rounded-br-[24px] md:rounded-br-[32px] inline-flex flex-col justify-center items-start overflow-hidden">
            <div className="self-stretch flex flex-col justify-start items-start">
              <form onSubmit={handleSubmit} className="self-stretch flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-6">
                <div className="w-full inline-flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-color-green-7 text-base sm:text-lg font-medium leading-tight">Full name</div>
                  </div>
                  <div className="self-stretch h-14 sm:h-16 px-4 py-3 sm:py-5 bg-white rounded-[300px] shadow-[0px_1px_3px_0px_rgba(25,33,61,0.10)] outline outline-offset-[-1px] outline-[#E7E8E7] flex flex-col justify-start items-start overflow-hidden">
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Carter"
                      className="self-stretch flex flex-col justify-start items-start overflow-hidden bg-transparent border-none outline-none text-color-grey-26 text-base sm:text-lg font-normal placeholder-color-grey-26"
                      required
                    />
                  </div>
                </div>
                <div className="w-full inline-flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-color-green-7 text-base sm:text-lg font-medium leading-tight">Email address</div>
                  </div>
                  <div className="self-stretch h-14 sm:h-16 px-4 py-3 sm:py-5 bg-white rounded-[300px] shadow-[0px_1px_3px_0px_rgba(25,33,61,0.10)] outline outline-offset-[-1px] outline-[#E7E8E7] flex flex-col justify-start items-start overflow-hidden">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@youremail.com"
                      className="self-stretch flex flex-col justify-start items-start overflow-hidden bg-transparent border-none outline-none text-color-grey-26 text-base sm:text-lg font-normal placeholder-color-grey-26"
                      required
                    />
                  </div>
                </div>
                <div className="w-full inline-flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-color-green-7 text-base sm:text-lg font-medium leading-tight">Phone number</div>
                  </div>
                  <div className="self-stretch h-14 sm:h-16 px-4 py-3 sm:py-5 bg-white rounded-[300px] shadow-[0px_1px_3px_0px_rgba(25,33,61,0.10)] outline outline-offset-[-1px] outline-[#E7E8E7] flex flex-col justify-start items-start overflow-hidden">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(123) 456 - 7890"
                      className="self-stretch flex flex-col justify-start items-start overflow-hidden bg-transparent border-none outline-none text-color-grey-26 text-base sm:text-lg font-normal placeholder-color-grey-26"
                      required
                    />
                  </div>
                </div>
                <div className="w-full inline-flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-color-green-7 text-base sm:text-lg font-medium leading-tight">Company</div>
                  </div>
                  <div className="self-stretch h-14 sm:h-16 px-4 py-3 sm:py-5 bg-white rounded-[300px] shadow-[0px_1px_3px_0px_rgba(25,33,61,0.10)] outline outline-offset-[-1px] outline-[#E7E8E7] flex flex-col justify-start items-start overflow-hidden">
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="ex. Google"
                      className="self-stretch flex flex-col justify-start items-start overflow-hidden bg-transparent border-none outline-none text-color-grey-26 text-base sm:text-lg font-normal placeholder-color-grey-26"
                    />
                  </div>
                </div>
                <div className="w-full md:col-span-2 inline-flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-color-green-7 text-base sm:text-lg font-medium leading-tight">Message</div>
                  </div>
                  <div className="self-stretch min-h-20 sm:min-h-24 px-4 pt-3 sm:pt-4 pb-12 sm:pb-14 bg-white rounded-xl shadow-[0px_1px_3px_0px_rgba(25,33,61,0.10)] outline outline-offset-[-1px] outline-[#E7E8E7] flex flex-col justify-start items-start overflow-hidden">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className="self-stretch flex flex-col justify-start items-start bg-transparent border-none outline-none text-color-grey-26 text-base sm:text-lg font-normal leading-relaxed placeholder-color-grey-26 resize-none"
                      rows={4}
                      required
                    />
                  </div>
                </div>
                <div className="w-full md:col-span-2 inline-flex flex-col justify-start items-start">
                  <button
                    type="submit"
                    className="w-full md:w-auto px-6 sm:px-8 py-3 bg-neutral-900 rounded-[300px] shadow-[0px_4px_8px_0px_rgba(77,145,225,0.10)] outline outline-offset-[-1px] outline-neutral-900 inline-flex justify-center items-center overflow-hidden hover:bg-neutral-800 transition-colors duration-200"
                  >
                    <div className="text-center justify-center text-white text-sm sm:text-base font-semibold leading-tight">Send Message</div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm; 
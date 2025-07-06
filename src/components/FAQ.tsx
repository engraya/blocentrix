import { useState } from 'react';
import { IoAdd, IoRemove } from 'react-icons/io5';
import { faq } from '../assets';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
}

const FAQ = () => {
  const [faqItems, setFaqItems] = useState<FAQItem[]>([
    {
      id: 1,
      question: "How long have you been in business?",
      answer: "Lorem ipsum dolor sit amet consectetur elementum laoreet vitae suspendisse ullamcorper ut integer lectus lacus.",
      isOpen: true
    },
    {
      id: 2,
      question: "Is your app available for iPhone?",
      answer: "Lorem ipsum dolor sit amet consectetur elementum laoreet vitae suspendisse ullamcorper ut integer lectus lacus.",
      isOpen: false
    },
    {
      id: 3,
      question: "Can I speak with an account executive?",
      answer: "Lorem ipsum dolor sit amet consectetur elementum laoreet vitae suspendisse ullamcorper ut integer lectus lacus.",
      isOpen: false
    },
    {
      id: 4,
      question: "Is the service internationally available?",
      answer: "Lorem ipsum dolor sit amet consectetur elementum laoreet vitae suspendisse ullamcorper ut integer lectus lacus.",
      isOpen: false
    }
  ]);

  const toggleFAQ = (id: number) => {
    setFaqItems(prev => prev.map(item => 
      item.id === id ? { ...item, isOpen: !item.isOpen } : item
    ));
  };

  return (
    <div data-device="Desktop" data-type="Have questions" className="w-full pt-24 sm:pt-32 md:pt-40 lg:pt-48 pb-20 sm:pb-28 md:pb-32 lg:pb-40 flex flex-col justify-start items-center">
      <div className="w-full max-w-[1296px] px-4 sm:px-6 flex flex-col justify-start items-center">
        <div className="self-stretch flex flex-col justify-start items-center gap-8 sm:gap-10 md:gap-12">
          <div className="self-stretch flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">
            <div className="w-full sm:w-[473.34px] pb-px flex flex-col justify-start items-center sm:items-start gap-4 sm:gap-0">
              <div className="justify-center text-[#0E1810] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight sm:leading-[50px] md:leading-[60px] lg:leading-[66.90px] text-center sm:text-left">Have questions?</div>
              <button className="w-full sm:hidden max-w-80 px-6 py-3 cursor-pointer bg-gray-950 rounded-[300px] shadow-[0px_4px_8px_0px_rgba(77,145,225,0.10)] outline outline-1 outline-offset-[-1px] outline-[#0E1810] flex justify-center items-center hover:bg-gray-900 transition-colors duration-200">
                <span className="text-center justify-center text-white whitespace-nowrap text-sm font-semibold leading-tight">Get in touch</span>
              </button>
            </div>
            <div className="hidden sm:flex w-40 justify-start items-center">
              <button className="flex-1 max-w-80 px-8 py-3 cursor-pointer bg-gray-950 rounded-[300px] shadow-[0px_4px_8px_0px_rgba(77,145,225,0.10)] outline outline-1 outline-offset-[-1px] outline-[#0E1810] flex justify-center items-center hover:bg-gray-900 transition-colors duration-200">
                <span className="text-center justify-center text-white whitespace-nowrap text-base font-semibold leading-tight">Get started</span>
              </button>
            </div>
          </div>
          <div className="self-stretch flex flex-col lg:flex-row justify-center items-center gap-8 sm:gap-10 md:gap-12 lg:gap-14">
            <div className="w-full lg:w-[622.28px] inline-flex flex-col justify-start items-start order-2 lg:order-1">
              <div className="self-stretch flex flex-col justify-start items-start">
                {faqItems.map((item, index) => (
                  <div key={item.id} className="w-full">
                    <div className={`w-full max-w-full lg:max-w-[622.28px] ${index === 0 ? 'pt-0' : 'pt-8 sm:pt-10 md:pt-12 lg:pt-14'} ${index !== faqItems.length - 1 ? 'pb-8 sm:pb-10 md:pb-12 lg:pb-14 border-b border-[#E7E8E7]' : ''} flex flex-col justify-start items-start`}>
                      <div className="self-stretch inline-flex justify-between items-start sm:items-center gap-4">
                        <div className="inline-flex flex-col justify-start items-start flex-1">
                          <div className="justify-center text-[#0E1810] text-xl sm:text-2xl md:text-2xl lg:text-3xl font-medium leading-tight sm:leading-8 md:leading-8 lg:leading-9">{item.question}</div>
                        </div>
                        <button 
                          onClick={() => toggleFAQ(item.id)}
                          className="relative inline-flex flex-col justify-start items-start cursor-pointer flex-shrink-0 mt-1 sm:mt-0"
                        >
                          {item.isOpen ? (
                            <IoRemove className="w-5 h-5 sm:w-4 sm:h-4 text-[#0E1810]" />
                          ) : (
                            <IoAdd className="w-5 h-5 sm:w-4 sm:h-4 text-[#0E1810]" />
                          )}
                        </button>
                      </div>
                      {item.isOpen && (
                        <div className="w-full pt-3">
                          <div className="justify-center text-[#222] text-base sm:text-lg font-normal leading-relaxed">{item.answer}</div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <img className="w-full sm:w-[400px] md:w-[500px] lg:w-[565.72px] h-auto sm:h-[400px] md:h-[500px] lg:h-[565.72px] object-cover rounded-lg order-1 lg:order-2" src={faq} alt="FAQ illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 
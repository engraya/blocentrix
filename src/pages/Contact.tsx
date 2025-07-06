import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';

const Contact = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <ContactForm />
      <FAQ />
    </div>
  );
};

export default Contact; 
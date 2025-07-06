import { Studio } from '../components/Layout/Studio';
import { OurProducts } from '../components/Layout/OurProducts';
import { WhyBlocentrix } from '../components/Layout/WhyBlocentrix';

const Home = () => {
  return (
    <div className="w-full">
      {/* Studio Section */}
      <Studio />
      
      {/* Our Products Section */}
      <OurProducts />
      
      {/* Why Blocentrix Section */}
      <WhyBlocentrix />
    </div>
  );
};

export default Home; 
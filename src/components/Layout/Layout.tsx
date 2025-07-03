import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import PageWrapper from './PageWrapper';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageWrapper>
        <Outlet />
      </PageWrapper>
      <Footer />
    </div>
  );
};

export default Layout; 
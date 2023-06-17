import { useEffect, useState } from 'react';

import { SelectedPage } from '@/types/types';
import Header from '@/components/header/Header';
import Home from '@/components/home/Home';
import Benefits from '@/components/benefits/Benefits';
import OurClasses from '@/components/ourClasses/OurClasses';
import ContectUs from './components/contectUs/ContectUs';
import Footer from './components/footer/Footer';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='app bg-gray-20'>
      <Header
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContectUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;


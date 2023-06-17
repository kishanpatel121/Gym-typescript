import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

import Logo from '@/assets/Logo.png';
import Container from '@/components/utils/Container';
import Navbar from '@/components/header/navbar/Navbar';
import { SelectedPage } from '@/types/types';

interface HeaderProps {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Header: React.FC<HeaderProps> = ({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
}) => {
  const [isMenuToggle, setIsMenuToogle] = useState(false);
  const headerBackground = isTopOfPage ? '' : 'bg-primary-100 drop-shadow';

  return (
    <header>
      <div className={`${headerBackground} fixed top-0 z-[990] w-full py-6`}>
        <Container>
          {/* Left side */}
          <img src={Logo} alt='logo' />
          {/* Right side */}
          <button
            onClick={() => setIsMenuToogle(true)}
            className='p-2 rounded-full bg-secondary-500 md:hidden'
          >
            <FaBars fill='white' size='20' />
          </button>
          <Navbar
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            isMenuToggle={isMenuToggle}
            setIsMenuToogle={setIsMenuToogle}
          />
        </Container>
      </div>
    </header>
  );
};
export default Header;

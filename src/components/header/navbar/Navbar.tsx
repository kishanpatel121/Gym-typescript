import { AiOutlineClose } from 'react-icons/ai';

import Link from './Link';
import { SelectedPage } from '@/types/types';
import ActionButton from '@/components/utils/ActionButton';

interface NavbarProps {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isMenuToggle: boolean;
  setIsMenuToogle: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  selectedPage,
  setSelectedPage,
  isMenuToggle,
  setIsMenuToogle,
}) => {
  const pageList = ['Home', 'Benefits', 'Our Classes', 'Contact Us'];

  return (
    <nav
      className={`fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl transition-all duration-300 md:static md:ml-12 md:flex md:h-auto md:w-full md:items-center md:justify-between md:bg-transparent ${
        isMenuToggle ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
      }`}
    >
      <div className='flex justify-end p-6 pr-10 md:hidden'>
        <button
          className='rounded-full bg-secondary-500 p-2 md:hidden'
          onClick={() => setIsMenuToogle(false)}
        >
          <AiOutlineClose fill='white' size='20' />
        </button>
      </div>

      <ul className='flex flex-col gap-10 p-12 text-2xl md:ml-0 md:flex-row md:gap-8 md:p-0 md:text-sm'>
        {pageList.map((page) => (
          <li key={page}>
            <Link
              page={page}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </li>
        ))}
      </ul>

      <div className='hidden md:flex md:items-center md:justify-between md:gap-8'>
        <p>Sign In</p>
        <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
      </div>
    </nav>
  );
};
export default Navbar;

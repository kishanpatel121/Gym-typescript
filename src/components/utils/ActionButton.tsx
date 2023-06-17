import { SelectedPage } from '@/types/types';

interface ActionButtonProps {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ children, setSelectedPage }) => {
  return (
    <a
      className='px-10 py-2 text-white transition duration-300 rounded-md bg-secondary-500 hover:bg-primary-500'
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`${SelectedPage.ContactUs}`}
    >
      {children}
    </a>
  );
};
export default ActionButton;

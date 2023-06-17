import { motion } from 'framer-motion';

import { BenefitType, SelectedPage } from '@/types/types';

interface BenefitCardProps extends BenefitType {
  setSelectedPage: (value: SelectedPage) => void;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  icon,
  title,
  description,
  setSelectedPage,
}) => {
  return (
    <motion.div
      className='flex flex-col items-center gap-4 px-5 py-16 text-center border-2 border-gray-100 rounded-md gp to-current'
      variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
    >
      <div className='p-4 border-2 border-gray-100 rounded-full bg-primary-100'>
        {icon}
      </div>
      <h4 className='font-bold'>{title}</h4>
      <p>{description}</p>
      <a
        className='text-sm font-bold underline text-primary-500 hover:text-secondary-500'
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p>Learn More</p>
      </a>
    </motion.div>
  );
};
export default BenefitCard;

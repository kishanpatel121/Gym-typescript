import { motion } from 'framer-motion';
import { HiHomeModern, HiUserGroup, HiAcademicCap } from 'react-icons/hi2';

import { SelectedPage, BenefitType } from '@/types/types';
import Container from '@/components/utils/Container';
import HText from '@/components/utils/HText';
import ActionButton from '@/components/utils/ActionButton';
import BenefitCard from './BenefitCard';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';

interface BenefitsProps {
  setSelectedPage: (value: SelectedPage) => void;
}

const benefits: BenefitType[] = [
  {
    icon: <HiHomeModern size={22} />,
    title: 'State of the Art Facilities',
    description:
      'Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.',
  },
  {
    icon: <HiUserGroup size={22} />,
    // eslint-disable-next-line quotes
    title: "100's of Diverse Classes",
    description:
      'Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.',
  },
  {
    icon: <HiAcademicCap size={22} />,
    title: 'Expert and Pro Trainer',
    description:
      'Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.',
  },
];

const Benefits: React.FC<BenefitsProps> = ({ setSelectedPage }) => {
  return (
    <section id='benefits' className='py-32'>
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
        <Container>
          <div className='flex flex-col'>
            {/* Header */}
            <motion.div
              className='md:w-3/5'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <HText>MORE THAN JUST GYM.</HText>
              <p className='my-5 text-sm'>
                We provide world class fitness equipment, trainers and classes to get you
                to your ultimate fitness goals with ease. We provide true care into each
                and every member.
              </p>
            </motion.div>

            {/* Benefits */}
            <motion.div
              className='flex flex-col gap-8 mt-5 md:flex-row md:items-center md:justify-between'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } },
              }}
            >
              {benefits.map((benefit: BenefitType) => (
                <BenefitCard
                  key={benefit.title}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  setSelectedPage={setSelectedPage}
                />
              ))}
            </motion.div>
          </div>
        </Container>
        {/* Graphics and description */}
        <Container>
          <div className='items-center justify-between gap-20 mt-16 md:mt-28 md:flex'>
            {/* Graphics */}
            <img src={BenefitsPageGraphic} alt='benefit-page-graphic' />

            {/* DESCRIPTION */}
            <div>
              {/* TITLE */}
              <div className='relative'>
                <motion.div
                  className='before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves'
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{' '}
                    <span className='text-primary-500'>FIT</span>
                  </HText>
                </motion.div>
              </div>

              {/* DESCRIPT */}
              <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <p className='my-5'>
                  Nascetur aenean massa auctor tincidunt. Iaculis potenti amet egestas
                  ultrices consectetur adipiscing ultricies enim. Pulvinar fames vitae
                  vitae quis. Quis amet vulputate tincidunt at in nulla nec. Consequat sed
                  facilisis dui sit egestas ultrices tellus. Ullamcorper arcu id pretium
                  sapien proin integer nisl. Felis orci diam odio.
                </p>
                <p className='mb-5'>
                  Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus
                  quam porttitor. Mauris velit euismod elementum arcu neque facilisi. Amet
                  semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in
                  risus nunc.
                </p>
              </motion.div>

              {/* BUTTON */}
              <div className='relative mt-16'>
                <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
                  <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </motion.div>
    </section>
  );
};
export default Benefits;

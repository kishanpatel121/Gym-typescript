import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png';

import { SelectedPage } from '@/types/types';
import Container from '../utils/Container';
import HText from '../utils/HText';

interface ContactUsProps {
  setSelectedPage: (value: SelectedPage) => void;
}

const ContectUs: React.FC<ContactUsProps> = ({ setSelectedPage }) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id='contactus' className='pt-24 pb-32'>
      <Container>
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
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
            <HText>
              <span>JOIN NOW</span> TO GET IN SHAPE
            </HText>
            <p className='mt-5'>
              Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl sapien
              vel rhoncus. Placerat at in enim pellentesque. Nulla adipiscing leo egestas
              nisi elit risus sit. Nunc cursus sagittis.
            </p>
          </motion.div>

          {/* Form and image */}
          <div className='justify-between gap-8 mt-10 md:flex'>
            <motion.div
              className='mt-10 basis-3/5 md:mt-0'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <form action='' onSubmit={onSubmit}>
                <input
                  className='w-full px-5 py-3 placeholder-white rounded-lg bg-primary-300'
                  type='text'
                  placeholder='NAME'
                  {...register('name', { required: true, maxLength: 100 })}
                />
                {errors.name && (
                  <p className='-mt-1 text-primary-500'>
                    {errors.name.type === 'required' && 'This field is required.'}
                    {errors.name.type === 'maxLength' && 'Max length is 100 char.'}
                  </p>
                )}
                <input
                  className='w-full px-5 py-3 mt-5 placeholder-white rounded-lg bg-primary-300'
                  type='email'
                  placeholder='EMAIL'
                  {...register('email', {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <p className='-mt-1 text-primary-500'>
                    {errors.email.type === 'required' && 'This field is required.'}
                    {errors.email.type === 'pattern' && 'Invalid email address.'}
                  </p>
                )}
                <textarea
                  className='w-full px-5 py-3 mt-5 placeholder-white rounded-lg bg-primary-300'
                  rows={4}
                  cols={50}
                  placeholder='MESSAGE'
                  {...register('message', { required: true, maxLength: 2000 })}
                />
                {errors.message && (
                  <p className='-mt-1 text-primary-500'>
                    {errors.message.type === 'required' && 'This field is required.'}
                    {errors.message.type === 'maxLength' && 'Max length is 100 char.'}
                  </p>
                )}

                <button
                  type='submit'
                  className='px-20 py-3 mt-5 transition duration-500 rounded-lg bg-secondary-500 hover:text-white'
                >
                  SUBMIT
                </button>
              </form>
            </motion.div>

            <motion.div
              className='relative mt-16 basis-2/5 md:mt-0'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className='w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext'>
                <img
                  className='w-full'
                  alt='contact-us-page-graphic'
                  src={ContactUsPageGraphic}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
export default ContectUs;

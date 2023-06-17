interface HTextProps {
  children: React.ReactNode;
}

const HText: React.FC<HTextProps> = ({ children }) => {
  return <h1 className='text-3xl font-bold basis-3/5 font-montserrat'>{children}</h1>;
};
export default HText;

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className='mx-auto flex w-5/6 items-center justify-between'>{children}</div>
  );
};
export default Container;

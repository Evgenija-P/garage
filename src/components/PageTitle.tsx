import Title from './sections/Title';

function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <Title tag="h1" styles="mt-[25px] xl:mt-[25px]">
      {children}
    </Title>
  );
}

export default PageTitle;

import Title from './sections/Title';

const details = [
  {
    title: '10+ years',
    subtitle: 'Experience of Our Mechanics',
    text: 'A qualified team of professionals with years of expertise in car repair and maintenance',
  },
  {
    title: '3 months',
    subtitle: 'Service Guarantee',
    text: 'Your peace of mind is our priority: a 3-month warranty on all services and repairs',
  },
  {
    title: 'RDW',
    subtitle: 'Official Recognition',
    text: 'RDW certification ensures the quality and legality of all our work',
  },
  {
    title: '4 languages',
    subtitle: 'UA | RU | EN | DE',
    text: 'We serve clients in four languages for your convenience',
  },
];

const BenefitsDetails = () => {
  return (
    <ul className="mx-auto flex h-fit w-full flex-col flex-wrap gap-2.5 px-6 xl:w-[824px] xl:flex-row xl:px-0">
      {details.map((detail, index) => (
        <li
          className="inset-shadow flex w-full flex-col rounded-base bg-[rgba(45,45,45,0.04] p-5 backdrop-blur-[10px] xl:w-[355px] xl:px-[30px] xl:py-10 xl:first:w-[459px] xl:last:w-[459px]"
          key={detail.title}
        >
          <Title tag="h5">{detail.title}</Title>
          <p className="text-sm font-bold -tracking-[3%] uppercase xl:text-lg">{detail.subtitle}</p>
          <p className="mt-5 text-justify xl:mt-[30px]">{detail.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default BenefitsDetails;

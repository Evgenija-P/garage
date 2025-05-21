import Title from './Title';

const Services = () => {
  return (
    <section className="w-full bg-surface pt-20 xl:h-[570px]">
      <div className="wrapper">
        <Title tag="h2" textColor="accent" styles="mb-20">
          Services We Offer
        </Title>
        <Title tag="h4" textColor="white" styles="mb-2.5">
          Auto Service & Repair
        </Title>
        <p className="w-[455px] text-white">
          Cars from top auctions: selected for condition, price, and reliability. History checks,
          legal compliance, and city delivery included.
        </p>
      </div>
    </section>
  );
};

export default Services;

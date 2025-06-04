import Image from 'next/image';
import Title from './Title';

const Auctions = () => {
  return (
    <section className="w-full pt-[30px] md:pt-[85px]">
      <div className="wrapper mx-auto flex flex-col items-center justify-between gap-y-[30px] md:flex-row">
        <div className="flex w-full flex-col items-start justify-center gap-y-2.5 md:ml-[60px] md:w-[542px] xl:gap-y-5">
          <Title tag="h2" styles="">
            Car Selection Through Auctions
          </Title>
          <p>
            We help you find your dream car at the world's leading auctions. Our experts check every
            detail to ensure you get the best option at the best price
          </p>
        </div>
        <Image src="/images/auctions.png" alt="auctions" width={563} height={330} />
      </div>
    </section>
  );
};

export default Auctions;

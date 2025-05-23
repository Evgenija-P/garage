import Image from 'next/image';

const Car = () => {
  return (
    <section className="h-fit w-full pt-[7px] pb-9 xl:h-[624px] xl:py-10">
      <div className="wrapper mx-auto h-full">
        <Image
          src={'/images/car-desc.png'}
          alt="car"
          width={770}
          height={624}
          className="mx-auto hidden w-[770px] object-cover object-center xl:block"
        />
        <Image
          src={'/images/car-mob.png'}
          alt="car"
          width={368}
          height={260}
          className="mx-auto min-w-[368px] object-cover xl:hidden"
        />
      </div>
    </section>
  );
};

export default Car;

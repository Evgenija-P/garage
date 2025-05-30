import { Car } from '@/types/baseTypes';
import CarCard from './CarCard';

type CarsWrapperProps = {
  cars: Car[];
};

const CarsWrapper = ({ cars }: CarsWrapperProps) => {
  const renderCars = cars.filter(car => car.primary_photo_url.length > 0);

  return (
    <section className="min-h-screen w-full">
      <div className="wrapper mx-auto grid grid-cols-1 items-center gap-x-2.5 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
        {renderCars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
};

export default CarsWrapper;

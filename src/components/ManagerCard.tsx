import { Phone } from '@/assets/icons';
import Image from 'next/image';

export type Person = {
  name: string;
  position: string;
  img: string;
  regions: string[];
  region: string;
  phone: string;
  phoneView: string;
};

type ManagerCardProps = {
  person: Person;
};

const ManagerCard = ({ person }: ManagerCardProps) => {
  return (
    <div className="flex h-[385px] w-[280px] flex-col rounded-base border border-white/60 bg-surface px-[30px] py-10">
      <div className="flex w-full flex-col justify-center gap-y-5 border-b border-b-white/60 pb-[30px]">
        <div className="relative mx-auto h-[100px] w-[100px] overflow-hidden rounded-full">
          <Image
            src={person.img || '/images/no-image.jpg'}
            alt="personal"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="flex flex-col gap-y-2.5">
          <h4 className="text-center text-xl font-bold text-white">{person.name}</h4>
          <p className="text-center font-bold text-white/60 not-first:text-base">
            {person.position}
          </p>
        </div>
      </div>
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-y-5 pt-[30px]">
        <p className="text-lg font-semibold text-white uppercase">
          {person.regions[0]} | {person.regions[1]}
        </p>
        <div className="group flex items-center gap-x-5 text-white">
          <Phone />
          <a href={`tel:${person.phone}`} className="group-hover:underline-2 group-hover:underline">
            {person.phoneView}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ManagerCard;

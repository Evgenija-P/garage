'use client';

import { useState } from 'react';
import ManagerCard from '../ManagerCard';
import Buttons from '../UI/buttons/Buttons';

const managers = [
  {
    name: 'Valerii',
    position: 'Sales manager',
    img: '/images/personal/Max_Fisher.png',
    regions: ['ua', 'ru'],
    region: 'europe',
    phone: '+380507524433',
    phoneView: '+38 050 752 44 33',
  },
  {
    name: 'Anastasiia',
    position: 'Sales manager',
    img: '/images/personal/Anastasiia.png',
    regions: ['en', 'de'],
    region: 'vest-europe',
    phone: '+31615417790',
    phoneView: '+31 6 15 41 77 90',
  },
];

const OurManagers = () => {
  const [currentRegion, setCurrentRegion] = useState<string>('europe');
  const currentManager = managers.find(manager => manager.region === currentRegion);

  const languageButtons = [
    {
      label: managers
        .find(m => m.regions.includes('ua') || m.regions.includes('ru'))
        ?.regions.join(' | ')
        .toUpperCase(),
      region: managers.find(m => m.regions.includes('ua') || m.regions.includes('ru'))?.region,
    },
    {
      label: managers
        .find(m => m.regions.includes('en') || m.regions.includes('de'))
        ?.regions.join(' | ')
        .toUpperCase(),
      region: managers.find(m => m.regions.includes('en') || m.regions.includes('de'))?.region,
    },
  ];

  return (
    <section className="mb-10 w-full xl:mb-[100px]">
      <div className="wrapper mx-auto">
        <div className="inset-shadow flex flex-col items-center justify-between rounded-base bg-[rgba(45,45,45,0.04)] p-5 backdrop-blur-[15px] xl:flex-row xl:p-[60px]">
          {/* LEFT BLOCK */}
          <div className="flex w-full flex-col md:w-[412px]">
            <h3 className="mb-2.5 text-center text-lg leading-[1.2] font-bold uppercase xl:mb-5 xl:text-left xl:text-2xl">
              you can contact our sales managers directly
            </h3>
            <p className="mb-5 text-center xl:mb-[30px] xl:text-left">
              We’re here to help. <br />
              We’ll get back to you ASAP!
            </p>
            <Buttons category="primary" styles="w-[193px] xl:w-[232px] mx-auto xl:ml-0">
              Leave a Request
            </Buttons>
          </div>

          {/* DESKTOP MANAGERS */}
          <div className="hidden items-center gap-x-2.5 xl:flex">
            {managers.map(manager => (
              <ManagerCard key={manager.name} person={manager} />
            ))}
          </div>

          {/* MOBILE REGION SWITCH */}
          <div className="flex w-full flex-col xl:hidden">
            <div
              className="mx-auto my-5 flex h-12 w-[158px] items-center gap-x-2.5 rounded-full bg-white/10 px-[7px] py-1.5 backdrop-blur-[10px]"
              style={{
                boxShadow: '0px 6px 10px 0px #1F18180D, inset 0px 4px 10px 4px #FFFFFF33',
              }}
            >
              {languageButtons.map(
                (btn, index) =>
                  btn.region && (
                    <button
                      key={index}
                      onClick={() => setCurrentRegion(btn.region!)}
                      className={`flex h-full w-[73px] items-center justify-center rounded-full font-semibold transition-all duration-200 ${
                        btn.region === currentRegion ? 'bg-primary text-white' : 'text-primary'
                      }`}
                    >
                      {btn.label}
                    </button>
                  )
              )}
            </div>
            {currentManager && <ManagerCard person={currentManager} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurManagers;

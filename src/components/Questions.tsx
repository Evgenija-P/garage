'use client';

import { Cross, Plus } from '@/assets/icons';
import { useState } from 'react';

type Question = {
  id: number;
  question: string;
  answer: string;
};

type QuestionsProps = {
  questions: Question[];
};

const Questions = ({ questions }: QuestionsProps) => {
  const [currentQuestion, setCurrentQuestion] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    setCurrentQuestion(currentQuestion === id ? null : id);
  };

  return (
    <ul className="mb-[60px] flex w-full flex-col gap-y-[30px] md:mb-0 xl:w-[615px] xl:gap-y-10">
      {questions.map(q => {
        const isOpen = currentQuestion === q.id;
        return (
          <li
            key={q.id}
            className={`overflow-hidden rounded-base px-[30px] transition-all duration-500 ease-in-out ${
              isOpen
                ? "bg-[url('/images/contact-grey.png')] bg-size-[615px_200px] bg-center bg-no-repeat py-[30px]"
                : 'bg-transparent'
            }`}
          >
            <div className="flex items-center justify-between">
              <p className="text-base font-bold xl:text-[22px] xl:font-semibold">{q.question}</p>
              <button
                onClick={() => toggleQuestion(q.id)}
                className={`group flex h-[30px] w-[30px] items-center justify-center rounded-full xl:h-10 xl:w-10 ${
                  isOpen ? 'bg-primary' : 'bg-[#E0E0E0]'
                }`}
              >
                {isOpen ? (
                  <Cross className="fill-white group-hover:fill-accent" />
                ) : (
                  <Plus className="stroke-primary group-hover:stroke-accent" />
                )}
              </button>
            </div>

            <div
              className={`w-full transition-all duration-500 ease-in-out md:w-[481px] ${
                isOpen
                  ? 'mt-[15px] max-h-[200px] opacity-100 xl:mt-1'
                  : 'pointer-events-none max-h-0 opacity-0'
              }`}
            >
              <p>{q.answer}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Questions;

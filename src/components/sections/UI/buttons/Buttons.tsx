import React from 'react';

type ButtonsProps = {
  category: 'primary' | 'secondary';
  styles: string;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
};

const Buttons = ({ category, styles, children, type = 'button' }: ButtonsProps) => {
  const buttonStyle = {
    primary: 'bg-accent text-primary',
    secondary: 'bg-primary text-accent',
  };

  return (
    <button
      type={type}
      className={`min-w-[182px] h-[52px] rounded-full flex gap-x-[10px] justify-center items-center ${buttonStyle[category]} ${styles}`}
    >
      {children}
    </button>
  );
};

export default Buttons;

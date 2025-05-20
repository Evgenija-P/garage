import { Arrow } from "@/assets/icons";
import React from "react";

type ButtonsProps = {
  category: "primary" | "secondary";
  styles?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const baseButtonClass = `
  min-w-[182px] h-[52px] rounded-full flex gap-x-[10px] items-center 
  border-[1.5px] text-white text-sm font-semibold group 
  disabled:opacity-80 disabled:pointer-events-none
`;

const categoryStyles: Record<ButtonsProps["category"], string> = {
  primary: `
    justify-between bg-primary border-primary active:text-accent 
    pl-[23px] pr-[8px]
  `,
  secondary: `
    justify-center bg-transparent border-white 
    hover:text-accent hover:border-accent 
    active:text-primary active:border-accent active:bg-accent 
    px-[23px]
  `,
};

const arrowWrapperClass = `
  w-9 h-9 rounded-full flex items-center justify-center bg-white text-white
  group-hover:bg-accent group-active:bg-accent group-active:-rotate-45
  group-disabled:bg-white group-disabled:text-white group-disabled:rotate-0
`;

const Buttons = ({ category, styles = "", children, type = "button", disabled }: ButtonsProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${baseButtonClass} ${categoryStyles[category]} ${styles}`}
    >
      {children}
      {category === "primary" && (
        <div className={arrowWrapperClass}>
          <Arrow fill="var(--primary)" />
        </div>
      )}
    </button>
  );
};

export default Buttons;

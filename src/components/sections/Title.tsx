import React from "react";

interface TitleProps {
  tag?: string;
  styles?: string;
  children: React.ReactNode;
  textColor?: "primary" | "accent";
}

const Title = ({ tag = "h3", styles = "", textColor = "primary", children }: TitleProps) => {
  const textColorVariable = {
    primary: "text-primary",
    accent: "text-accent",
  };

  const textColorClass = textColorVariable[textColor];
  const textStyle = `${styles} ${textColorClass} uppercase`;

  switch (tag) {
    case "h1":
      return (
        <h1 className={`text-2xl xl:text-4xl font-medium leading-[1] ${textStyle}`}>{children}</h1>
      );
    case "h2":
      return (
        <h2 className={`text-[22px] xl:text-[32px] font-medium leading-[1.2] ${textStyle}`}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={`text-[28px] xl:text-[42px] font-semibold leading-[1.4] ${textStyle}`}>
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 className={`text-xl xl:text-[28px] font-medium leading-[1.2] ${textStyle}`}>
          {children}
        </h4>
      );
    case "h5":
      return <h5 className={`text-2xl font-medium leading-[1] ${textStyle}`}>{children}</h5>;
    case "h6":
      return (
        <h6 className={`text-lg xl:text-[28px] font-bold leading-[1] ${textStyle}`}>{children}</h6>
      );
    default:
      return (
        <h3 className={`text-[28px] xl:text-[42px] font-semibold leading-[1.4] ${textStyle}`}>
          {children}
        </h3>
      );
  }
};

export default Title;

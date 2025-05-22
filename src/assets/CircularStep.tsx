import React, { useEffect, useState } from 'react';

type Props = {
  number: number;
  progress: number; // від 0 до 100
  color?: string; // для бордера та прогресу
  background?: string; // для заливки внутрішнього кола
  textColor?: string;
};

const useIsMobile = (breakpoint = 640) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint]);

  return isMobile;
};

const CircularStep = ({
  number,
  progress,
  color = 'var(--color-accent)',
  background = 'var(--color-accent)',
  textColor = 'var(--color-primary)',
}: Props) => {
  const isMobile = useIsMobile();
  const outerSize = isMobile ? 40 : 50;
  const gap = 10;
  const strokeWidth = 1.5;

  const innerSize = outerSize - gap;
  const radius = (outerSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - progress / 100);

  return (
    <svg width={outerSize} height={outerSize} viewBox={`0 0 ${outerSize} ${outerSize}`}>
      {/* Фонове коло */}
      <circle
        cx={outerSize / 2}
        cy={outerSize / 2}
        r={radius}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        opacity={0.4}
      />
      {/* Прогрес */}
      <circle
        cx={outerSize / 2}
        cy={outerSize / 2}
        r={radius}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={dashOffset}
        strokeLinecap="round"
        transform={`rotate(-90 ${outerSize / 2} ${outerSize / 2})`}
      />
      {/* Внутрішнє коло */}
      <circle cx={outerSize / 2} cy={outerSize / 2} r={innerSize / 2} fill={background} />
      {/* Текст */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        fill={textColor}
        fontSize={innerSize * 0.5}
        fontWeight="bold"
      >
        {number}
      </text>
    </svg>
  );
};

export default CircularStep;

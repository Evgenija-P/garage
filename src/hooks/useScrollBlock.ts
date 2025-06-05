/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';

const useScrollBlock = () => {
  const [isScrollBlocked, setIsScrollBlocked] = useState(false);

  const blockScroll = () => {
    setIsScrollBlocked(true);
    document.body.classList.add('body-scroll-lock');
  };

  const allowScroll = () => {
    setIsScrollBlocked(false);
    document.body.classList.remove('body-scroll-lock');
  };

  return [blockScroll, allowScroll];
};

export default useScrollBlock;

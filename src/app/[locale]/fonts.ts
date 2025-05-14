import { Jura } from 'next/font/google';

const jura = Jura({
  weight: ['400', '500', '600', '700'],
  subsets: [
    'cyrillic',
    'cyrillic-ext',
    'greek',
    'greek-ext',
    'kayah-li',
    'latin',
    'latin-ext',
    'vietnamese',
  ],
  display: 'swap',
  variable: '--jura-font',
});

export { jura };

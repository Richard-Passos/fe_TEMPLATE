import { Inter, Roboto_Slab } from 'next/font/google';
import localFont from 'next/font/local';

const titleFont = Inter({
  subsets: ['latin']
});

const displayFont = localFont({
  src: '../public/fonts/Archivo-Variable.ttf',
  display: 'swap'
});

const monospaceFont = Roboto_Slab({
  subsets: ['latin']
});

const fonts = {
  title: titleFont,
  display: displayFont,
  monospace: monospaceFont
};

export default fonts;
export { titleFont, displayFont, monospaceFont };

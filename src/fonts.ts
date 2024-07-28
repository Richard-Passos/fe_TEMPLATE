import { Roboto_Slab } from 'next/font/google';
import localFont from 'next/font/local';

const titleFont = localFont({
  src: '../public/fonts/ClashDisplay-Variable.ttf',
  display: 'swap'
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

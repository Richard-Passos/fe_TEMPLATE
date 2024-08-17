const locales = [
  { label: 'English', value: 'en' },
  { label: 'Português', value: 'pt' }
] as const;

const defaultLocale = locales[0];

export default locales;
export { defaultLocale };

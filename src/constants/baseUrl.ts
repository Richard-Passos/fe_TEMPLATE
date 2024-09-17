import environment from './environment';

const baseUrl =
  environment === 'production'
    ? `${process.env.PRODUCTION_PROTOCOL}://${process.env.VERCEL_URL}`
    : (process.env.DEVELOPMENT_URL ?? '');

export default baseUrl;

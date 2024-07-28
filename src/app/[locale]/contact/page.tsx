import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { forwardRef } from 'react';

import { ContactTemplate } from '@/components/templates';

import { LayoutParams } from '../layout';

type ContactPageOwnProps = {};

type ContactPageParams = LayoutParams;

type ContactPageProps = ContactPageOwnProps & ContactPageParams;

const ContactPage = ({ params: { locale } }: ContactPageProps) => {
  unstable_setRequestLocale(locale);

  return <ContactTemplate namespace='pages.contact' />;
};

const generateMetadata = async ({ params: { locale } }: ContactPageParams) => {
  const t = await getTranslations({
    locale,
    namespace: 'pages.contact.metadata'
  });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description')
    }
  };
};

export default forwardRef(ContactPage);
export { generateMetadata };
export type { ContactPageProps, ContactPageParams };

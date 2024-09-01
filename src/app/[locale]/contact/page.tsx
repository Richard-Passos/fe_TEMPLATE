import { useMessages, useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { ServicesBlockProps } from '@/components/organisms/Blocks/Services';
import { PageTemplate } from '@/components/templates';
import { get, keys } from '@/utils';

import { LayoutParams } from '../layout';

type ContactPageOwnProps = {};

type ContactPageParams = LayoutParams;

type ContactPageProps = ContactPageOwnProps & ContactPageParams;

const ContactPage = ({ params: { locale } }: ContactPageProps) => {
  unstable_setRequestLocale(locale);

  const t = useTranslations('pages.contact'),
    gt = useTranslations(),
    messages = useMessages() as unknown as IntlMessages;

  return (
    <PageTemplate
      blocks={[
        {
          type: 'ContactForm',
          theme: 'dark',
          id: 'contactForm',
          transitionProps: {
            reverse: true,
            'data-theme': 'light'
          } as ServicesBlockProps['transitionProps'],
          data: {
            title: t.rich('blocks.contactForm.title'),
            optionalLabel: t.rich('blocks.contactForm.optionalLabel'),
            to: {
              label: t.rich('blocks.contactForm.to.label'),
              subject: t('blocks.contactForm.to.subject', {
                name: gt('personal.name.first')
              }),
              email: gt('personal.email')
            },
            messages: {
              loading: t('blocks.contactForm.messages.loading'),
              success: t('blocks.contactForm.messages.success'),
              error: t('blocks.contactForm.messages.error')
            },
            fields: {
              name: {
                label: t('blocks.contactForm.fields.name.label'),
                placeholder: t('blocks.contactForm.fields.name.placeholder'),
                defaultValue: t('blocks.contactForm.fields.name.defaultValue'),
                errors: {
                  min: t('blocks.contactForm.fields.name.errors.min')
                }
              },
              email: {
                label: t('blocks.contactForm.fields.email.label'),
                placeholder: t('blocks.contactForm.fields.email.placeholder'),
                defaultValue: t('blocks.contactForm.fields.email.defaultValue'),
                errors: {
                  email: t('blocks.contactForm.fields.email.errors.email')
                }
              },
              subject: {
                label: t('blocks.contactForm.fields.subject.label'),
                placeholder: t('blocks.contactForm.fields.subject.placeholder'),
                defaultValue: t(
                  'blocks.contactForm.fields.subject.defaultValue'
                )
              },
              service: {
                label: t('blocks.contactForm.fields.service.label'),
                placeholder: t('blocks.contactForm.fields.service.placeholder'),
                defaultValue: t(
                  'blocks.contactForm.fields.service.defaultValue'
                ),
                data: keys(get(messages, 'services')).map((key) => ({
                  value: key,
                  label: gt(`services.${key}.title`)
                }))
              },
              message: {
                label: t('blocks.contactForm.fields.message.label'),
                placeholder: t(
                  'blocks.contactForm.fields.message.placeholder',
                  { name: gt('personal.name.first') }
                ),
                defaultValue: t(
                  'blocks.contactForm.fields.message.defaultValue'
                ),
                errors: {
                  min: t('blocks.contactForm.fields.message.errors.min'),
                  max: t('blocks.contactForm.fields.message.errors.max')
                }
              },
              submit: {
                label: t('blocks.contactForm.fields.submit.label')
              }
            }
          }
        },
        {
          type: 'Services',
          theme: 'dark',
          id: 'services',
          data: {
            title: keys(
              get(messages, 'pages.contact.blocks.services.title')
            ).map((key) => ({
              id: key,
              text: t.rich(`blocks.services.title.${key}`)
            })),
            description: t.rich('blocks.services.description'),
            subtitle: t.rich('blocks.services.subtitle'),
            image: {
              src: t('blocks.services.image.src'),
              alt: t('blocks.services.image.alt')
            },
            items: keys(get(messages, 'services')).map((key, i) => ({
              id: `· ${(i + 1).toString().padStart(2, '0')}`,
              title: gt(`services.${key}.title`),
              description: gt(`services.${key}.description`)
            })),
            action: {
              label: t('blocks.services.action.label')
            }
          }
        }
      ]}
      hero={{
        type: 'Secondary',
        theme: 'light',
        id: 'hero',
        data: {
          title: t.rich('hero.title')
        }
      }}
    />
  );
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

export default ContactPage;
export { generateMetadata };
export type { ContactPageProps, ContactPageParams };

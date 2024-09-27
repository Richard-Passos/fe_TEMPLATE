import { Icon, Text, Title } from '@/components/atoms';
import { EnvelopeIcon, LocationIcon } from '@/components/atoms/Icon/icons';
import { Action } from '@/components/molecules';
import Logo from '@/components/organisms/Logo';
import { serialize } from '@/utils';
import { footerApi, getLocale, personalApi } from '@/utils/actions';

const FooterContentOrganism = async () => {
  const locale = await getLocale();

  const [footerRes, personalRes] = await Promise.all([
    footerApi.get({ locale }),
    personalApi.get({ locale })
  ]);

  if (!footerRes.ok) return null;

  const footer = footerRes.data,
    personal = personalRes.ok ? personalRes.data : undefined;

  const socials = personal?.socials;

  return (
    <>
      <section className='grid w-full gap-lg px-[5%] py-2xl sm:grid-cols-3'>
        <Title order={2}>{serialize(footer.cta.title)}</Title>

        <section className='flex max-w-sm gap-sm'>
          <LocationIcon className='size-10 shrink-0 text-primary-filled' />

          <section className='py-xs'>
            <Title
              component='h3'
              order={6}
            >
              {serialize(footer.location.title)}
            </Title>

            <Text className='mt-xs leading-relaxed text-dimmed'>
              {serialize(footer.location.description)}
            </Text>
          </section>
        </section>

        <section className='flex max-w-sm gap-sm'>
          <EnvelopeIcon className='size-10 shrink-0 text-primary-filled' />

          <section className='py-xs'>
            <Title
              component='h3'
              order={6}
            >
              {serialize(footer.contact.title)}
            </Title>

            <Text className='mt-xs leading-relaxed text-dimmed'>
              {serialize(footer.contact.description)}
            </Text>
          </section>
        </section>
      </section>

      <section className='flex w-full flex-wrap items-center justify-between border border-x-0 border-b-0 px-[5%] py-md'>
        <Logo />

        <Text
          className='text-xs text-dimmed'
          component='small'
        >
          {serialize(footer.madeBy, {
            link: {
              className: 'text-inherit'
            }
          })}
        </Text>

        <section className='flex items-center gap-1'>
          {socials?.map((d) => (
            <Action
              aria-label={d.label}
              as='link'
              className='text-dimmed'
              color='dark'
              href={d.href}
              isIconOnly
              key={d.id}
              variant='subtle'
            >
              <Icon
                className='size-2/3'
                src={d.icon}
              />
            </Action>
          ))}
        </section>
      </section>
    </>
  );
};

export default FooterContentOrganism;

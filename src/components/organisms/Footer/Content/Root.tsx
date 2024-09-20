import { Icon, LocalTime, Text, Title } from '@/components/atoms';
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
    <div className='relative z-10 flex w-9/10 grow flex-col'>
      <section className='mb-xl pt-[--section-spacing-md]'>
        <Title
          className='max-w-xs font-semibold'
          component='h3'
          order={6}
        >
          {serialize(footer.cta.subtitle)}
        </Title>

        <Title
          className={`max-w-xs break-words uppercase leading-none sm:max-w-sm`}
          component='h2'
          order={3}
        >
          {serialize(footer.cta.title)}
        </Title>

        <div className='mt-md flex flex-wrap items-center gap-xs'>
          <Action>{footer.cta.action.label}</Action>

          {socials?.map((data) => (
            <Action
              aria-label={data.label}
              as='link'
              href={data.href}
              isIconOnly
              key={data.href}
              variant='default'
            >
              <Icon
                className='absolute size-2/3'
                src={data.icon}
              />
            </Action>
          ))}
        </div>
      </section>

      <div
        className={`mt-auto flex gap-lg max-lg:gap-x-sm max-md:flex-col-reverse`}
      >
        <Logo
          className={`mt-auto h-auto w-full [&_svg]:size-full`}
          style={{
            '--button-hover': 'transparent',
            '--button-padding-x': '0px'
          }}
          variant='secondary'
        />

        <section>
          <Title
            component='p'
            order={6}
          >
            {personal?.location.country}
            &nbsp;
            {footer.locationSeparator}
            &nbsp;
            {personal?.location.state}
            &nbsp;
            {footer.locationSeparator}
            &nbsp;
            <LocalTime />
          </Title>

          <section className='mt-sm flex max-w-sm flex-col gap-xs'>
            {serialize(footer.description)}
          </section>
        </section>
      </div>

      <section
        className={`flex justify-center py-sm max-sm:flex-col sm:justify-between`}
      >
        <Text
          className={`max-w-xs text-xs max-sm:text-center`}
          component='small'
        >
          {serialize(footer.copyright)}
        </Text>

        <Text
          className={`max-w-xs text-center text-xs sm:text-end`}
          component='small'
        >
          {serialize(footer.madeBy)}
        </Text>
      </section>
    </div>
  );
};

export default FooterContentOrganism;

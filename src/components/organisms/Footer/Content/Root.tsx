import { yFullScrollAnim } from '@/animations/scroll';
import {
  Icon,
  Lines,
  LocalTime,
  ScrollAnimate,
  Text,
  Title
} from '@/components/atoms';
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
            className={`
              max-w-xs break-words uppercase leading-none

              sm:max-w-sm
            `}
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

        <div className={`
          mt-auto flex gap-lg

          max-lg:gap-x-sm

          max-md:flex-col-reverse
        `}>
          <Logo
            className={`
              mt-auto h-auto w-full

              [&_svg]:size-full
            `}
            style={{
              '--button-hover': 'transparent',
              '--button-padding-x': '0px'
            }}
            variant='secondary'
          />

          <section>
            <Title
              className='mt-auto w-fit py-sm'
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

            <section className='flex max-w-sm flex-col gap-xs'>
              {serialize(footer.description)}
            </section>
          </section>
        </div>

        <section className={`
          flex justify-center py-sm

          max-sm:flex-col

          sm:justify-between
        `}>
          <Text className={`
            text-sm font-medium

            max-sm:text-center
          `}>
            {serialize(footer.copyright)}
          </Text>

          <Text className={`
            text-center text-sm font-medium

            sm:text-end
          `}>
            {serialize(footer.madeBy)}
          </Text>
        </section>
      </div>

      <div className={`
        absolute inset-[15%] flex items-center justify-center overflow-hidden
        rounded-lg
      `}>
        <ScrollAnimate config={yFullScrollAnim}>
          <Lines className={`
            top-auto h-screen !text-border opacity-60 translate-y-0

            [background-size:83.333px_66.666px]
          `} />
        </ScrollAnimate>

        <span className='absolute inset-0 rounded-inherit border opacity-60' />
      </div>
    </>
  );
};

export default FooterContentOrganism;

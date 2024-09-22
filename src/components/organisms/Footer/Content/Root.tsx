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

  return <div className='w-full'></div>;
};

export default FooterContentOrganism;

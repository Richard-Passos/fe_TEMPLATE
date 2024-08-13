import { Section } from '@/components/organisms';
import { PrimaryHero } from '@/components/organisms/Heros';
import { ExtractPrefix, Namespace } from '@/types';

type ContactTemplateOrganismProps = {
  namespace: ExtractPrefix<Namespace, 'pages.'>;
};

const ContactTemplateOrganism = ({
  namespace
}: ContactTemplateOrganismProps) => {
  return (
    <>
      <PrimaryHero
        namespace={`${namespace}.hero`}
        theme='dark'
      />

      <Section theme='light' />
    </>
  );
};
export default ContactTemplateOrganism;
export type { ContactTemplateOrganismProps };

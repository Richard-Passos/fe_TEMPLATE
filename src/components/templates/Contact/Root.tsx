import { Section } from '@/components/organisms';
import { HighImpactHero } from '@/components/organisms/Heros';

type ContactTemplateOrganismProps = {
  namespace: ExtractPrefix<Namespace, 'pages.'>;
};

const ContactTemplateOrganism = ({
  namespace
}: ContactTemplateOrganismProps) => {
  return (
    <>
      <HighImpactHero
        bg='black'
        namespace={`${namespace}.hero`}
        theme='dark'
      />

      <Section
        bg='white'
        theme='light'
      />
    </>
  );
};
export default ContactTemplateOrganism;
export type { ContactTemplateOrganismProps };

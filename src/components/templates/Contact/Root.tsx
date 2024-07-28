import { HighImpactHero } from '@/components/organisms/Heros';

type ContactTemplateOrganismProps = {
  namespace: ExtractPrefix<Namespace, 'pages.'>;
};

const ContactTemplateOrganism = ({
  namespace
}: ContactTemplateOrganismProps) => {
  return <HighImpactHero namespace={`${namespace}.hero`} />;
};
export default ContactTemplateOrganism;
export type { ContactTemplateOrganismProps };

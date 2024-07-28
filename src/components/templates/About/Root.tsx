import { HighImpactHero } from '@/components/organisms/Heros';

type AboutTemplateOrganismProps = {
  namespace: ExtractPrefix<Namespace, 'pages.'>;
};

const AboutTemplateOrganism = ({ namespace }: AboutTemplateOrganismProps) => {
  return <HighImpactHero namespace={`${namespace}.hero`} />;
};
export default AboutTemplateOrganism;
export type { AboutTemplateOrganismProps };

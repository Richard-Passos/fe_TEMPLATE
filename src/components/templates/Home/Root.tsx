import { HighImpactHero } from '@/components/organisms/Heros';

type HomeTemplateOrganismProps = {
  namespace: ExtractPrefix<Namespace, 'pages.'>;
};

const HomeTemplateOrganism = ({ namespace }: HomeTemplateOrganismProps) => {
  return <HighImpactHero namespace={`${namespace}.hero`} />;
};
export default HomeTemplateOrganism;
export type { HomeTemplateOrganismProps };

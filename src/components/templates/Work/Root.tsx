import { HighImpactHero } from '@/components/organisms/Heros';

type WorkTemplateOrganismProps = {
  namespace: ExtractPrefix<Namespace, 'pages.'>;
};

const WorkTemplateOrganism = ({ namespace }: WorkTemplateOrganismProps) => {
  return <HighImpactHero namespace={`${namespace}.hero`} />;
};
export default WorkTemplateOrganism;
export type { WorkTemplateOrganismProps };

import { HighImpactHero } from '@/components/organisms/Heros';

type SingleProjectTemplateOrganismProps = {
  namespace: ExtractPrefix<Namespace, 'pages.'>;
};

const SingleProjectTemplateOrganism = ({
  namespace
}: SingleProjectTemplateOrganismProps) => {
  return <HighImpactHero namespace={`${namespace}.hero`} />;
};
export default SingleProjectTemplateOrganism;
export type { SingleProjectTemplateOrganismProps };

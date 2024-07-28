import { HighImpactHero } from '@/components/organisms/Heros';

type ProjectsTemplateOrganismProps = {
  namespace: ExtractPrefix<Namespace, 'pages.'>;
};

const ProjectsTemplateOrganism = ({
  namespace
}: ProjectsTemplateOrganismProps) => {
  return <HighImpactHero namespace={`${namespace}.hero`} />;
};
export default ProjectsTemplateOrganism;
export type { ProjectsTemplateOrganismProps };

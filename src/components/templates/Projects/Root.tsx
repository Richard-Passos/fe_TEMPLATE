import { Section } from '@/components/organisms';
import { HighImpactHero } from '@/components/organisms/Heros';

type ProjectsTemplateOrganismProps = {
  namespace: ExtractPrefix<Namespace, 'pages.'>;
};

const ProjectsTemplateOrganism = ({
  namespace
}: ProjectsTemplateOrganismProps) => {
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
export default ProjectsTemplateOrganism;
export type { ProjectsTemplateOrganismProps };

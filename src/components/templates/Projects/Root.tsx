import { Section } from '@/components/organisms';
import { PrimaryHero } from '@/components/organisms/Heros';

type ProjectsTemplateOrganismProps = {
  namespace: ExtractPrefix<Namespace, 'pages.'>;
};

const ProjectsTemplateOrganism = ({
  namespace
}: ProjectsTemplateOrganismProps) => {
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
export default ProjectsTemplateOrganism;
export type { ProjectsTemplateOrganismProps };

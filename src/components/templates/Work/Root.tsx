import { Section } from '@/components/organisms';
import { PrimaryHero } from '@/components/organisms/Heros';

type WorkTemplateOrganismProps = {
  namespace: ExtractPrefix<Namespace, 'pages.'>;
};

const WorkTemplateOrganism = ({ namespace }: WorkTemplateOrganismProps) => {
  return (
    <>
      <PrimaryHero
        namespace={`${namespace}.hero`}
        theme='light'
      />

      <Section theme='dark' />
    </>
  );
};
export default WorkTemplateOrganism;
export type { WorkTemplateOrganismProps };

import { Section } from '@/components/organisms';
import { HighImpactHero } from '@/components/organisms/Heros';

type WorkTemplateOrganismProps = {
  namespace: ExtractPrefix<Namespace, 'pages.'>;
};

const WorkTemplateOrganism = ({ namespace }: WorkTemplateOrganismProps) => {
  return (
    <>
      <HighImpactHero
        namespace={`${namespace}.hero`}
        theme='light'
      />

      <Section theme='dark' />
    </>
  );
};
export default WorkTemplateOrganism;
export type { WorkTemplateOrganismProps };

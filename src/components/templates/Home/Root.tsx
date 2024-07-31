import { Section } from '@/components/organisms';
import { HighImpactHero } from '@/components/organisms/Heros';

type HomeTemplateOrganismProps = {
  namespace: ExtractPrefix<Namespace, 'pages.'>;
};

const HomeTemplateOrganism = ({ namespace }: HomeTemplateOrganismProps) => {
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
export default HomeTemplateOrganism;
export type { HomeTemplateOrganismProps };

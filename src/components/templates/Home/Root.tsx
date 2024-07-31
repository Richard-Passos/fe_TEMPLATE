import { Section } from '@/components/organisms';
import { HighImpactHero } from '@/components/organisms/Heros';

type HomeTemplateOrganismProps = {
  namespace: ExtractPrefix<Namespace, 'pages.'>;
};

const HomeTemplateOrganism = ({ namespace }: HomeTemplateOrganismProps) => {
  return (
    <>
      <HighImpactHero
        bg='white'
        namespace={`${namespace}.hero`}
        theme='light'
      />

      <Section
        bg='black'
        theme='dark'
      />
    </>
  );
};
export default HomeTemplateOrganism;
export type { HomeTemplateOrganismProps };

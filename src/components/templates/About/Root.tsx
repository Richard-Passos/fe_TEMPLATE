import { Section } from '@/components/organisms';
import { HighImpactHero } from '@/components/organisms/Heros';

type AboutTemplateOrganismProps = {
  namespace: ExtractPrefix<Namespace, 'pages.'>;
};

const AboutTemplateOrganism = ({ namespace }: AboutTemplateOrganismProps) => {
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
export default AboutTemplateOrganism;
export type { AboutTemplateOrganismProps };

import { Section } from '@/components/organisms';
import { PrimaryHero } from '@/components/organisms/Heros';

type AboutTemplateOrganismProps = {
  namespace: ExtractPrefix<Namespace, 'pages.'>;
};

const AboutTemplateOrganism = ({ namespace }: AboutTemplateOrganismProps) => {
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
export default AboutTemplateOrganism;
export type { AboutTemplateOrganismProps };

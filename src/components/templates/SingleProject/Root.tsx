import { Section } from '@/components/organisms';
import { HighImpactHero } from '@/components/organisms/Heros';

type SingleProjectTemplateOrganismProps = {
  namespace: ExtractPrefix<Namespace, 'pages.'>;
  id: string;
};

const SingleProjectTemplateOrganism = ({
  namespace,
  id
}: SingleProjectTemplateOrganismProps) => {
  console.log(id);

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
export default SingleProjectTemplateOrganism;
export type { SingleProjectTemplateOrganismProps };

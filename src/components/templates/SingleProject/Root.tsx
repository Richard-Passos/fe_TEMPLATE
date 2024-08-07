import { Section } from '@/components/organisms';
import { PrimaryHero } from '@/components/organisms/Heros';

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
      <PrimaryHero
        namespace={`${namespace}.hero`}
        theme='dark'
      />

      <Section theme='light' />
    </>
  );
};
export default SingleProjectTemplateOrganism;
export type { SingleProjectTemplateOrganismProps };

import { Section } from '@/components/organisms';
import { PrimaryHero } from '@/components/organisms/Heros';
import { ExtractPrefix, Namespace } from '@/types';

type ErrorTemplateOrganismProps = {
  namespace: ExtractPrefix<Namespace, 'pages.'>;
  message?: string;
  reset?: () => void;
};

const ErrorTemplateOrganism = ({
  namespace,
  message,
  reset
}: ErrorTemplateOrganismProps) => {
  console.log(message);
  console.log(reset);

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
export default ErrorTemplateOrganism;
export type { ErrorTemplateOrganismProps };

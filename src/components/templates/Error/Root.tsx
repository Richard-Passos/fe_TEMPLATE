import { Section } from '@/components/organisms';
import { HighImpactHero } from '@/components/organisms/Heros';

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
export default ErrorTemplateOrganism;
export type { ErrorTemplateOrganismProps };

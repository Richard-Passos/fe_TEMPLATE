import { HighImpactHero } from '@/components/organisms/Heros';

type ErrorTemplateOrganismProps = {
  namespace: ExtractPrefix<Namespace, 'pages.'>;
  message?: string;
  reset?: () => void;
};

const ErrorTemplateOrganism = ({
  namespace,
  message
}: ErrorTemplateOrganismProps) => {
  return <HighImpactHero namespace={`${namespace}.hero`} />;
};
export default ErrorTemplateOrganism;
export type { ErrorTemplateOrganismProps };

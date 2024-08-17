import { ComponentType } from 'react';

import { Blocks } from '@/components/organisms';
import { SecondaryHero } from '@/components/organisms/Heros';
import { SecondaryHeroProps } from '@/components/organisms/Heros/Secondary';
import { Theme, TypeVariants } from '@/types';

type ErrorTemplateOrganismProps = {
  hero: SecondaryHeroProps;
  blocks?: TypeVariants<typeof Blocks>[];
  message?: string;
  reset?: () => void;
};

const ErrorTemplateOrganism = ({
  hero,
  blocks,
  message,
  reset
}: ErrorTemplateOrganismProps) => {
  console.log(message);
  console.log(reset);

  let lastTheme: Theme;

  return (
    <>
      <SecondaryHero {...hero} />

      {blocks?.map(({ type, theme, ...props }, i) => {
        const Block = Blocks[type] as ComponentType<any>;

        const Component = (
          <Block
            hasTransition={lastTheme !== theme}
            key={i}
            theme={theme}
            {...props}
          />
        );

        lastTheme = theme;

        return Component;
      })}
    </>
  );
};
export default ErrorTemplateOrganism;
export type { ErrorTemplateOrganismProps };

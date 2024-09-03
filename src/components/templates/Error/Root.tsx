import { ComponentType } from 'react';

import { Blocks } from '@/components/organisms';
import { SecondaryHero } from '@/components/organisms/Heros';
import { SecondaryHeroProps } from '@/components/organisms/Heros/Secondary';
import { Theme, TypeVariants } from '@/types';

type ErrorTemplateProps = {
  hero: SecondaryHeroProps;
  blocks?: TypeVariants<typeof Blocks>[];
};

const ErrorTemplate = ({ hero, blocks }: ErrorTemplateProps) => {
  let lastTheme: Theme;

  return (
    <>
      <SecondaryHero {...hero} />

      {blocks?.map(({ type, id, theme, ...props }) => {
        const Block = Blocks[type] as ComponentType<any>;

        const Component = (
          <Block
            hasTransition={lastTheme !== theme}
            key={id}
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
export default ErrorTemplate;
export type { ErrorTemplateProps };

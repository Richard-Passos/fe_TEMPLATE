import { ComponentType } from 'react';

import Blocks from '@/components/organisms/Blocks';
import Heros from '@/components/organisms/Heros';
import { Theme, TypeVariants } from '@/types';

type PageTemplateOrganismProps = {
  hero: TypeVariants<typeof Heros>;
  blocks?: TypeVariants<typeof Blocks>[];
};

const PageTemplateOrganism = ({ hero, blocks }: PageTemplateOrganismProps) => {
  let lastTheme: Theme;

  const Hero = Heros[hero.type] as ComponentType<any>;

  return (
    <>
      <Hero
        data={hero.data}
        theme={hero.theme}
      />

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
export default PageTemplateOrganism;
export type { PageTemplateOrganismProps };

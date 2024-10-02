import { Blocks, Heros } from '@/components/organisms';
import { Page } from '@/types';
import { cn } from '@/utils';

type PageTemplateProps = Pick<Page, 'hero' | 'blocks'>;

const PageTemplate = ({ hero, blocks }: PageTemplateProps) => {
  const { type: heroType, ...heroProps } = hero;

  const Hero = Heros[heroType];

  return (
    <>
      <Hero {...heroProps} />

      {blocks?.map(({ type, id, className, ...props }) => {
        const Block = Blocks[type];

        return (
          <Block
            className={cn(
              `last:pb-[--section-spacing-lg] has-[+[data-has-transition="true"]]:pb-[--section-spacing-lg]`,
              className
            )}
            id={id}
            key={id}
            {...props}
          />
        );
      })}
    </>
  );
};
export default PageTemplate;
export type { PageTemplateProps };

import { ComponentType } from 'react';

import { Blocks } from '@/components/organisms';
import SecondaryHero from '@/components/organisms/Heros/Secondary';
import { ErrorPage } from '@/types';

type ErrorTemplateProps = Pick<ErrorPage, 'hero' | 'blocks'>;

const ErrorTemplate = ({ hero, blocks }: ErrorTemplateProps) => {
  return (
    <>
      <SecondaryHero {...hero} />

      {blocks?.map(({ type, id, ...props }) => {
        const Block = Blocks[type] as ComponentType<any>;

        return (
          <Block
            key={id}
            {...props}
          />
        );
      })}
    </>
  );
};
export default ErrorTemplate;
export type { ErrorTemplateProps };

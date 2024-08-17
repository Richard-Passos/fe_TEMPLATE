import { useMessages, useTranslations } from 'next-intl';

import Blocks from '@/components/organisms/Blocks';
import { PrimaryHero } from '@/components/organisms/Heros';
import { ExtractPrefix, Namespace, Theme } from '@/types';
import { get, keys, normCompName } from '@/utils';

type HomeTemplateOrganismProps = {
  namespace: ExtractPrefix<Namespace, 'pages.'>;
};

const HomeTemplateOrganism = ({ namespace }: HomeTemplateOrganismProps) => {
  const t = useTranslations(namespace),
    messages = useMessages() as unknown as IntlMessages;

  const blockKeys = keys(get(messages, `${namespace}.blocks`));

  let lastTheme: Theme;

  return (
    <>
      <PrimaryHero namespace={`${namespace}.hero`} />

      {blockKeys.map((key) => {
        const Block =
          Blocks[normCompName(t(`blocks.${key}.type`)) as keyof typeof Blocks];

        const theme = t(`blocks.${key}.theme`) as Theme;

        const Component = (
          <Block
            hasTransition={lastTheme !== theme}
            key={key}
            namespace={`${namespace}.blocks.${key}`}
            theme={theme}
          />
        );

        lastTheme = theme;

        return Component;
      })}
    </>
  );
};
export default HomeTemplateOrganism;
export type { HomeTemplateOrganismProps };

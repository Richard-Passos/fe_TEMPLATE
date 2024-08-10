import { ButBlock, CtaTextBlock, ListPageBlock } from '@/components/organisms/Blocks';
import {
  PrimaryLayoutBlock,
} from '@/components/organisms/Blocks/Layout';
import { PrimaryHero } from '@/components/organisms/Heros';

type HomeTemplateOrganismProps = {
  namespace: ExtractPrefix<Namespace, 'pages.'>;
};

const HomeTemplateOrganism = ({ namespace }: HomeTemplateOrganismProps) => {
  return (
    <>
      <PrimaryHero
        namespace={`${namespace}.hero`}
        theme='light'
      />

      <PrimaryLayoutBlock
        data={{
          title: ['ABOUT', 'WORK'],
          description:
            'Every detail is an opportunity. Every line of code I write goes beyond mere functionality — they shape digital experiences that captivate. Discover the impact of a partnership that propels you to digital prominence.'
        }}
        id='scroll-to'
        theme='dark'
      />

      <ListPageBlock
        hasTransition={false}
        namespace='pages.home.blocks.listPage'
        theme='dark'
      />

      <ButBlock namespace='pages.home.blocks.but' theme='light' />

      <PrimaryLayoutBlock
        data={{
          title: ['ABOUT', 'ME'],
          description:
            "🤟 Hey — I'm Richard an awesome full stack developer based in Brazil. When I'm not coding, you can catch me in the gaming world — I'm a huge fan, especially when it comes to rogue-like games."
        }}

        hasTransition={false}
        id='scroll-to'
        theme='light'
      />

      <ListPageBlock
        hasTransition={false}
        namespace='pages.home.blocks.listPage'
        theme='light'
      />

      <CtaTextBlock
        namespace='pages.home.blocks.ctaText'
        theme='dark'
      />
    </>
  );
};
export default HomeTemplateOrganism;
export type { HomeTemplateOrganismProps };

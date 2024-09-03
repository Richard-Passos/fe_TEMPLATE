import SingleProjectAdjacents, {
  SingleProjectAdjacentsProps
} from './Adjacents';
import SingleProjectHero, { SingleProjectHeroProps } from './Hero';
import SingleProjectImages, { SingleProjectImagesProps } from './Images';

type SingleProjectTemplateProps = {
  hero: SingleProjectHeroProps;
  blocks: {
    images: SingleProjectImagesProps;
    adjacents: SingleProjectAdjacentsProps;
  };
};

const SingleProjectTemplate = ({
  hero,
  blocks
}: SingleProjectTemplateProps) => {
  return (
    <>
      <SingleProjectHero {...hero} />

      <SingleProjectImages {...blocks.images} />

      <SingleProjectAdjacents {...blocks.adjacents} />
    </>
  );
};
export default SingleProjectTemplate;
export type { SingleProjectTemplateProps };

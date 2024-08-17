import BoldCard from './Bold';
import DescriptionCard from './Description';
import LinkCard from './Link';
import MarqueeCard from './Marquee';
import ProjectCard from './Project';
import SimpleCard from './Simple';
import TimeCard from './Time';

const Cards = {
  Bold: BoldCard,
  Project: ProjectCard,
  Description: DescriptionCard,
  Link: LinkCard,
  Marquee: MarqueeCard,
  Simple: SimpleCard,
  Time: TimeCard
};

export default Cards;
export {
  BoldCard,
  ProjectCard,
  DescriptionCard,
  LinkCard,
  MarqueeCard,
  SimpleCard,
  TimeCard
};

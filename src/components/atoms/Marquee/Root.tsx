import Marquee, { type MarqueeProps } from 'react-fast-marquee';

type MarqueeAtomOwnProps = {};

type MarqueeAtomProps = MarqueeAtomOwnProps &
  Omit<MarqueeProps, keyof MarqueeAtomOwnProps>;

const MarqueeAtom = Marquee;

export default MarqueeAtom;
export type { MarqueeAtomProps };

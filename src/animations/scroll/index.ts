import lineLeftScrollAnim from './lineLeft';
import rotateLeftScrollAnim from './rotateLeft';
import rotateRightScrollAnim from './rotateRight';

const scrollAnimations = {
  lineLeft: lineLeftScrollAnim,
  rotateLeft: rotateLeftScrollAnim,
  rotateRight: rotateRightScrollAnim
};

export default scrollAnimations;
export { lineLeftScrollAnim, rotateLeftScrollAnim, rotateRightScrollAnim };

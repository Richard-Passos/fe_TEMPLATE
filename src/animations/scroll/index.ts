import imageYScrollAnim from './imageY';
import lineLeftScrollAnim from './lineLeft';
import rotateLeftScrollAnim from './rotateLeft';
import rotateRightScrollAnim from './rotateRight';
import yFullScrollAnim from './yFull';

const scrollAnimations = {
  imageY: imageYScrollAnim,
  lineLeft: lineLeftScrollAnim,
  rotateLeft: rotateLeftScrollAnim,
  rotateRight: rotateRightScrollAnim,
  yFull: yFullScrollAnim
};

export default scrollAnimations;
export {
  imageYScrollAnim,
  lineLeftScrollAnim,
  rotateLeftScrollAnim,
  rotateRightScrollAnim,
  yFullScrollAnim
};

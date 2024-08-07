import PrimaryHero from './Primary';
import SecondaryHero from './Secondary';
import TertiaryHero from './Tertiary';

const Heros = {
  Primary: PrimaryHero,
  Tertiary: TertiaryHero,
  Secondary: SecondaryHero
};

export default Heros;
export { PrimaryHero, TertiaryHero, SecondaryHero };

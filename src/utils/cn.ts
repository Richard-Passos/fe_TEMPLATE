import { extendTailwindMerge } from 'tailwind-merge';

const cn = extendTailwindMerge({
  extend: {
    theme: {
      spacing: ['9/10', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      borderRadius: ['inherit']
    }
  }
});

export default cn;

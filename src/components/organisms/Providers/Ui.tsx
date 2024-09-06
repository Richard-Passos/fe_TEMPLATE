import { MantineProvider, MantineProviderProps } from '@mantine/core';

import theme, { defaultColorScheme } from '@/styles/theme';

type UiProviderOrganismOwnProps = {};

type UiProviderOrganismProps = UiProviderOrganismOwnProps &
  Omit<MantineProviderProps, keyof UiProviderOrganismOwnProps>;

const UiProviderOrganism = (props: UiProviderOrganismProps) => {
  return (
    <MantineProvider
      defaultColorScheme={defaultColorScheme}
      theme={theme}
      {...props}
    />
  );
};

export default UiProviderOrganism;
export type { UiProviderOrganismProps };

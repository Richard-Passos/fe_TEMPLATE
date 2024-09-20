import useBooleanContext from './useBoolean';
import useHeightContext from './useHeight';
import useThemeContext from './useTheme';

const hooksContexts = {
  useBoolean: useBooleanContext,
  useHeight: useHeightContext,
  useTheme: useThemeContext
};

export default hooksContexts;
export { useBooleanContext, useHeightContext, useThemeContext };

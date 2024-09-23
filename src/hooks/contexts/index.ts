import useBooleanContext from './useBoolean';
import useColorsContext from './useColors';
import useFormContext from './useForm';
import useHeightContext from './useHeight';
import useThemeContext from './useTheme';

const hooksContexts = {
  useBoolean: useBooleanContext,
  useColors: useColorsContext,
  useForm: useFormContext,
  useHeight: useHeightContext,
  useTheme: useThemeContext
};

export default hooksContexts;
export {
  useBooleanContext,
  useColorsContext,
  useFormContext,
  useHeightContext,
  useThemeContext
};

import useBooleanContext from './useBoolean';
import useFormContext from './useForm';
import useHeightContext from './useHeight';
import useThemeContext from './useTheme';

const hooksContexts = {
  useBoolean: useBooleanContext,
  useForm: useFormContext,
  useHeight: useHeightContext,
  useTheme: useThemeContext
};

export default hooksContexts;
export { useBooleanContext, useFormContext, useHeightContext, useThemeContext };

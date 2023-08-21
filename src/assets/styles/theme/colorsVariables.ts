import { Theme } from '@mui/material/styles';

export const getColorVariables = (theme: Theme) => ({
  '--primary-main': theme.palette.primary.main,
  '--primary-light': theme.palette.primary.light,
  '--primary-dark': theme.palette.primary.dark,
  '--primary-contrastText': theme.palette.primary.contrastText,

  '--secondary-main': theme.palette.secondary.main,
  '--secondary-light': theme.palette.secondary.light,
  '--secondary-dark': theme.palette.secondary.dark,
  '--secondary-contrastText': theme.palette.secondary.contrastText,

  '--error-main': theme.palette.error.main,
  '--error-light': theme.palette.error.light,
  '--error-dark': theme.palette.error.dark,
  '--error-contrastText': theme.palette.error.contrastText,

  '--warning-main': theme.palette.warning.main,
  '--warning-light': theme.palette.warning.light,
  '--warning-dark': theme.palette.warning.dark,
  '--warning-contrastText': theme.palette.warning.contrastText,

  '--info-main': theme.palette.info.main,
  '--info-light': theme.palette.info.light,
  '--info-dark': theme.palette.info.dark,
  '--info-contrastText': theme.palette.info.contrastText,

  '--success-main': theme.palette.success.main,
  '--success-light': theme.palette.success.light,
  '--success-dark': theme.palette.success.dark,
  '--success-contrastText': theme.palette.success.contrastText,

  '--text-primary': theme.palette.text.primary,
  '--text-secondary': theme.palette.text.secondary,
  '--text-disabled': theme.palette.text.disabled,

  '--background-default': theme.palette.background.default,
  '--background-paper': theme.palette.background.paper,

  '--action-active': theme.palette.action.active,
  '--action-hover': theme.palette.action.hover,
  '--action-hoverOpacity': theme.palette.action.hoverOpacity,
  '--action-selected': theme.palette.action.selected,
  '--action-selectedOpacity': theme.palette.action.selectedOpacity,
  '--action-disabled': theme.palette.action.disabled,
  '--action-disabledBackground': theme.palette.action.disabledBackground,
  '--action-disabledOpacity': theme.palette.action.disabledOpacity,
  '--action-focus': theme.palette.action.focus,
  '--action-focusOpacity': theme.palette.action.focusOpacity,
  '--action-activatedOpacity': theme.palette.action.activatedOpacity,
});

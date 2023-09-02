export const lightThemeColors = {
  mode: 'light' as const,
  primary: {
    main: '#105278', // оставляем как есть
    light: '#407DA1',
    dark: '#003552',
    contrastText: '#fafafa',
  },
  secondary: {
    main: '#FF9E80', // коралловый
    light: '#FFC1A1',
    dark: '#C6814B',
    contrastText: '#000000',
  },
  error: {
    main: '#f44336',
    light: '#FF6659',
    dark: '#D32F2F',
    contrastText: '#fafafa',
  },
  warning: {
    main: '#ff9800',
    light: '#ffb74d',
    dark: '#f57c00',
    contrastText: '#303030',
  },
  info: {
    main: '#2196f3',
    light: '#64b5f6',
    dark: '#1976d2',
    contrastText: '#303030',
  },
  success: {
    main: '#0BCDAD',
    light: '#a5d6a7',
    dark: '#009688',
    contrastText: '#000000',
  },
  text: {
    primary: '#303030',
    secondary: '#333',
    disabled: '#666',
  },
  background: {
    default: '#fafafa',
    paper: '#fff',
  },
  action: {
    active: '#000',
    hover: 'rgba(0, 0, 0, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(0, 0, 0, 0.14)',
    selectedOpacity: 0.14,
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.24,
  },
  custom: {
    highlight: '#F2F2F2', // немного светлее
  },
};

export const darkThemeColors = {
  mode: 'dark' as const,
  primary: {
    main: '#90CAF9', // Контрастный цвет для #105278
    light: '#BBDEFB',
    dark: '#64B5F6',
    contrastText: '#303030', // Тёмный текст будет хорошо виден на светлом фоне
  },
  secondary: {
    main: '#FFAB91', // светло-коралловый
    light: '#FFDDC1',
    dark: '#C97B71',
    contrastText: '#303030',
  },
  error: {
    main: '#e57373',
    light: '#ff8a80',
    dark: '#d54b4b',
    contrastText: '#303030',
  },
  warning: {
    main: '#ffb74d',
    light: '#ffd54f',
    dark: '#ffa726',
    contrastText: '#303030',
  },
  info: {
    main: '#64b5f6',
    light: '#90caf9',
    dark: '#42a5f5',
    contrastText: '#303030',
  },
  success: {
    main: '#058264f5',
    light: '#a5d6a7',
    dark: '#66bb6a',
    contrastText: '#303030',
  },
  text: {
    primary: '#fafafa',
    secondary: '#ccc',
    disabled: '#999',
    hint: '#666',
  },
  background: {
    default: '#303030',
    paper: '#424242',
  },
  action: {
    active: '#fff',
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(255, 255, 255, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.24,
  },

  custom: {
    highlight: '#424242', // немного темнее
  },
};

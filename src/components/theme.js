import { merge } from 'lodash';


export const getTheme = (inDarkMode) => {
  let theme = {
    colors: {
      ink: {
        full: '#000000',
        sixty: '#666666',
        forty: '#9999',
        twenty: '#cccccc'
      },
      background: '#dcdcdc',
      paper: '#ffffff'
    },
    whiteSpace: {
      xs: 4,
      sm: 8,
      md: 16,
      lg: 32,
      xl: 64
    }
  };

  if (inDarkMode) {
    theme.colors = merge({}, theme.colors, {
      ink: {
        full: '#ffffff',
        sixty: '#999999',
        forty: '#666666',
        twenty: '333333'
      },
      background: '#0f0f0f',
      paper: '#181818'
    });
  }

  return theme;
};

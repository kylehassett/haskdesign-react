export const getTheme = (inDarkMode) => {
  let theme = {
    colors: {
      background: 'rgb(14, 14, 14)',
      paper: 'rgb(23, 23, 23)',
      ink: 'rgb(151, 151, 151)'
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
    theme.colors = Object.assign({}, theme.colors, {
      background: 'rgb(14, 14, 14)',
      paper: 'rgb(23, 23, 23)',
      ink: 'rgb(151, 151, 151)'
    });
  }

  return theme;
};

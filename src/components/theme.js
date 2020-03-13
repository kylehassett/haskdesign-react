export const getTheme = (inDarkMode) => {
  let theme = {
    colors: {
      background: 'rgb(255, 255, 255)',
      paper: 'rgb(177, 177, 177)',
      ink: 'rgb(0, 0, 0)',
      primaryDark: '#69a6cc',
      primary: '#8ebdda',
      primaryLight: '#b4d3e7'
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
      background: 'rgb(15, 15, 15)',
      paper: 'rgb(24, 24, 24)',
      ink: 'rgb(218, 218, 218)',
      primaryDark: '#367399',
      primary: '#448fbe',
      primaryLight: '#69a6cc'
    });
  }

  return theme;
};

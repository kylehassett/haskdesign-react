export const getHeaderStyles = (theme, inDarkMode) => ({
  backgroundColor: inDarkMode ? theme.colors.paper : theme.colors.backgroundColor,
  'padding-top': '0 !important',
  'padding-bottom': '0 !important',
  'h1': {
    color: theme.colors.ink.full
  },
  li: {

  },
  '#uiColorModeSwitchArea': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    p: {
      display: 'inline',
      marginBottom: 0,
      marginRight: theme.whiteSpace.sm
    }
  }
});

export const getHeaderStyles = (theme) => ({
  backgroundColor: theme.colors.background,
  paddingTop: '0 !important',
  paddingBottom: '0 !important',
  '& h1': {
    color: theme.colors.ink.full
  },
  '#uiColorModeSwitchArea': {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    p: {
      display: 'inline',
      marginBottom: 0,
      marginRight: theme.whiteSpace.sm
    }
  },
  '.active': {
    backgroundColor: theme.colors.ink.full
  }
});

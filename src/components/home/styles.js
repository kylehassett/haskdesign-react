export const getHomeStyles = (theme) => ({
  backgroundColor: theme.colors.paper,
  '.row': {
    height: '33%'
  },
  p: {
    color: theme.colors.ink.sixty,
    fontWeight: 900,
    lineHeight: 1,
    margin: 0,
    padding: 0,
    '@media(min-width: 0px)': {
      fontSize: 68
    },
    '@media(min-width: 576px)': {
      fontSize: 100
    },
    '@media(min-width: 720px)': {
      fontSize: 140
    },
    '@media(min-width: 960px)': {
      fontSize: 190
    },
    '@media(min-width: 1140px)': {
      fontSize: 220
    }
  }
});

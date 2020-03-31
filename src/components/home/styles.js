export const getHomeStyles = (theme) => ({
  backgroundColor: theme.colors.background,
  p: {
    color: theme.colors.ink.sixty,
    fontWeight: 900,
    lineHeight: 1,
    margin: 0,
    padding: 0,
    '@media(min-width: 0px)': {
      fontSize: 48
    },
    '@media(min-width: 576px)': {
      fontSize: 64
    },
    '@media(min-width: 720px)': {
      fontSize: 150
    },
    '@media(min-width: 960px)': {
      fontSize: 190
    },
    '@media(min-width: 1140px)': {
      fontSize: 220
    }
  }
});

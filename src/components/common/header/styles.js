export const getHeaderStyles = (theme) => ({
  backgroundColor: theme.colors.ink.full,
  "h1": {
    color: theme.colors.paper
  },
  "#uiColorModeSwitchArea": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    p: {
      display: "inline",
      marginBottom: 0,
      marginRight: theme.whiteSpace.sm
    }
  }
});

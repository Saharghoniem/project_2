

const getDesignTokens = (mode) => ({
  palette: {
    // @ts-ignore
    mode,
    ...(mode === "light"
      ? {
  

          favColor: {
            main: "rgb(247, 247, 247)",
          },
        }
      : {
        
          favColor: {
            main:  null,
          },
        }),
  },
});

export default getDesignTokens;

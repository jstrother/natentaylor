module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
            @import "./src/scss/_variables.scss";
          `,
      },
    },
  },
};

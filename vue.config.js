const scss = '@/scss/';

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
            @import "${scss}_normalize.scss";
            @import "${scss}_variables.scss";
          `,
      },
    },
  },
};

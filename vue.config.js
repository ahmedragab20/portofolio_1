module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/portofolio_1/" : "/",
  css: {
    loaderOptions: {
      sass: {
        data: `
            @import "@/styles/_global.scss";
        `,
      },
    },
  },
};

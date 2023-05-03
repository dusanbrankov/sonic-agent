const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/assets/sass/");
  eleventyConfig.addWatchTarget("./src/assets/js/");
  eleventyConfig.addPassthroughCopy("./src/assets/fonts");
  eleventyConfig.addPassthroughCopy("./src/assets/img");
  eleventyConfig.addPassthroughCopy("./src/assets/js");

  eleventyConfig.setBrowserSyncConfig({
    port: 3000
  });

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  const slugify = require("slugify");
  eleventyConfig.addFilter("slug", (str) => {
    if (!str) {
      return;
    };
    return slugify(str, {
      lower: true,
      strict: true,
      remove: /["]/g,
    });
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
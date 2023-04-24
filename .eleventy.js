const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/scss/');
  eleventyConfig.addWatchTarget('./src/js/');
  eleventyConfig.addPassthroughCopy("./src/js/");
  eleventyConfig.addPassthroughCopy("./src/assets/");

  eleventyConfig.setBrowserSyncConfig({
    port: 3000
  });

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

  const slugify = require('slugify');
  eleventyConfig.addFilter('slug', (str) => {
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
      input: 'src',
      output: 'dist',
    },
  };
};
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addWatchTarget('./src/css/tailwind.css');
  eleventyConfig.addPassthroughCopy('./src/img');

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  return {
    dir: {
      input: 'src',
      output: 'public'
    }
  }
}
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css/"); //Will copy assests to the build folder
  eleventyConfig.addWatchTarget("./src/css/"); //Will watch for changes in the folder, then build the page.
  return {
    dir: {
      input: "src",
      output: "public"
    },
  };
};

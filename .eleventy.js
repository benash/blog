// https://nodejs.org/api/util.html#util_util_inspect_object_options
const util = require("util");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = config => {
  config.addFilter("inspect", (content, depth=2) => util.inspect(content, { depth }));
  config.addPassthroughCopy("css");
  config.addPlugin(syntaxHighlight);
};

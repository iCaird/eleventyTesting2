import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";


export default (config) => {

    config.addPassthroughCopy("src/style");
    config.addPassthroughCopy("src/sketches");
    config.addPassthroughCopy("src/mathjax-init.js");

    const markdownLibrary = markdownIt({ html: true }).use(markdownItAnchor, {
        permalink: markdownItAnchor.permalink.ariaHidden({}),
        slugify: s => s.toLowerCase().replace(/[^\w]+/g, '-')
    });

    config.setLibrary("md", markdownLibrary);

    return { 
        dir : {
            input: "src",
            out: "_site"
        }
    }
}

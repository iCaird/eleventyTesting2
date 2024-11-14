import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

export default (config) => {
    
    config.addPlugin(EleventyHtmlBasePlugin);

    config.addPassthroughCopy("src/style");
    config.addPassthroughCopy("src/sketches");
    config.addPassthroughCopy("src/mathjax-init.js");

    const markdownLibrary = markdownIt({ html: true }).use(markdownItAnchor, {
        permalink: markdownItAnchor.permalink.ariaHidden({}),
        slugify: s => s.toLowerCase().replace(/[^\w]+/g, '-')
    });

    config.setLibrary("md", markdownLibrary);


    return { 
        pathPrefix: "/eleventyTesting2/",
        dir : {
            input: "src",
            out: "_site"
        }
    }
}

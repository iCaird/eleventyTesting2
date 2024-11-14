import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import clean from "eleventy-plugin-clean";

export default (config) => {
    
    config.addPlugin(EleventyHtmlBasePlugin);
    config.addPlugin(clean);

    config.addPassthroughCopy("src/style");
    config.addPassthroughCopy("src/sketches");
    config.addPassthroughCopy("src/mathjax-init.js");

    const markdownLibrary = markdownIt({ html: true }).use(markdownItAnchor, {
        permalink: false,
        slugify: s => s.toLowerCase().replace(/[^\w]+/g, '-')
    });



    config.setLibrary("md", markdownLibrary);


    return { 
        pathPrefix: "/",
        dir : {
            input: "src",
            out: "_site"
        }
    }
}

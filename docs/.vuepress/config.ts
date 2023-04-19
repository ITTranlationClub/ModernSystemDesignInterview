import { defineUserConfig } from "vuepress";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import theme from "./theme.js";
import MarkdownItMathjax3 from "markdown-it-mathjax3";

export default defineUserConfig({
  base: "/model-system-design/",

  title: "Model System Design",
  description: "现代系统设计课程",

  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/model-system-design/img/fastRequest.svg",
      },
    ],
    ["script", { src: "//at.alicdn.com/t/c/font_2601581_9pz0ama5329.js" }],
    ["script", { src: "/model-system-design/js/baidu.js" }],
	['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css' }],
	['link', { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css" }]
  ],
  
  extendsMarkdown: (md) => {
	  md.set({ html: true });
      md.use(MarkdownItMathjax3);
  },

  markdown: {
    code: {
      lineNumbers: 10,
    },
  },

  locales: {
    "/": {
      lang: "zh-CN",
    },
  },

  theme,

  plugins: [
    docsearchPlugin({
      appId: "8FRYEU6KK8",
      apiKey: "84f513df1e83406ba42179da778d87b4",
      indexName: "dromara-fast-request",
      locales: {
        "/": {
          placeholder: "搜索文档",
          translations: {
            button: {
              buttonText: "搜索文档",
            },
          },
        },
        "/en": {
          placeholder: "Search Documentation",
          translations: {
            button: {
              buttonText: "Search Documentation",
            },
          },
        },
      },
    }),
  ],

  pagePatterns: ["**/*.md", "!*.snippet.md", "!.vuepress", "!node_modules"],
});

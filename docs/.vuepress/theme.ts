import { getDirname, path } from "@vuepress/utils";
import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar.js";
import { enSidebar, zhSidebar } from "./sidebar.js";

const __dirname = getDirname(import.meta.url);

export default hopeTheme({
  logo: "/img/logo/logo.svg",

  repo: "https://github.com/ITTranlationClub/ModernSystemDesignInterview",
  docsDir: "docs",
  docsBranch: "main",

  copyright: "Copyright © 2023-ITTranslationClub",
  displayFooter: true,

  pageInfo: false,

  darkmode: "enable",
  themeColor: {
    pink: "#f26d6d",
    lightBlue: "#07c3f2",
    orange: "#fc801d",
    blue: "#087cfa",
    red: "#fe2857",
  },

  iconAssets: "//at.alicdn.com/t/c/font_2601581_9pz0ama5329.css",

  locales: {
    "/": {
      footer:
        "主题使用 <a target='blank' href='https://theme-hope.vuejs.press/zh/'>vuepress-theme-hope</a>",

      navbar: zhNavbar,
      sidebar: zhSidebar,
    },
  },

  plugins: {
    comment: {
      provider: "Giscus",
      repo: "ITTranlationClub/ModernSystemDesignInterview",
      repoId: "R_kgDOI7RqFg",
      category: "General",
      categoryId: "DIC_kwDOI7RqFs4CV3Sg",
    },

    components: {
      components: ["Badge", "BiliBili", "SiteInfo"],
      rootComponents: {
        addThis: "ra-617a48e0d1826cc4",
        notice: [
          {
            path: "/",
            title: "最新计划",
            content:
              '<ul><li>系统设计模块即将更新</li><li>如何设计短链系统</li><li>如何设计\'知乎\'</ul>',
            actions: [
              {
                text: "马上安排",
                link: "/guide/about.html",
                type: "primary",
              },
            ],
            showOnce: true,
            key: "2023.1.3",
          },
        ],
      },
    },

    mdEnhance: {
      align: true,
      chart: true,
      codetabs: true,
      container: true,
      flowchart: true,
      imgLazyload: true,
      include: {
        resolvePath: (file) =>
          file.startsWith("@src")
            ? file.replace("@src", path.resolve(__dirname, ".."))
            : file,
      },
      mark: true,
      tasklist: true,
    },
  },
});

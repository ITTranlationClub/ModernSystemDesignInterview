import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  {
    text: "Get start",
    link: "/en/guide/getstarted/start",
    icon: "start1",
  },
  {
    text: "Features",
    link: "/en/guide/features",
    icon: "featuresNew",
  },
  {
    text: "Script",
    link: "/en/guide/script",
    icon: "code-box-fill",
  },
  {
    text: "What's New",
    link: "/en/guide/history",
    icon: "changelog",
  },
  {
    text: "Buy",
    link: "/en/guide/buy",
    icon: "buy",
  },
  {
      text: "Version",
      link: "/en/guide/versionCompare",
      icon: "versionCompare",
    },
    {
        text: "🔥 Teamwork",
        link: "/en/guide/teamwork",
    //     icon: "teamwork",
      },
      {
          text: "More",
          children:["/en/guide/concatGroup","/guide/faq"]
        },

]);

export const zhNavbar = navbar([
  {
    text: "快速开始",
    link: "/guide/01Introduction/01Introduction",
    icon: "start1",
  }
]);

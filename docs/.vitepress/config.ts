import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/",
  title: "VPTest",
  themeConfig: {
    algolia: {
      appId: "test",
      apiKey: "test",
      translations: {
        button: {
          buttonText: "搜索文档",
          buttonAriaLabel: "搜索文档",
        },
        },
      },
    },
});

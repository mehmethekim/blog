import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Mehmet's Notes", // TODO: confirm site title
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "mehmethekim.github.io/blog",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      typography: {
        header: "Inconsolata",
        body: "Inconsolata",
        code: "Inconsolata",
      },
      colors: {
        lightMode: {
          light: "#d5d6db",        // TokyoNight Day bg
          lightgray: "#b4b5b9",
          gray: "#6172b0",
          darkgray: "#3760bf",
          dark: "#3760bf",
          secondary: "#2e7de9",    // blue accent
          tertiary: "#587539",     // green hover
          highlight: "rgba(46,125,233,0.08)",
          textHighlight: "#8c6c3e44",
        },
        darkMode: {
          light: "#1a1b2e",        // TokyoNight bg
          lightgray: "#292e42",    // surface
          gray: "#565f89",         // comment/muted
          darkgray: "#a9b1d6",     // subtext
          dark: "#c0caf5",         // main text
          secondary: "#7aa2f7",    // blue links
          tertiary: "#9ece6a",     // green hover
          highlight: "rgba(122,162,247,0.10)",
          textHighlight: "#e0af6844",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config

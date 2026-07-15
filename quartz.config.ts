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
        header: "Inter",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#eff1f5",        // Catppuccin Latte base
          lightgray: "#ccd0da",    // Latte surface1
          gray: "#8c8fa1",         // Latte overlay1
          darkgray: "#4c4f69",     // Latte text
          dark: "#4c4f69",         // Latte text
          secondary: "#8839ef",    // Latte mauve
          tertiary: "#04a5e5",     // Latte sky
          highlight: "rgba(136, 57, 239, 0.08)",
          textHighlight: "#df8e1d44", // Latte yellow tint
        },
        darkMode: {
          light: "#1e1e2e",        // Catppuccin Mocha base
          lightgray: "#313244",    // Mocha surface1
          gray: "#6c7086",         // Mocha overlay1
          darkgray: "#a6adc8",     // Mocha subtext1
          dark: "#cdd6f4",         // Mocha text
          secondary: "#cba6f7",    // Mocha mauve
          tertiary: "#89dceb",     // Mocha sky
          highlight: "rgba(203, 166, 247, 0.10)",
          textHighlight: "#f9e2af33", // Mocha yellow tint
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

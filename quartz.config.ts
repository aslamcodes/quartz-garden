import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "aslamnotes",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "notes.aslamcodes.in",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
          lightMode: {
              light: "#e0def4",          // surface1
              lightgray: "#cdd6f4",      // surface2
              gray: "#9ca0b0",           // overlay0
              darkgray: "#575268",       // base
              dark: "#1e1e2e",           // mantle
              secondary: "#569fba",      // blue
              tertiary: "#9ccfd8",       // teal
              highlight: "rgba(108, 153, 187, 0.15)",  // adjusted blue highlight
              textHighlight: "#f6c17788", // orange/yellow-ish highlight
          },
          darkMode: {
              light: "#1e1e2e",          // mantle
              lightgray: "#2f2e3e",      // base
              gray: "#6e6c7e",           // overlay1
              darkgray: "#cdd6f4",       // surface2
              dark: "#e0def4",           // surface1
              secondary: "#569fba",      // blue
              tertiary: "#9ccfd8",       // teal
              highlight: "rgba(108, 153, 187, 0.15)",  // same as lightMode
              textHighlight: "#f6c17788", // orange/yellow-ish
          },
      }
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

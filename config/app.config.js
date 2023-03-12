const _app_config = Object.freeze({
  domain: `${process.env.NEXT_PUBLIC_SITE_URL}`,
  siteUrl: `https://${process.env.NEXT_PUBLIC_SITE_URL}`,
});

/** @type {import("next").Metadata} */
const _app_metadata = {
  title: {
    default: "Pravasta Caraka",
    template: "%s - Pravasta Caraka",
  },
  description: `Web and mobile developer enthusiast.`,
  icons: {
    icon: [
      { url: "/static/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/static/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/static/favicon/favicon.ico",
    apple: [
      {
        url: "/static/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  themeColor: "#ffffff",
  manifest: "/static/favicon/site.webmanifest",
  authors: {
    name: "Pravasta Caraka Bramastagiri",
    url: "https://pravastacaraka.my.id",
  },
};

const _app_routes = Object.freeze([
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Achievements",
    href: "/achievements",
  },
  {
    title: "Blog",
    href: "/blog",
  },
]);

module.exports = { _app_config, _app_metadata, _app_routes };

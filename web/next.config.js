const sites = {
  korea: {
    locales: {
      en: {
        title: "Korean English",
        description: "This is the description for the first site.",
      },
      no: {
        title: "Korean Norwegian",
        description: "Første side.",
      },
    },
    domain: "koreatest.vercel.app",
  },
  angola: {
    locales: {
      en: {
        title: "Angola english",
        description: "This is the description for the second site.",
      },
      no: {
        title: "Angola Norwegian",
        description: "Second site norwegian.",
      },
    },
    domain: "angolatest.vercel.app",
  },
};
const siteKeys = Object.keys(sites);

const pseudoLocales = ["en", "no"];

module.exports = {
  publicRuntimeConfig: {
    sites,
    pseudoLocales,
  },
  i18n: {
    locales: siteKeys,
    defaultLocale: siteKeys[0],
    domains: siteKeys.map((siteKey) => ({
      domain: sites[siteKey].domain,
      defaultLocale: siteKey,
    })),
  },
  redirects: () => [
    {
      source: "/",
      destination: `/${pseudoLocales[0]}`,
      permanent: true,
    },
  ],
};

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import getConfig from "next/config";

export default function Home({ pseudoLocale }) {
  const { locales, locale, defaultLocale } = useRouter();
  const {
    publicRuntimeConfig: { sites, pseudoLocales },
  } = getConfig();

  const nextLocale = pseudoLocales.find(
    (otherLocale) => otherLocale !== pseudoLocale
  );
  const nextSiteNr = locale === "korea" ? 1 : 2;

  const siteAndLocale = sites[locale] && sites[locale].locales[pseudoLocale];

  return (
    <div>
      <Head>
        <title>Multisite</title>
        <meta name="description" content="hei" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          {siteAndLocale
            ? siteAndLocale.title
            : `Site not found: '${locale}</strong>`}
        </h1>
        {siteAndLocale && <p>{siteAndLocale.description}</p>}

        <div>
          <div>
            <p>
              Currently: <strong>{locale}</strong>
            </p>
            <p>Go to: site/domain {nextSiteNr}</p>
          </div>

          <Link href={`/${nextLocale}`}>
            <a>
              <h3>
                Switch language (<code>pseudoLocale</code>)
              </h3>
              <p>
                Currently: <strong>{pseudoLocale}</strong>
              </p>
              <p>
                Switch locale to: <strong>{nextLocale}</strong>
              </p>
            </a>
          </Link>

          <div>
            <h3>Props</h3>
            <p>
              locale (useRouter):{" "}
              <code>
                {JSON.stringify({ locales, locale, defaultLocale }, null, 2)}
              </code>
            </p>
            <p>
              pseudoLocale:{" "}
              <code>
                {JSON.stringify({ pseudoLocales, pseudoLocale }, null, 2)}
              </code>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps({
  params: { pseudoLocale = "en" },
  locale = "korea",
}) {
  return {
    props: {
      pseudoLocale,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths({ locales }) {
  return {
    paths: [{ params: { pseudoLocale: "en" }, locale: "korea" }],
    fallback: true,
  };
}

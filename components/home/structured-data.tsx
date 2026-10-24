import { APP_STORE, CONTACT } from "@/components/home/brand";

const SITE = "https://emptea.xyz";

/** schema.org graph for search engines and AI answer engines. No price: it shows in the app. */
const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE}/#org`,
      name: "emptea studios",
      alternateName: "emptea",
      url: SITE,
      logo: `${SITE}/apple-icon`,
      email: CONTACT.replace("mailto:", ""),
      address: { "@type": "PostalAddress", addressCountry: "CH" },
      sameAs: [APP_STORE, "https://www.tiktok.com/@get.crank", "https://www.instagram.com/get.crank"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      name: "emptea",
      url: SITE,
      inLanguage: "en",
      publisher: { "@id": `${SITE}/#org` },
    },
    {
      "@type": "MobileApplication",
      "@id": `${SITE}/#crank`,
      name: "Crank",
      alternateName: "Crank: Gym & Workout Tracker",
      description:
        "Crank is a fast workout tracker for iPhone. Log sets in seconds, see every muscle you trained on a body map, track PRs, strength standards and weekly streaks, and compare with friends on leaderboards.",
      url: SITE,
      downloadUrl: APP_STORE,
      installUrl: APP_STORE,
      operatingSystem: "iOS 26",
      applicationCategory: "HealthApplication",
      applicationSubCategory: "Workout tracker",
      countryOfOrigin: { "@type": "Country", name: "Switzerland" },
      publisher: { "@id": `${SITE}/#org` },
      featureList: [
        "Fast set logging with templates and folders",
        "88 ready-made workout plans for gym, home and calisthenics",
        "Nearly 400 exercises with instructions",
        "Body map of trained muscles, front and back",
        "PR tracking and strength standards from beginner to elite",
        "Activity heatmap and weekly streaks",
        "Leaderboards and friends feed",
        "Share cards for workouts",
        "Rest timer as a Live Activity",
        "Home Screen and Lock Screen widgets, Controls",
        "Apple Health sync",
        "9 city themes",
        "Available in 28 languages",
      ],
      screenshot: [
        `${SITE}/screens/body-front.jpg`,
        `${SITE}/screens/plan-hub.jpg`,
        `${SITE}/screens/analytics-charts.jpg`,
        `${SITE}/screens/leaderboard-world.jpg`,
      ],
    },
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // static, trusted data
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

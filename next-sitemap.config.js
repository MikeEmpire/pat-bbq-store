/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://ptrainsbbq.com", // Replace with your actual domain
  generateRobotsTxt: true, // Generates robots.txt automatically
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/api/*"], // Exclude API routes if you have any

  // Custom transformation for specific pages
  transform: async (config, path) => {
    // Customize priority for important pages
    if (path === "/") {
      return {
        loc: path,
        changefreq: "daily",
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }

    if (path === "/menu" || path === "/bookus") {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.9,
        lastmod: new Date().toISOString(),
      };
    }

    // Default transformation
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};

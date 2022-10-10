import plugins from "./plugins.ts";

import type { Site } from "lume/core.ts";

export default function () {
  return (site: Site) => {
    // Configure the site
    site.use(plugins());

    // Add remote files
    const files = [
      "_includes/layouts/archive_result.njk",
      "_includes/layouts/archive.njk",
      "_includes/layouts/base.njk",
      "_includes/layouts/page.njk",
      "_includes/layouts/post.njk",
      "_includes/templates/post-details.njk",
      "_includes/templates/post-list.njk",
      "fonts/inter.woff2",
      "fonts/inter-italic.woff2",
      "posts/_data.yml",
      "_data.yml",
      "404.md",
      "about.md",
      "archive_result.tmpl.js",
      "archive.tmpl.js",
      "feed.tmpl.js",
      "feed.xml.njk",
      "index.njk",
      "main.js",
      "styles.css",
      "favicon.png",
    ];

    for (const file of files) {
      site.remoteFile(file, import.meta.resolve(`./src/${file}`));
    }
  };
}

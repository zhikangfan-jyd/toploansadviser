export const seo = (options) => {
  let head = {
    meta: []
  };
  let image_type = '';
  const imageTypes = {
    'jpg': 'image/jpg',
    'webp': 'image/webp',
    'svg': 'image/svg+xml',
    'jpeg': 'image/jpeg',
    'gif': 'image/gif',
    'png': 'image/png'
  };
  if (!options.img_type || options.img_type === '') {
    if (options.img) {
      let ext = options.img.split('.').pop();
      image_type = imageTypes[ext];
    }
  } else {
    image_type = options.img_type;
  }
  // All meta tags
  const metaTags = [
    // Global
    {name: "author", content: options.author || 'Toploansadviser.com'},
    {name: "publisher", content: options.url},
    {name: "apple-mobile-web-app-title", content: options.title},
    {name: "theme-color", content: options.theme_color || '#1f9a61'},
    {hid: 'keywords', name: "keywords", content: options.keywords},
    {hid: 'description', name: "description", content: options.description},
    // Facebook & LinkedIn
    {property: "og:title", content: options.title},
    {property: "og:description", content: options.description},
    {property: "og:type", content: options.type || "website"},
    {property: "og:url", content: options.url},
    {property: "og:image", content: options.img},
    {property: "og:image:width", content: options.img_size.width},
    {property: "og:image:height", content: options.img_size.height},
    {property: "og:locale", content: options.locale || 'en_us'},
    {property: 'og:image:alt', content: options.img_alt || options.title},
    {property: 'og:image:type', content: image_type},
    {property: "og:site_name", content: options.site_name || 'Toploansadviser.com'},

    // Twitter
    {name: "twitter:card", content: options.twitter_card || 'summary_large_image'},
    {name: "twitter:site", content: options.twitter || 'Toploansadviser.com'},
    {name: "twitter:creator", content: options.twitter || 'Toploansadviser.com'},
    {name: "twitter:title", content: options.title},
    {name: "twitter:description", content: options.description},
    {name: "twitter:image", content: image_type},
    {name: "twitter:image:width", content: options.img_size.width},
    {name: "twitter:image:height", content: options.img_size.height},
  ];

  // Add meta tags to head
  metaTags.forEach((tag) => {
    if (tag.content !== undefined && tag.content !== null) {
      if (tag.hasOwnProperty("name")) {
        head.meta.push({
          hid: tag.name,
          name: tag.name,
          content: tag.content,
        });
      } else if (tag.hasOwnProperty("property")) {
        head.meta.push({
          hid: tag.property,
          property: tag.property,
          content: tag.content,
        });
      }
    }
  });

  if (options.title !== null && options.title !== undefined) {
    head.title = options.title;
  }

  if (options.script !== null && options.script !== undefined && options.script.length !== 0) {
    head.script = options.script;
  }

  if (options.link !== null && options.link !== undefined && options.link.length !== 0) {
    head.link = options.link;
  }
  return head;
}


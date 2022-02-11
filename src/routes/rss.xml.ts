//TODO fill in these three constants to match your own setup
const siteURL = 'http://localhost:3000';
const siteTitle = "Codemaster's Domain";
const siteDescription = "Codemaster Mick's personal site";

export const get = async () => {
  const posts = await Promise.all(
    Object.entries(import.meta.glob('./blog/*.md')).map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const slug = path.slice(2, -3);
      return { ...metadata, slug };
    })
  ).then((posts) => {
    return posts.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
  });

  const body = render(posts);
  const headers = {
    'Cache-Control': 'max-age=0, s-maxage=3600',
    'Content-Type': 'application/xml'
  };

  return {
    body,
    headers
  };
};

const render = (posts) =>
  `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${siteTitle}</title>
<description>${siteDescription}</description>
<link>${siteURL}</link>
<atom:link href="${siteURL}/rss.xml" rel="self" type="application/rss+xml"/>
${posts
  .map(
    (post) => `<item>
<guid isPermaLink="true">${siteURL}/${post.slug}</guid>
<title>${post.title}</title>
<author>${post.author}</author>
<link>${siteURL}/${post.slug}</link>
<description>${post.excerpt}</description>
<pubDate>${new Date(post.date).toUTCString()}</pubDate>
${post.categories
  .map(
    (category) => `<category domain="${siteURL}/blog/categories/${category}">${category}</category>`
  )
  .join('')}
</item>`
  )
  .join('')}
</channel>
</rss>
`;

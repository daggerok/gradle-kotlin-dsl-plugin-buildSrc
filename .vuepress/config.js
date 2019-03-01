const baseHref = process.env.BASE_HREF;
const base = !baseHref ? '/' : baseHref;

module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  base,
  themeConfig: {
    repo: 'daggerok/gradle-kotlin-dsl-plugin-buildSrc',
    lastUpdated: 'Updated at',
  }
};

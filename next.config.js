const withNextra = require('nextra')({
    theme: 'nextra-theme-blog',
    themeConfig: './theme.config.tsx',
    // providerImportSource: '@mdx-js/react',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    // any configs you need
    pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
};

module.exports = withNextra(nextConfig);
// import remarkFrontmatter from 'remark-frontmatter';
// import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
// import nextra from 'nextra';
//

//
//
// const withNextra = nextra( {
//     theme: 'nextra-theme-blog',
//     themeConfig: './theme.config.tsx',
//     mdxOptions: {
//         remarkPlugins: [
//             // remarkFrontmatter, remarkMdxFrontmatter
//         ],
//     },
//     providerImportSource: '@mdx-js/react',
//     navs: [],
//     // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
// })(nextConfig);
//
//
// // module.exports = withNextra;
// export default withNextra;

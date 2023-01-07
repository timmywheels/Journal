import PostFooter from './components/PostFooter';
import FooterMinimal from './components/FooterMinimal';
import React from 'react';

const themeConfig = {
    darkMode: false,
    navs: [],
    head: ({ title, meta }) => (
        <>
            <title>{title} | tim wheeler's journal</title>
            <meta name='description' content={`${title} | tim wheeler's journal`} />
            <link rel='shortcut icon' href='/favicon.ico' />
            {meta.title && <meta property='og:title' content={meta.title} />}
            {meta.description && <meta name='description' content={meta.description} />}
            {meta.author && <meta name='author' content={meta.author} />}
            {meta.tag && <meta name='keywords' content={meta.tag} />}
            {meta.og && <meta property='og:image' content={meta.og} />}
            <meta property='og:site_name' content="tim wheeler's journal" />
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:site' content='@hashmapped' />
            <link
                rel='alternate'
                type='application/rss+xml'
                title='RSS'
                href='/feed.xml'
            />
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1'
            />
        </>
    ),
    readMore: (
        '👉 Read More'
    ),
    footer: (
        <FooterMinimal />
    ),
    postFooter: (
        <PostFooter />
    ),
};

export default themeConfig;

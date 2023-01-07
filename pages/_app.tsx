import 'nextra-theme-blog/style.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/main.css';
import '../styles/overrides.css';
import '@fontsource/jetbrains-mono/variable.css';
import '@fontsource/east-sea-dokdo';
import 'tailwindcss/tailwind.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <title>tim wheeler's journal</title>
                <meta name='description' content="tim wheeler's journal" />
                <link rel='shortcut icon' href='/favicon.ico' />
                <link
                    rel='alternate'
                    type='application/rss+xml'
                    title='RSS'
                    href='/feed.xml'
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                <meta name='robots' content='follow, index' />
                <link rel="shortcut icon" href="/favicon.ico" />
                {/*Google tag (gtag.js)*/}
                <Script strategy={'afterInteractive'} src="https://www.googletagmanager.com/gtag/js?id=G-S03Y104S24"/>
                <Script
                    id={'google-analytics'}
                    strategy={'afterInteractive'}
                    dangerouslySetInnerHTML={{ __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'G-S03Y104S24');
                    `}}
                />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    );
}

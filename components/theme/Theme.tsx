import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import ThemeLayout from './ThemeLayout';

const components = {
    h1: (props) => {
        const { children } = props;
        console.log('yo props:', props);
        return (
            <div className={'highlight-container'}>
                <div className={'highlight'}>
                    {children}
                </div>
            </div>
        );
    },
};
const Theme = (props) => {
    console.log('themProps:', props);
    const { meta, route, children } = props;
    return (
        <MDXProvider components={components}>
            <ThemeLayout>
                {children}
            </ThemeLayout>
        </MDXProvider>
    );

};

export default Theme;

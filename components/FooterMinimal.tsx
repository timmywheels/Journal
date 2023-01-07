import Link from 'next/link';
import React from 'react';

const classNames = {
    link: 'no-underline',
    linkText: 'text-gray-500 dark:text-gray-300',
};

const navigation = [
    {
        name: 'TimWheeler.com',
        href: 'https://timwheeler.com?ref=journal',
        icon: (props) => (
            <svg fill={'currentColor'} version='1.1' xmlSpace='preserve'
                 style={{
                     fillRule: 'evenodd',
                     clipRule: 'evenodd',
                     strokeLinejoin: 'round',
                     strokeMiterlimit: 2,
                 }}
                 viewBox='142.5 244.2 714 515.61'
                 {...props}
            >
                <g opacity='0.91'>
                    <g>
                        <g transform='matrix(1,0,0,1,1,0)'>
                            <rect x='268.9' y='283.3' width='124.4' height='476.5'></rect>
                        </g>
                        <g transform='matrix(0.7071,-0.7071,0.7071,0.7071,-307.375,497.195)'>
                            <rect x='310.4' y='557.4' width='272.1' height='124.4'></rect>
                        </g>
                        <g transform='matrix(0.7071,-0.7071,0.7071,0.7071,-276.334,572.149)'>
                            <rect x='490.3' y='483.6' width='124.4' height='272.1'></rect>
                        </g>
                        <g transform='matrix(1,0,0,1,-2,0)'>
                            <rect x='606.7' y='283.3' width='124.4' height='476.5'></rect>
                        </g>
                    </g>
                    <g transform='matrix(1,0,0,1,-0.5,4)'>
                        <rect x='143' y='240.2' width='714' height='124.4'></rect>
                    </g>
                </g>
            </svg>
        ),
    },
    {
        name: 'Twitter',
        href: 'https://twitter.com/hashmapped',
        icon: (props) => (
            <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
                <path
                    d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
            </svg>
        ),
    },
    {
        name: 'GitHub',
        href: 'https://github.com/timmywheels',
        icon: (props) => (
            <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
                <path
                    fillRule='evenodd'
                    d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                    clipRule='evenodd'
                />
            </svg>
        ),
    },
    {
        name: 'LinkedIn',
        href: 'https://linkedin.com/in/timmywheels',
        icon: (props) => (
            <svg fill={'currentColor'} {...props} style={{ height: 16, marginBottom: 2}} xmlns='http://www.w3.org/2000/svg' width='2500' height='2389'
                 viewBox='0 5 1036 990'>
                <path
                    d='M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z' />
            </svg>
        ),
    },
];

const FooterMinimal = () => {
    return (
        <footer className={'justify pt-10'}>
            <div className='flex grid grid-cols-3 justify-center sm:justify-between font-monospace text-xs border-t border-dashed border-gray-300'>
                <div className={'col-span-3 sm:col-span-1 m-auto sm:m-0'}>
                    <Link href={'https://timwheeler.com/about'} target={'_blank'} className={classNames.link}>
                        <p className={classNames.linkText}>Tim Wheeler © {new Date().getFullYear()}</p>
                    </Link>
                </div>
                <div className={'col-span-3 sm:col-span-1 flex m-auto sm:m-0 sm:justify-center items-center space-x-4'}>
                    {navigation.map((item) => (
                        <Link key={item.name} href={item.href} target={'_blank'}
                              className='text-gray-400 hover:text-gray-500'>
                            <span className='sr-only'>{item.name}</span>
                            <item.icon className='h-5 w-5' aria-hidden='true' />
                        </Link>
                    ))}
                </div>
                <div className={'col-span-3 sm:col-span-1 flex m-auto sm:m-0 sm:justify-end space-x-2 border-r-1 border-r-gray-100'}>
                    <Link href={'https://timwheeler.com/about'} target={'_blank'} className={classNames.link}>
                        <p className={classNames.linkText}>About</p>
                    </Link>
                    <p className={classNames.linkText}>•</p>
                    <Link href={'https://cal.com/timwheeler/60-min'} target={'_blank'} className={classNames.link}>
                        <p className={classNames.linkText}>Consulting</p>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default FooterMinimal;

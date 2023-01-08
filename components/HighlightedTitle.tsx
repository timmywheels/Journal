import Link from 'next/link';

const HighlightedTitle = ({ text, size = 'text-xl' }) => {
    return (
        <div className={'flex flex-col grid grid-cols-4'}>
            <div className='highlight-container col-span-4'>
                <h1 className={`highlight ${size}`}>
                    {text}
                </h1>
            </div>
            <div
                className='col-span-1 text-right font-monospace font-medium  tracking-wide text-xs justify-end'>
                <Link href={'https://twitter.com/search?q=%23buildinpublic'} target={'_blank'} className={'no-underline'}>
                    <p
                        className={'w-fit text-gray-600 dark:text-gray-400 sm:float-right'}
                        style={{
                            transform: 'rotate(-4.5deg)',
                        }}>#buildinpublic</p>
                </Link>
            </div>
        </div>
    );
};

export default HighlightedTitle;

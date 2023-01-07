import Link from 'next/link';

const classNames = {
    link: 'text-gray-500'
}

const FooterMinimal = () => {
    return (
        <footer className={'justify pt-10'}>
            <div className='flex justify-between font-monospace text-xs border-t border-dashed border-gray-300'>
                <div>
                    <Link href={'https://timwheeler.com/about'} target={'_blank'} className={'no-underline'}>
                        <p className={classNames.link}>Tim Wheeler © {new Date().getFullYear()}</p>
                    </Link>
                </div>
                <div className={'flex space-x-4 border-r-1 border-r-gray-100 text-gray-500'}>
                    <Link href={'https://timwheeler.com/about'} target={'_blank'} className={'no-underline'}>
                        <p className={classNames.link}>About</p>
                    </Link>
                    <Link href={'https://cal.com/timwheeler/60-min'} target={'_blank'} className={'no-underline'}>
                        <p className={classNames.link}>Consulting</p>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default FooterMinimal

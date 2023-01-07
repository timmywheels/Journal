import React from 'react'
import SubscribeInput from './SubscribeInput'

const SubscribeCTA = () => {
    return (
        <div className={'bg-gray-100/60 dark:bg-gray-700/60 mt-12 justify-center border-dashed border-4 border-gray-300 rounded-lg space-y-6 items-center w-full py-8 px-8'}>
            <div className='flex justify-center'>
                <div className={'highlight-container text-center'}>
                    <h3
                        className={
                            'highlight text-2xl font-extrabold font-monospace'
                        }
                    >
                        Subscribe to my journal
                    </h3>
                </div>
            </div>
            <div>
                <SubscribeInput/>
            </div>
            <div>
                <p className={'text-center font-monospace text-xs font-medium text-gray-500 dark:text-gray-300'}>I'll barely email you, let alone spam you lol.</p>
            </div>
        </div>
    )
}

export default SubscribeCTA;

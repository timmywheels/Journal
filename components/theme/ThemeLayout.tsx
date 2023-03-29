import Header from '../Header';
import React from 'react';
import SubscribeCTA from '../SubscribeCTA';
import Container from '../Container';

const ThemeLayout = (props) => {
    return (
        <Container>
            <Header />
            <div className='bg-rose-400'>
                {/*{children}*/}
            </div>
            <SubscribeCTA />
        </Container>
    );
};

export default ThemeLayout;

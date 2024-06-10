import { logPageView } from '../../analytics';
import useDocumentTitle from '../../useDocumentTitle';
import { Footer, Header, Info, Topics } from '../index'

import { useEffect } from 'react';

const Home = () => {

    useDocumentTitle('Home Page - Stock + Spark');

    useEffect(() => {
        logPageView(location.pathname, document.title);
    }, [location]);


    return (
        <div>
            <Header />
            <Topics />
            <Info />
            <Footer />
        </div>
    )
}

export default Home
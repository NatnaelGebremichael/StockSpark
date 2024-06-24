import useDocumentTitle from '../../useDocumentTitle';
import { Footer, Header, Info, Topics } from '../index'

const Home = () => {

    useDocumentTitle('Home Page - Stock + Spark');

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
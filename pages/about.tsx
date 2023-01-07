import type { NextPage } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutContents from '../components/AboutContents'

const Home: NextPage = () => {
    return (
        <div className="flex flex-col w-full">
            <Header />
            <AboutContents />
            <Footer />
        </div>
    )
}

export default Home

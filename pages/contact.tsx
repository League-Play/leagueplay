import type { NextPage } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactContents from '../components/ContactContents'

const Home: NextPage = () => {
    return (
        <div className="flex flex-col w-full">
            <Header />
            <ContactContents />
            <Footer />
        </div>
    )
}

export default Home

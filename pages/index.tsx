import type { NextPage, GetStaticProps } from 'next'
import Header from '../components/Header'
import HomeContents from '../components/HomeContents'

const Home: NextPage<any> = ({ siteData }) => {
    return (
        <div className="flex flex-col w-full">
            <Header />
            <HomeContents />
        </div>
    )
}

export default Home

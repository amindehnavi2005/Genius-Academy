import React from 'react'
import Header from '../components/Header/Header';
import Cards from '../components/Cards/Cards';
import Courses from '../components/Courses/Courses';
import Comments from '../components/Comments/Comments';
import Footer from '../components/Footer/Footer';


function Home() {
    return (
        <main>
            <Header />
            <Cards />
            <Courses />
            <Comments />
            <Footer />
        </main>
    );
}

export default Home;
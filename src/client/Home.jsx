import React from 'react'
import Header from '../components/Header/Header';
import Cards from '../components/Cards/Cards';
import Courses from '../components/Courses/Courses';
import Comments from '../components/Comments/Comments';


function Home() {
    return (
        <main>
            <Header />
            <Cards />
            <Courses />
            <Comments />
        </main>
    );
}

export default Home;
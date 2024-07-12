import React from 'react'
import Header from '../components/Header/Header';
import Cards from '../components/Cards/Cards';
import Courses from '../components/Courses/Courses';


function Home() {
    return (
        <main>
            <Header />
            <Cards />
            <Courses />
        </main>
    );
}

export default Home
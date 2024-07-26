import React, { useEffect } from 'react'
import Header from '../components/Header/Header';
import Cards from '../components/Cards/Cards';
import Courses from '../components/Courses/Courses';
import Comments from '../components/Comments/Comments';
import Footer from '../components/Footer/Footer';


function Home() {

    const userInfo = JSON.parse(localStorage.getItem("userInfo")) ? JSON.parse(localStorage.getItem("userInfo")) : undefined;

    useEffect(() => {
        if (!localStorage.getItem("isSignIn")) {
            localStorage.setItem("isSignIn", false);
        }
        if (userInfo) {
            fetch(`http://localhost:3000/users?id=${userInfo.id}`, {
                method: "GET",
            }).then(
                response => response.json()
            ).then(
                data => localStorage.getItem("userCourses") ? null : localStorage.setItem("userCourses", JSON.stringify(data[0].userCourses))
            );
        }
    }, [])

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
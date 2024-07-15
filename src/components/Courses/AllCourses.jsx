import React from 'react'
import Course from './Course'
import "./Courses.css"

function AllCourses() {
    return (
        <section className="all-courses">
            <Course />
            <Course />
            <Course />
            <Course />
            <Course />
            <Course />
        </section>
    )
}

export default AllCourses
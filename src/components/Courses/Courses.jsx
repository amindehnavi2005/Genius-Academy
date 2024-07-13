import React from 'react'
import "./Courses.css"
import Course from './Course'
import Label from '../Label/Label'

function Courses() {
    return (
        <section className="courses-container">
            <header className="courses-header">
                <Label title={"آخرین دوره های"} subtitle={"منتشر شده"} />
                <button className="show-all-courses-btn">
                    مشاهده همه
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25" />
                    </svg>
                </button>
            </header>
            <main className="courses-list">
                <Course />
                <Course />
                <Course />
            </main>
        </section>
    )
}

export default Courses
import React from 'react'

function CourseDetailsCard({ icon, title, count }) {
    return (
        <section className='course-details-card'>
            <section className="icon">
                {icon}
            </section>
            <p className='title'>{title}</p>
            <p className='count'>{count}</p>
        </section>
    )
}

export default CourseDetailsCard
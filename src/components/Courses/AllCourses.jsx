import React, { useEffect, useState } from 'react'
import Course from './Course'
import "./Courses.css"

function AllCourses() {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/courses",
            { method: "GET", },
        ).then(
            (response) => response.json()
        ).then(
            data => setDatas(data)
        );
    }, []);
    return (
        <section className="all-courses">
            {datas.map(
                (data) => <Course
                    img={data.courseImg}
                    status={data}
                    name={data.courseName}
                    tag={data.courseTag}
                    seasonCount={data.courseSeasonCount}
                    time={data.courseTime}
                    teacher={data.courseTeacher}
                    teacherImg={data.teacherImg}
                    price={data.coursePrice}
                />
            )}
        </section>
    )
}

export default AllCourses
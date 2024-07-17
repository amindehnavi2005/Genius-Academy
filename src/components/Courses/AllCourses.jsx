import React, { useEffect, useState } from 'react'
import Course from './Course'
import "./Courses.css"

function AllCourses() {
    let [datas, setDatas] = useState([]);
    datas = JSON.parse(localStorage.getItem("courses"));

    return (
        <section className="all-courses">
            {
                datas.map(
                    (data) => <Course
                        id={data.id}
                        img={data.courseImg}
                        status={data}
                        name={data.courseName}
                        tag={data.courseTag}
                        seasonCount={data.courseHeadlines.length}
                        time={data.courseTime}
                        teacher={data.courseTeacher}
                        teacherImg={data.teacherImg}
                        price={data.coursePrice}
                    />
                )
            }
        </section>
    )
}

export default AllCourses
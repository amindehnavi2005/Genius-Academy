import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import Label from '../components/Label/Label'
import Footer from '../components/Footer/Footer'
import "./UserBasket.css"

function UserBasket() {

    const [userBasket, setUserBasket] = useState(localStorage.getItem("userBasket") ? JSON.parse(localStorage.getItem("userBasket")) : []);
    const userCourses = localStorage.getItem("userCourses") ? JSON.parse(localStorage.getItem("userCourses")) : [];
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    useEffect(() => {
        localStorage.setItem("userBasket", JSON.stringify(userBasket));
    });

    const removeItemFromUserBasket = (id) => {
        setUserBasket(userBasket.filter((course) => course.id !== id));
    }

    const addToUserCourses = (courses) => {

        courses.map((course) => userCourses.push(course));

        fetch(`http://localhost:3000/users/${userInfo.id}`, {
            method: "PUT",
            body: JSON.stringify(
                {
                    ...userInfo,
                    userCourses
                }
            ),
        }).then(
            (response) => {
                if (response.status == 200 || response.status == 201) {
                    localStorage.setItem("userCourses", JSON.stringify(userCourses));
                    setUserBasket([]);
                    console.log("User Courses => ", userCourses);
                    console.log("User Info => ", userInfo);
                } else {
                    console.log(userInfo.userCourses);
                    alert("مشکلی به وجود آمده است.");
                }
            }
        );
    }


    return (
        <main>
            <Header />
            <section className='user-basket'>
                <Label
                    title={"سبد خرید شما"}
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    }
                    subtitle={`${userBasket.length} دوره در سبد خرید شما موجود است`}
                />
                {
                    localStorage.getItem("userBasket") ? userBasket.map((course) => (
                        <section className='user-basket-card'>
                            <section className='image-pane'>
                                <img src={course.courseImg} alt="تصویر دوره افزوده شده به سبد خرید" />
                                <button className='remove-item' onClick={() => {
                                    removeItemFromUserBasket(course.id);
                                }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </section>
                            <section className='details-pane'>
                                {course.courseStatus == true ? <p className='completed'>تکمیل شده</p> : <p className='not-completed'>در حال برگزاری</p>}
                                <p className='title'>{course.courseName}</p>
                                <hr />
                                <section className="time-container">
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                            <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z" />
                                            <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z" />
                                        </svg>
                                        {course.courseHeadlines.length} فصل
                                    </p>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
                                        </svg>
                                        {course.courseTime} ساعت
                                    </p>
                                </section>
                                <section className="teacher-container">
                                    <img src={course.teacherImg} alt="تصویر مدرس دوره" />
                                    <section className="teacher-name-column">
                                        <p>نام مدرس : </p>
                                        <p>{course.courseTeacher}</p>
                                    </section>
                                    {course.coursePrice == 0 ? <p className='free-course'>رایگان!</p> : <p className='price-course'>{course.coursePrice} تومان</p>}
                                </section>
                            </section>
                        </section>
                    ))
                        :
                        (
                            <p>هیچ دوره ای در سبد خرید موجود نیست!!</p>
                        )
                }
                {
                    userBasket.length !== 0 ?
                        <button className='add-courses-to-panel' onClick={() => {
                            addToUserCourses(userBasket);
                        }}>
                            تکمیل فرایند خرید
                        </button>
                        : null
                }

            </section>
            <Footer />
        </main >
    )
}

export default UserBasket
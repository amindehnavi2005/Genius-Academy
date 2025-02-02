import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header/Header';
import "./Course.css"
import CourseDetailsCard from '../components/Courses/CourseDetailsCard';
import Footer from '../components/Footer/Footer';
import UserBasket from './UserBasket';

function Course() {

    const id = useParams();
    let datas = useState([]);
    datas = JSON.parse(localStorage.getItem("courses"));
    const newData = datas.filter((data) => {
        return data.id == id.id;
    });

    const [partStatus, setPartStatus] = useState(false);
    const [userCourses, setUserCourses] = useState(localStorage.getItem("userCourses") ? JSON.parse(localStorage.getItem("userCourses")) : []);

    let userBasket = [];

    const addCourseToUserBasket = (data) => {

        let checkUserCourses = userCourses.find(item => item.id == data.id);
        if (checkUserCourses !== undefined) {
            alert("دوره مد نظر شما در پنل کاربریتان موجود است!");
        } else {
            if (localStorage.getItem("userBasket")) {
                userBasket = JSON.parse(localStorage.getItem("userBasket"));

                let object = userBasket.find(item => item.id == data.id);


                if (object == undefined) {
                    userBasket.push(data);
                    return localStorage.setItem("userBasket", JSON.stringify(userBasket));
                } else {
                    return alert("دوره قبلا به سبد خرید اضافه شده است!!!!");
                }
            } else {
                userBasket.push(data);
                localStorage.setItem("userBasket", JSON.stringify(userBasket));
            }
        }

    }

    return (
        <main className='course-container'>
            <Header />
            <section className='course-details'>
                <img className='course-img' src={newData[0].courseImg} alt="تصویر دوره" />
                {
                    newData[0].courseStatus ? (
                        <p className='course-status complete'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                            </svg>
                            تکمیل شده
                        </p>
                    ) : (
                        <p className='course-status'>در حال ضبط</p>
                    )
                }
                <h1 className='course-name'>{newData[0].courseName}</h1>
                <section className="course-details-cards">
                    <CourseDetailsCard
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
                            </svg>
                        }
                        title={"دسته بندی"}
                        count={newData[0].courseTag}
                    />
                    <CourseDetailsCard
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                <path fill-rule="evenodd" d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z" clip-rule="evenodd" />
                            </svg>
                        }
                        title={"تعداد فصل ها"}
                        count={newData[0].courseHeadlines.length}
                    />
                    <CourseDetailsCard
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                            </svg>
                        }
                        title={"نوع دوره"}
                        count={newData[0].coursePrice == "0" ? "رایگان" : "نقدی"}
                    />
                    {newData[0].coursePrice == "0" ? null : (
                        <CourseDetailsCard
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                    <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                                    <path fill-rule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z" clip-rule="evenodd" />
                                    <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
                                </svg>

                            }
                            title={"قیمت دوره"}
                            count={newData[0].coursePrice}
                        />
                    )}
                </section>
                <button className="add-to-user-basket-btn" onClick={() => addCourseToUserBasket(newData[0])}>ثبت نام در دوره</button>
                <section className="headlines">
                    <p className='headlines-title'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                        </svg>
                        سرفصل ها
                    </p>
                    {newData[0].courseHeadlines.map((headlines) => (
                        <>

                            <button className='headlines-dropdown' onClick={() => { setPartStatus(!partStatus) }}>
                                <section className='headline-details'>
                                    <p>{headlines.headlineId}</p>
                                    <p>{headlines.headlineName}</p>
                                </section>
                                {
                                    partStatus
                                        ?
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                        </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                }
                            </button>
                            {
                                partStatus ? (
                                    <section className="headline-parts">
                                        {headlines.headlineParts.map((part) => (
                                            <section className="part-container">
                                                <section className="part-details">
                                                    <p>{part.partId}</p>
                                                    <p>{part.partName}</p>
                                                </section>
                                                <section className="part-time">
                                                    <p>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                        </svg>
                                                        {part.partTime}
                                                    </p>
                                                    <button className='show-part-btn'>
                                                        مشاهده
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                                            <path fill-rule="evenodd" d="M5.25 6.31v9.44a.75.75 0 0 1-1.5 0V4.5a.75.75 0 0 1 .75-.75h11.25a.75.75 0 0 1 0 1.5H6.31l13.72 13.72a.75.75 0 1 1-1.06 1.06L5.25 6.31Z" clip-rule="evenodd" />
                                                        </svg>
                                                    </button>
                                                </section>
                                            </section>
                                        ))}
                                    </section>
                                ) : null
                            }
                        </>
                    ))}
                </section>
            </section>
            <Footer />
        </main>
    )
}

export default Course
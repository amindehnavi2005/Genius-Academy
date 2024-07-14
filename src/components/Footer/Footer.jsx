import React from 'react'
import LogoContainer from '../LogoContainer';
import Label from '../Label/Label';
import "./Footer.css";

function Footer() {
    return (
        <section className="footer">
            <header className='topbar'>
                <button className="back-to-up-btn">
                    برگشت به بالا
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path fill-rule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z" clip-rule="evenodd" />
                    </svg>
                </button>
                <section className='footer-head'>
                    <LogoContainer />
                    <section className="icons">
                        <Label
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                    <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
                                </svg>
                            }
                            title={"051-23467899"}
                            subtitle={"شماره تلفن"} />
                        <Label
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
                                </svg>
                            }
                            title={"17:00 - 9:00"}
                            subtitle={"ساعات کاری"} />
                    </section>
                </section>
            </header>
            <section className='bottombar'>
                <section className="about-academy-card">
                    <h3 className='title'>درباره</h3>
                    <p className='subtitle'>
                        نابغه یکی از پرتلاش‌ترین و بروزترین وبسایت های آموزشی در سطح ایران است که همیشه تلاش کرده
                        تا بتواند جدیدترین و بروزترین مقالات و دوره‌های آموزشی را در اختیار علاقه‌مندان ایرانی قرار دهد.
                        تبدیل کردن برنامه نویسان ایرانی به بهترین برنامه نویسان جهان هدف ماست.
                    </p>
                </section>
            </section>
        </section>
    )
}

export default Footer
import { Drawer } from '@mui/material';
import React, { useState } from 'react'
import "./Sidebar.css"
import LogoContainer from '../LogoContainer';
import ThemeSwitcher from '../ThemeSwitcher';

function Sidebar() {
    const [open, setOpen] = useState(false);

    const toggleSidebar = (newOpen) => () => {
        setOpen(newOpen);
    }

    return (
        <>
            <button className='sidebar-btn' onClick={toggleSidebar(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            <Drawer className='sidebar-container' open={open} onClose={toggleSidebar(false)} anchor='right'>
                <section className='sidebar'>
                    <header className='sidebar-header'>
                        <section className="sidebar-topbar">
                            <LogoContainer />
                            <button className="sidebar-close" onClick={toggleSidebar(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </section>
                        <input className='sidebar-search-input' type="text" placeholder='دنبال چی میگردی؟' />
                    </header>
                    <section className="sidebar-change-theme">
                        <p>تم تاریک</p>
                        <ThemeSwitcher />
                    </section>
                    <section className='sidebar-course-grouping'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                        </svg>
                        دسته بندی آموزش ها
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </section>
                </section>
            </Drawer>
        </>

    )
}

export default Sidebar
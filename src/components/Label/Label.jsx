import React from 'react'
import "./Label.css"

function Label({ icon,title, subtitle }) {
    return (
        <section className='details'>
            <div className="icon">
                {icon}
            </div>
            <section className="texts">
                <h1 className='title'>{title}</h1>
                <p className='subtitle'>{subtitle}</p>
            </section>
        </section>
    )
}

export default Label
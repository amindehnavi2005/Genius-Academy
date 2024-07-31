import React from 'react'

function Card({ IconCard, cardTitle, cardSubTitle }) {
    return (
        <section className="card">
            <section className="icon-card">
                {IconCard}
            </section>
            <section className="card-details">
                <p>{cardTitle}</p>
                <p>{cardSubTitle}</p>
            </section>
        </section>
    )
}

export default Card
import React from 'react'

function SocialNetwork({icon, link}) {
    return (
        <sectin className="social-network">
            <a href={link}>{icon}</a>
        </sectin>
    )
}

export default SocialNetwork
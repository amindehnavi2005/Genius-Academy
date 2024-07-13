import React from 'react'
import Label from '../Label/Label'
import './Comments.css'

function Comments() {
    return (
        <section className='comments'>
            <Label title={"درمورد نابغه چه میشنویم؟"} subtitle={"این‌ها، بخش خیلی کوچکی از نظراتی هستند که افراد مختلف در مورد نابغه دارند."} />
        </section>
    );
}

export default Comments;
import React from 'react'
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";


const Profile = () =>{
    return(
        <div>
            <ProfileInfo/>
            <div>
            <img src="https://mirpozitiva.ru/uploads/posts/2016-11/medium/1478873194_rechka_mostok.jpg" />
            </div>
            <div>ava + description</div>
            <MyPosts/>
        </div>
    )
}
export default Profile
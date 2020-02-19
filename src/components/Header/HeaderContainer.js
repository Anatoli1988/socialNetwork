import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = () =>{
    return(
        <header className={s.header}>
            <img src="http://www.telpics.ru/cache/pets/telpics_ru_258036347_185x240.jpg" />

        <div className={s.loginBlock}>
            <NavLink to={'/login'}>Login</NavLink>
        </div>
        </header>
    )
}
export default Header
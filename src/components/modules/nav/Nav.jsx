import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';


function Nav() {
    return (
        <nav className={s.menu}>
            <ul className={`${s.menu__list} ${s.listMenu}`}>
            	<li className={s.listMenu__item}>
                    <NavLink to="/sections/about" className={`${s.listMenu__link} ${s.listMenu__link_iconAbout}`} activeClassName={`${s.linkActive} ${s.iconAbout_active}`}>Обо мне</NavLink>
                </li>
            	<li className={s.listMenu__item}>
                    <NavLink to="/sections/career" className={`${s.listMenu__link} ${s.listMenu__link_iconCareer}`} activeClassName={`${s.linkActive} ${s.iconCareer_active}`}>Карьерный путь</NavLink>
                </li>
            	<li className={s.listMenu__item}>
                    <NavLink to="/sections/portfolio" className={`${s.listMenu__link} ${s.listMenu__link_iconPortfolio}`} activeClassName={`${s.linkActive} ${s.iconPortfolio_active}`}>Портфолио</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
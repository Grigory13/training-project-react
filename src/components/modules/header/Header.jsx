import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import logo from 'url:../../../img/logo.png';

function Header() {
    return (
		<header className={s.header}>
			<div className="fixedContainer">
				<div className={s.headerWrapper}>
					<div className={s.nameWrapper}>
						<div className={s.logoWrapper}>
							<NavLink to="/sections/about"><img className={s.logo} src={logo} alt="Логотип"/></NavLink>
						</div>
						<NavLink to="/sections/about" className={s.name}>Константин Константинов</NavLink>
					</div>
					<div className={s.contactsWrapper}>
						<button className={s.buttonContacts}>Мои контакты</button>
						<div className={s.contacts}>
							<ul className={`${s.contacts__list} ${s.listContacts}`}>
								<li className={s.listContacts__item}><a className={s.mailLink} href="mailto: kostya@mail.ru">kostya@mail.ru</a></li>
								<li className={s.listContacts__item}><a className={s.numberLink} href="tel: +79218876237">+7 921 887 62 37</a></li>
								<li className={s.listContacts__item}><a className={s.skypeLink} href="skype: kostik_?call">kostik_</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</header>   
    );
}

export default Header;
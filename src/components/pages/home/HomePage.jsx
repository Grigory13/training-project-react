import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './HomePage.module.css';
import photo from 'url:./img/photo.png';

function HomePage() {
    return(
		<div className={s.homeWrapper}>
			<div className={s.hello}>
				<div className={s.photoWrapper}>
					<img className={s.photo} src={photo} alt="Фотография" />
				</div>
				<div className={`${s.name} ${s.name_margin}`}>
					<span>Константин<br/> Константинов</span>
				</div>
				<div className={s.linkWrapper}>
					<NavLink to="/sections/about" className={`${s.link} ${s.link_margin}`}>Перейти на сайт</NavLink>
				</div>
			</div>
		</div>
    );
}

export default HomePage;
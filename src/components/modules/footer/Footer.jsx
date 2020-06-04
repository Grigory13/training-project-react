import React from 'react';
import s from './Footer.module.css';

function Footer() {
    return (
        <footer className={s.footer}>
        	<div className="fixedContainer">
        		<div className={s.footerWrapper}>
        			<span className={s.copyright}>© Дизайн сайта был разработан в школе LoftSchool</span>
        			<div className={s.socialNetwork}>
        				<a className={s.facebook} href="https://ru-ru.facebook.com/" target="_blank"></a>
        				<a className={s.vk} href="https://vk.com/" target="_blank"></a>
        				<a className={s.twitter} href="https://twitter.com/" target="_blank"></a>
        			</div>
        		</div>
        	</div>
        </footer>
    );
}

export default Footer;
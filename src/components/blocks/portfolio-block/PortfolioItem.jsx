import React from 'react';
import s from './PortfolioItem.module.css';

function PortfolioItem(props) {
    return(
        <a className={`${s.portfolioItem} ${s.portfolioItem_margin}`} href="#">
            <img className={s.portfolioItem__img} src={props.img} alt="Пример приложения"/>
            <p className={s.portfolioItem__name}>{props.name}</p>
            <p className={s.portfolioItem__description}>{props.description}</p>
            <p className={props.class}>{props.category}</p>
        </a>
    );
}

export default PortfolioItem;
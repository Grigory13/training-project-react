import React from 'react';
import s from './Professions.module.css';

function Professions(props) {
    return(
        <div className={s.professions}>
            <button className={s.buttonCareer} 
            onMouseOver={(e)=>document.querySelector(`${props.id}`).classList.add(`${s.block}`)}
            onMouseLeave={(e)=>document.querySelector(`${props.id}`).classList.remove(`${s.block}`)}>
                <p className={s.place}>{props.place}</p>
                <p className={s.post}>{props.post}</p>
                <p className={s.dateWork}>{props.dateWork}</p>
            </button>
            <div className={s.year}><span>{props.year}</span></div>
        </div>
    );
}

export default Professions;
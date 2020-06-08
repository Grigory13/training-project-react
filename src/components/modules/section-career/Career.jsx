import React from 'react';
import s from './Career.module.css';
import petersburg from 'url:../../../img/petersburg-university.png';
import work from 'url:../../../img/work.jpg';
import university from 'url:../../../img/gorky-institute.jpg';
import Professions from '../../blocks/professions-block/Professions';


function Career() {
    return(
        <section className={s.career}>
            <h2 className={s.nameSection}>Карьерный путь</h2>
            <div className={s.careerWrapper}>
                <div className={s.backgroundBlock}>
                    <img className={s.imgPetersburg} id="Petersburg" src={petersburg} alt="Петербургский университет"/>
                    <img className={s.imgWork} id="Work" src={work} alt="Собака"/>
                    <img className={s.imgUniversity} id="University" src={university} alt="Институт Горького"/>
                </div>
                <div className={s.listProfessions}>
                    <div className={s.bar}></div>
                    <Professions 
                    place="ООО &laquo;Звезды путешествий&raquo;"
                    post="Системный администратор"
                    dateWork="2015 - по настоящее время"
                    year="2016"
                    id="#Work"
                    />
                    <Professions
                    place="Санкт-Петербургский государственный университет"
                    dateWork="2010 - 2015"
                    year="2015"
                    id="#Petersburg"
                    />
                    <Professions
                    place="Технологический институт им.&nbsp;Горького"
                    dateWork="2012 - 2014"
                    year="2014"
                    id="#University"
                    />
                    <Professions
                    place="ООО &laquo;Звезды путешествий&raquo;"
                    post="Помощник руководителя группы разработки"
                    dateWork="2015 - по настоящее время"
                    year="2013"
                    id="#Work"
                    />
                </div>
            </div>
        </section>
    );
}

export default Career;
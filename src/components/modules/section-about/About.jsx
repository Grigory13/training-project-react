import React from 'react';
import s from './About.module.css';
import fhoto from 'url:../../../img/big-photo.png';

function About() {
    return(
        <section className={s.about}>
            <div className={s.photoWrapper}>
                <img src={fhoto} alt="Фотография" />
            </div>
            <div className={s.aboutWrapper}>
                <h2 className={s.nameSection}>Обо мне</h2>
                <div className={s.textWrapper}>
                    <p className={s.text}>Меня зовут Костя. Проживаю на Юге Башкортостана,
                    с появлением интернета, с головой увлёкся этой темой,
                    и теперь уже почти живу Он-Лайн.</p>
                    <p className={s.text}>С недавних пор (уже года два), это уже не просто увлечение,
                    но и нормальный зароботок для меня и моей семьи, на этом конечно не собираюсь останавливаться, a&nbsp;буду&nbsp;стараться&nbsp;добиться ещё больших результатов!</p>
                    <p className={s.text}> Интернет сообщество очень интересно</p>
                    <p className={s.text}> Интернет сообщество очень интересно
                    ла ла ла ла ла ла ла ла ла ла ла л ла ла ла ла ла</p>
                    <p className={s.text}> Интернет сообщество очень интересно
                    ла ла ла ла ла ла ла ла ла ла ла л ла ла ла ла ла</p>
                    <p className={s.text}> Интернет сообщество очень интересно
                    ла ла ла ла ла ла ла ла ла ла ла л ла ла ла ла ла</p>
                    <p className={s.text}> Интернет сообщество очень интересно
                    ла ла ла ла ла ла ла ла ла ла ла л ла ла ла ла ла</p>
                    <p className={s.text}> Интернет сообщество очень интересно
                    ла ла ла ла ла ла ла ла ла ла ла л ла ла ла ла ла</p>
                    <p className={s.text}> Интернет сообщество очень интересно
                    ла ла ла ла ла ла ла ла ла ла ла л ла ла ла ла ла</p>
                </div>
                <a className={`${s.linkDownload} ${s.linkDownload_position}`}>Скачать резюме</a>
            </div>    
        </section>
    );
}

export default About;
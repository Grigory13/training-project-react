import React from 'react';
import s from './Portfolio.module.css';
import app from 'url:../../../img/app.png';
import dream from 'url:../../../img/dream.png';
import creativeStudio from 'url:../../../img/creative-studio.png';
import studio from 'url:../../../img/studio.png';
import carbonara from 'url:../../../img/carbonara.png';
import PortfolioItem  from '../../blocks/portfolio-block/PortfolioItem';

function Portfolio() {
    return(
        <section className={s.portfolio}>
            <h2 className={s.nameSection}>Портфолио</h2>
            <div className={s.portfolioWrapper}>
                <PortfolioItem
                img={app}
                name="Deals App"
                description="Продажа одежды"
                class={s.portfolioItem__appCategory}
                category="Приложение"
                />
                <PortfolioItem
                img={dream}
                name="Dream-scapes"
                description="Лагуна Люфтангаза"
                class={s.portfolioItem__pcCategory}
                category="Лендинг"
                />
                <PortfolioItem
                img={creativeStudio}
                name="Creative studio"
                description="Танцевальная студия"
                class={s.portfolioItem__pcCategory}
                category="Корпоративный сайт"
                />
                <PortfolioItem
                img={studio}
                name="Studio Frog"
                description="Мебельный магазин"
                class={s.portfolioItem__pcCategory}
                category="Лендинг"
                />
                <PortfolioItem
                img={carbonara}
                name="Carbonara"
                description="Итальянский ресторан"
                class={s.portfolioItem__pcCategory}
                category="Лендинг"
                />
            </div>
        </section>
    );
}

export default Portfolio;

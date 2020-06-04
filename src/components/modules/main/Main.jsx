import React from 'react';
import { Route } from 'react-router-dom';
import s from './Main.module.css';
import Nav from '../nav/Nav';
import About from '../section-about/About';
import Career from '../section-career/Career';
import Portfolio from '../section-portfolio/Portfolio';


function Main() {
    return (
        <main className={s.main}>
            <div className="fixedContainer">
                <div className={s.mainWrapper}>
                    <Nav />
                    <Route path='/sections/about' component={About} />
                    <Route path='/sections/career' component={Career} />
                    <Route path='/sections/portfolio' component={Portfolio} />
                </div>
            </div>
        </main>
    );
}

export default Main;
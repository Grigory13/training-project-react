import React from 'react';
import { Route } from 'react-router-dom';
import s from './SectionsPage.module.css';
import Header from '../../modules/header/Header';
import Main from '../../modules/main/Main';
import Footer from '../../modules/footer/Footer';

function SectionsPage() {
    return(
        <div className={s.sectionsWrapper}>
            <Route path='/sections' component={Header} />
            <Route path='/sections' component={Main} />
            <Route path='/sections' component={Footer}/>
        </div>
    );
}

export default SectionsPage;
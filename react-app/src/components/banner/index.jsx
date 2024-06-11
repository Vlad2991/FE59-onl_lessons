import React from 'react';
import {Button} from '../button';
import styles from './index.css';

export class Banner extends React.Component {
    render() {
        return (
            <section className="banner">
                <div className="banner__container">
                    <div className="banner__wrapper">
                        <div className="banner__info">
                            <h1 className="banner__title">Hello world</h1>
                            <p className="banner__text">Cool!</p>
                            <Button title="Get it!" />
                            {/* <button className="banner__btn">Get it!</button> */}
                        </div>
                        <div className="banner__img">
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

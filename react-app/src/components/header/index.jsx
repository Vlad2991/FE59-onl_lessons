import {Button} from '../button';
import styles from './index.css';

export const Header = () => {
    const style = {
        width: '100%',
        backgroundColor: 'aqua',
    };

    return (
        <header className="header">
            <div className="header__container">
                <div className="haeder__wrapper">
                    <div className="header__log">
                        <img src="#" alt=""/>
                    </div>
                    <nav className="header__nav">
                        <ul className="header__list">
                            <li className="header__item">
                                <a href="https://catalog.onliner.by/notebook" className="header__link">Home</a>
                            </li>
                            <li className="header__item">
                                <a href="#" className="header__link">Blog</a>
                            </li>
                            <li className="header__item">
                                <a href="#" className="header__link">About</a>
                            </li>
                            <li className="header__item">
                                {/* <a href="#" className="header__link">Contact</a> */}
                                {/* <button className="header__btn">Contact</button> */}
                                <Button title="Contact" isRedBackgroud={true} />
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
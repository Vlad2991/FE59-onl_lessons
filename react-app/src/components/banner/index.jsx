import {Button} from '../button';
import styles from './index.css';

// class View {
//     render() {
//         return <h1>Banner</h1>
//     }
// }

// const Banner = new View();

// export default Banner;

export const Banner = (props) => {
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

import styles from './index.css';

export const Button = ({title, isRedBackgroud}) => { // props === {title: 'text}
    // const title = props.title;

    if (isRedBackgroud) {
        return <h2>HI!!!!</h2>
    }
    
    // return <button type="button" className="button">{props.title}</button>;
    return <button type="button" className="button" style={{background: isRedBackgroud ? 'red' : ''}}>{title}</button>;
}
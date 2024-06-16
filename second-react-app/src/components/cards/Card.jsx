import React from 'react';
import './Card.css';

const Card = ({ size, cardData }) => {
    const { image, text, date, lesson_num, title, author } = cardData;

    return (
        <div className={`card ${size}`}>
            <img src={image} alt="Картинка карточки" className="card-image" />
            <div className="card-content">
                <p className="card-date">{date}</p>
                <h2 className="card-title">{title}</h2>
                <p className="card-text">{text}</p>
            </div>
            <div className="card-footer">
                <p className="card-lesson">Урок {lesson_num}</p>
                <p className="card-author">Автор {author}</p>
            </div>
        </div>
    );
};

export default Card;
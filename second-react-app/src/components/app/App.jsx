import React from 'react';
import Card from '../cards/Card.jsx';
import './App.css'; 

const cardDataArray = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1711038749381-e42413b54588?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "April 20, 2021",
        lesson_num: 48,
        title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        author: "ULADZISLAU"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1711038749381-e42413b54588?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "",
        date: "October 7, 2021",
        lesson_num: 49,
        title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        author: "ULADZISLAU"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1711038749381-e42413b54588?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "",
        date: "October 7, 2021",
        lesson_num: 50,
        title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        author: "ULADZISLAU"
    }
];

const sizes = ["large", "medium", "small"];

const App = () => {
    return (
        <div>
            {cardDataArray.map((cardData, index) => (
                <Card key={cardData.id} size={sizes[index % sizes.length]} cardData={cardData} />
            ))}
        </div>
    );
};

export default App;
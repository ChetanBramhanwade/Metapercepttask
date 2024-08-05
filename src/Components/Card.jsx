import React, { useState, useEffect } from 'react'
import './Main.css'
import axios from 'axios';


export default function Card() {
    const [card, setCard] = useState([]);

    const getCard = async () => {
        try {
            const responce = await axios.get('/data.json')
            setCard(responce.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCard();
    }, []);

    return (
            <div class='cards-container'>
                <div className="row d-flex">
                    <div className="col-4">
                        {card.map(item => (
                            <div key={item.id} className='card'>
                                <img src={item.ImageUrl} />
                                <h3>{item.Name}</h3>
                                <p>{item.ShortDesc}</p>
                                <button class="btn view">View</button>
                            </div>
                        ))}
                    </div>
                </div>    
        </div>
    )
}

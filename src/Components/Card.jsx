import React, { useState, useEffect } from 'react';
// import './Main.css';
import axios from 'axios';

export default function Card() {
    const [card, setCard] = useState([]);

    const getCard = async () => {
        try {
            const response = await axios.get('/data.json');
            setCard(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCard();
    }, []);

    const podStyle = {
        border: '1px solid #ddd',
        margin: '16px',
        width: '300px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    };


    const imgStyle = {
        width: '100%',
        height: 'auto',
        marginBottom: '16px'
    };

    const buttonStyle = {
        marginTop: 'auto',
        alignSelf: 'left'
    };


    return (
        <div class="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {card.map(item => (
                <div key={item.id} style={podStyle}>
                    <img src={item.ImageUrl}  style={imgStyle}/>
                    <h5>{item.Name}</h5>
                    <p>{item.ShortDesc}</p>
                    <button className="btn view" style={buttonStyle}>View</button>
                </div>
            ))}
        </div>
    );
}

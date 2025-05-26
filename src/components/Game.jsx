import { useState, useEffect } from 'react';
import getImageURLbyId from '../utils/imageAPI';
import { cardsData } from '../utils/cardsData';
import Gameboard from './Gameboard';
import LoadingScreen from './LoadingScreen';

export default function Game() {   
    const [cards, setCards] = useState(null);

    useEffect(() => {
        const addImagesURLsToCards = async () => {
            try {      
            const updatedCards = await Promise.all(
                cardsData.map(async (card) => {
                const imageUrl = await getImageURLbyId(card.id);
        
                return { ...card, imageUrl};
                })       
            );        
        
            setCards(updatedCards);          
        
            } catch (error) {
                console.log("Error: " + error)
            };
        };

        addImagesURLsToCards();       
    },[]);  
      
    return (
        <>  
            <h1>Memory Card Game</h1>    
            {cards ? <Gameboard cards={cards}/> : <LoadingScreen />}
        </>
    )
}
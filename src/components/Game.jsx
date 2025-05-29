import { useState, useEffect } from 'react';
import getImageURLbyId from '../utils/imageAPI';
import { cardsData } from '../utils/cardsData';
import { shuffleCards } from '../utils/shuffleCards';
import Gameboard from './Gameboard';
import LoadingScreen from './LoadingScreen';

export default function Game() {   
    const [cards, setCards] = useState(cardsData);
    const [isGameReady, setIsGameReady] = useState(false);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        const addImagesURLsToCards = async () => {
            try {      
                const updatedCards = await Promise.all(
                cardsData.map(async (card) => {
                const imageUrl = await getImageURLbyId(card.id);
        
                return { ...card, imageUrl, isClicked: false};
                })       
            );        
        
            setCards(updatedCards);          
         
            } catch (error) {
                console.log("Error: " + error)
            };
        };
        
        addImagesURLsToCards();
        setTimeout( () => setIsGameReady(true), 9300)               
    },[]);   
    
    const handleClick = (e) => { 
        const cardsCopy = cards; 
        const currentCard = cardsCopy.find((card) => card.id === e.currentTarget.id);
        const cardId = currentCard.id.toString();
        
        if (score === 8) {
        // TODO: win               
        };

        if (currentCard.isClicked === false) {                       
            currentCard.isClicked = true;
            setScore(score + 1);
            handleCardsFlipp(cardsCopy);            

            return;
        };            
       
        if (score > bestScore) {
            setBestScore(score);
        };           
        
        document.getElementById(cardId).classList.add("blink");
        document.querySelector(".gameboard-section").classList.add("disabled")
        
        setTimeout(() => {               
            document.getElementById(cardId).classList.remove("blink");
            document.querySelector(".gameboard-section").classList.remove("disabled") 
            resetGame();
            handleCardsFlipp(cardsCopy);              
        }, 1000);               
    };
    
    const resetGame = () => {
        const cardsCopy = cards;

        cardsCopy.forEach((card) => card.isClicked = false);        
        setScore(0);             
    };

    const handleCardsFlipp = (cards) => {            
        setIsFlipped(true);  

        setTimeout(() => {
            shuffleCards(cards);
            setCards([...cards]);
        }, 400);              
          
        setTimeout(() => {                           
            setIsFlipped(false);
        }, 800);       
    };      
  
    return (
        <>  
            <header>
                <h1>MEMORY CARD</h1>
            </header>                 
            {isGameReady ? <Gameboard 
                                cards={cards}
                                score={score} 
                                bestScore={bestScore}
                                isFlipped={isFlipped}
                                handleClick={handleClick}/> 
                        : <LoadingScreen />}
        </>
    );
}
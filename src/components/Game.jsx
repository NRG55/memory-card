import { useState, useEffect } from 'react';
import fetchData from '../utils/fetchData';
import { cardsData } from '../utils/cardsData';
import { shuffleCards } from '../utils/shuffleCards';
import Gameboard from './Gameboard';
import LoadingScreen from './LoadingScreen';
import WinScreen from './WinScreen';

export default function Game() {   
    const [cards, setCards] = useState(cardsData);
    const [isGameReady, setIsGameReady] = useState(false);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {        
        const addImagesURLsToCards = async () => {
            const promises = cards.map(async (card) => {
                                            const imageUrl = await fetchData(card.id);                                           
                                              
                                            return { ...card, imageUrl, isClicked: false};
                                            }
                                        );
            
            const updatedCards = await Promise.all(promises);           
        
            setCards(updatedCards);        
        };
        
        addImagesURLsToCards();       
        setTimeout(() => setIsGameReady(true), 9500);               
    },[]);   

    const resetGame = () => {
        const cardsCopy = cards;

        cardsCopy.forEach((card) => card.isClicked = false);        
        setScore(0);             
    };
    
    if (score === 8) { 
        if (score > bestScore) {
            setBestScore(score);
        };
           
        return <WinScreen handleClick={resetGame} />               
    };
    
    const handleClick = (e) => { 
        const cardsCopy = cards; 
        const currentCard = cardsCopy.find((card) => card.id === e.currentTarget.id);
        const cardId = currentCard.id.toString();     
       
        if (currentCard.isClicked === false) {                       
            currentCard.isClicked = true;
            setScore(score + 1);
            handleCardsFlip(cardsCopy);            

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
            handleCardsFlip(cardsCopy);              
        }, 1000);               
    }; 
    
   

    const handleCardsFlip = (cards) => {            
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
                        : <LoadingScreen cards={cards}/>}
        </>
    );
}
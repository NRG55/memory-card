import "/src/styles/Gameboard.css";
import Card from "./Card";

export default function Gameboard({ cards, score, bestScore, isFlipped, handleClick,}) {
     
    return (
        <section className="gameboard-section">
            <div className="score">            
                <div className="score-text">Score: <span className="score-number">{score}</span></div>
                <div className="score-text">Best Score: <span className="score-number">{bestScore}</span></div>
            </div>
            <div className={`cards-container`}>
                {cards.map((card) =>
                    <Card key={"card-" + card.id} 
                          cardId={card.id} 
                          cardTitle={card.title} 
                          imageUrl={card.imageUrl}
                          isFlipped={isFlipped} 
                          handleClick={handleClick}/>
                )}
            </div>
        </section>
    )
}
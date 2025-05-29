import cardBack6 from "../images/card-back6.jpg";

export default function Card({ cardTitle, imageUrl, cardId, isFlipped, handleClick}) { 
    return (
        <>
            <div id={cardId} 
                 className={`card ${isFlipped ? "flipped disabled" : ""}`} 
                 onClick={handleClick}
            > 
                <div className="card-face">
                    <img
                        src={imageUrl}
                        alt={cardTitle}              
                    />
                </div>
                <div className="card-back">
                    <img
                        src={cardBack6}
                        alt="Card back"
                    />
                </div>                                    
            </div>
        </>
    );
}
import cardBack from "/images/card-back.jpg";

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
                        src={cardBack}
                        alt="Card back"
                    />
                </div>                                    
            </div>
        </>
    );
}
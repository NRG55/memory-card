export default function Card({ cardTitle, imageUrl}) { 
    return (
        <>
            <div className="card">
                <div>
                    <img src={imageUrl} alt={cardTitle}/>
                </div>
                <h3>{cardTitle}</h3>
            </div>
        </>
    );
}
import Card from "./Card";

export default function Gameboard({ cards }) {
    return (
        <section className="gameboard-section">            
            <h2>Score</h2>
            <h2>Best Score</h2>
            <div className="cards-container">
                {cards.map((card) =>
                    <Card key={card.id} cardTitle={card.title} imageUrl={card.imageUrl}/>
                )}
            </div>
        </section>
    )
}
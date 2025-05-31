import "/src/styles/LoadingScreen.css";
import loadingGif from "../images/loading.gif";

export default function LoadingScreen({ cards }) {
    return (
        <>
            <div className="loading-screen">
                <div className="loader">Loading... </div>           
                <img src={loadingGif}></img>           
            </div>
            <div className="preloading-images-container">
                            {cards.map((card) =>
                                <img key={"image-" + card.id} src={card.imageUrl} />
                            )}
            </div>
        </>
    )
}
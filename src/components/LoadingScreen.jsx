import loadingGif from "../images/loading.gif";

export default function LoadingScreen() {
    return (
        <div className="loading-screen">
            <div className="loader">Loading... </div>           
            <img src={loadingGif}></img>           
        </div>
    )
}
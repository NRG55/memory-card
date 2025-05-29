import winGif from "../images/win2.gif";

export default function WinScreen() {
  return (
    <>
        <section className="win-screen">         
            <div className="win-image-container">
                <img src={winGif} alt="Win message" />
            </div>
            <div className="win-message-container">
                <div>Play again?</div>
                <button>Yes!</button>
            </div>
      </section>
    </>
  );
};
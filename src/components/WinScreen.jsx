import "/src/styles/WinScreen.css";
import winGif from "/images/win.gif";

export default function WinScreen({ handleClick }) { 
        
  return (
    <>
        <section className="win-screen">         
            <div className="win-image-container">
                <img src={winGif} alt="Win message" />
            </div>
            <div className="win-message-container">
                <div>Play again?</div>
                <button onClick={handleClick}>Yes!</button>
            </div>
      </section>
    </>
  );
};
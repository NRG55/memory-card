import bee from "/images/bee.png";
import butterfly from "/images/butterfly.png";
import chicken from "/images/chicken.png";
import duck from "/images/duck.png";
import elephant from "/images/elephant.png";
import mouse from "/images/mouse.png";
import tiger from "/images/tiger.png";
import turtle from "/images/turtle.png";

const fallbackImages = {
    "9368985": bee,
    "9386176": butterfly,
    "9420754": chicken,
    "9386178": duck,
    "9368984": elephant,
    "9418637": mouse,
    "9375878": tiger,
    "9399985": turtle
};

export default async function fetchData(id) {
    try {                
        const response = await fetch(`https://pixabay.com/api/?key=48616540-5f0061190e7a3d1e4eb74b784&id=${id}&imaage_type=illustration`, {signal: AbortSignal.timeout(5000)});
       
        if (response.status === 200) {
            const data = await response.json();
            const imageURL = data.hits[0].webformatURL;

            return imageURL;           
        };
        
        return fallbackImages[id];       
   
    } catch (error) {
        console.error(error);        
    };
}
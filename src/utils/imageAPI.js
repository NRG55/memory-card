export default async function getImageURLbyId(id) {
    try {                
        const response = await fetch(`https://pixabay.com/api/?key=48616540-5f0061190e7a3d1e4eb74b784&id=${id}`);

        if (!response.ok) {
            throw new Error("API response fail")
        };
        
        const data = await response.json();
        const imageURL = data.hits[0].webformatURL;

        return imageURL;
   
    } catch (error) {
        console.log("Error: " + error)
    };
}
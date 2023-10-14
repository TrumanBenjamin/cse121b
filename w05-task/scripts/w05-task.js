/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
const templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {

        const article = document.createElement("article");
        const templename = document.createElement("h3");
        const image = document.createElement("img");

        templename.textContent = temple.name;
        image.src = temple.imageUrl;
        image.alt = temple.location;
        
        article.appendChild(templename);
        article.appendChild(image);
        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/
 const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    
        if (response.ok) {
            const data = await response.json();
            templeList.push(data);             
            displayTemples(templeList); 
            console.log(templeList);
         }
        
}


/* reset Function */
// const reset = () => {
//     const templesElement = document.querySelector("#templesElement");
//     if (templesElement) {
//         const articles = templesElement.querySelectorAll("article");
//         articles.foreach((article) => {
//             templesElement.removeChild(article);
//         });
//     }
// }

/* sortBy Function */



getTemples();

/* Event Listener */
// document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList)});
/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Truman Benjamin";
let currentYear = "2023";
// let profilePicture = 'images/Snapchat-1188127029.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');




/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
// imageElement.setAttribute('src', profilePicture);
// imageElement.setAttribute('alt', `Profile image of <strong>${fullName}</strong>`);



/* Step 5 - Array */
const favfoods = [];
favfoods.push("Bananas", " Tacos", " Burritos", " Rice");
foodElement.textContent = favfoods
const grapes = " Grapes";
favfoods.push(grapes);
foodElement.innerHTML += `<br>${favfoods}`;
favfoods.shift();
foodElement.innerHTML += `<br>${favfoods}`;
favfoods.pop()
foodElement.innerHTML += `<br>${favfoods}`;


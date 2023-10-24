// ES Module:
import {greeting} from "./module.js";
const greetings = document.getElementById("greeting");
const greetingh1 = document.createElement("h1");
greetingh1.classList.add("greetingh1");
greetingh1.textContent = greeting;
greetings.appendChild(greetingh1);

// Array:
const products = [
    { id: 1, name: "Brake Fluid", price: 60, category: "Brakes" },
    { id: 2, name: "Spark Plugs", price: 75, category: "Ignition" },
    { id: 3, name: "Oil", price: 50, category: "Routine Maintenance" },
    { id: 4, name: "Oil Filter", price: 20, category: "Routine Maintenance" },
    { id: 5, name: "Air Filter", price: 25, category: "Routine Maintenance" },
    { id: 6, name: "Fuel Injector", price: 100, category: "Fuel System" },
  ];

  const unsortedProductsContainer = document.getElementById("unsorted-products");
  const sortedProductsContainer = document.getElementById("sorted-products");
  const budgetProductsContainer = document.getElementById("budget");
  
  
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
  
    productCard.innerHTML = `
      <h2>${product.name}</h2>
      <p>Price: $${product.price}</p>
      <button>Add to Cart</button>
    `;
  
    unsortedProductsContainer.appendChild(productCard);
  });
  
  const sortedProducts = products.slice().sort((a, b) => a.price - b.price);
  
  sortedProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
  
    productCard.innerHTML = `
      <h2>${product.name}</h2>
      <p>Price: $${product.price}</p>
      <button>Add to Cart</button>
    `;
  
    sortedProductsContainer.appendChild(productCard);
  });

// Array Filter Method:
  const filteredProducts = products.filter((product) => product.price < 60);

  filteredProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
    <h2>${product.name}</h2>
    <p>Price: $${product.price}</p>
    <button>Add to Cart</button>
    `;

    budgetProductsContainer.appendChild(productCard);
  });

// API... After a few hours of trying to get cool APIs to work, the only one I was able to get
// working was this random username generator.

const apiUrl = 'https://randomuser.me/api/';

function displayUserInfo(user) {
    const userNameElement = document.getElementById("user-name");
    const userEmailElement = document.getElementById("user-email");
    const userPictureElement = document.getElementById("user-picture");

    userNameElement.textContent = `Name: ${user.name.first} ${user.name.last}`;
    userEmailElement.textContent = `Email: ${user.email}`;
    userPictureElement.src = user.picture.medium;
}

// Some conditional branching with the API. This checks if the data result array isn't empty 
// and contains at least one user. 

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    if (data.results && data.results.length > 0) {
        const user = data.results[0];
        displayUserInfo(user);
      } 
      else {
        console.error('No user data found.');
      }
    })
  .catch((error) => {
    console.error('There was a problem with the fetch operation:', error);
  });

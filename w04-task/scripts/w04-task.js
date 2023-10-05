/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Truman Benjamin",
    photo: "./images/Snapchat-1188127029.jpg",
    favoriteFoods: [
        'tacos',
        'burritos',
        'nachos',
        'enchiladas'
    ],
    hobbies: [
        'hiking',
        'car spotting',
        'homework',
        'programming'
    ],
    placesLived: [

    ]

};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
    place: ('Nampa, Idaho'),
    length: ('2000-2019'),
    },
    {
    place: ('Queen Creek, Arizona'),
    length:('2019-2020'),
    },
    {
    place:('Rexburg, Idaho'),
    length: ('2021-2023')
    }
);



/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#photo").alt = myProfile.name;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbies => {
    let ul = document.createElement('ul');
    ul.textContent = hobbies;
    document.querySelector("#hobbies").appendChild(ul);
})

/* Places Lived DataList */
myProfile.placesLived.forEach(placesLived => {
    let dt = document.createElement('dt');
    dt.textContent = placesLived.place;
    document.querySelector("#places-lived").appendChild(dt);
    
    let dd = document.createElement('dd');
    dd.textContent = placesLived.length;
    document.querySelector("#places-lived").appendChild(dd);

})


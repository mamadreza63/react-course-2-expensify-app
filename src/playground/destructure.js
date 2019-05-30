//
//object destructuring
//
// const person = {
//     name: 'mohammad',
//     age: 35,
//     location: {
//         city: 'brj',
//         temp: 88
//     }
// };
// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is a ${age}`);
//
// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };
// const {name: publisherName = 'self-published'} = book.publisher;
// console.log(publisherName);

//
//array destructuring
//
const address = ['NewYork', 'manhattan', 'juniper', '1745'];
const [state = 'pennsylvania', , street] = address;
console.log(`You are in ${street} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);


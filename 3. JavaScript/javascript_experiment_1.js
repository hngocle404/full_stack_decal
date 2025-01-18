const monthly_rent = 500;
const yearly_rent = monthly_rent * 12;
console.log(yearly_rent);

console.log('----------'); 

const num = 10;
const str = "test";
console.log(num, typeof num); 
console.log(str, typeof str); 

console.log('----------'); 

const person = {
  name: "Josh Hug",
  city: "Austin",
  state: "TX",
  favoriteFood: "🌮",
  wantsTacosRightNow: true,
  numberOfTacosWanted: 100,
};

console.log('person:', person);
console.log('person:', person.name);
console.log('person["name"]:', person["name"]); 

console.log('----------'); 

const me = {
  name: {
    first: "Brian",
    last: "Holt",
  },
  location: {
    city: "Seattle",
    state: "WA",
    country: "USA",
  },
};

console.log(me);

console.log('----------');

let myObj = { name: "John", age: 31, city: "New York" };
let myJSON = JSON.stringify(myObj);
console.log(myJSON);
console.log(typeof myJSON);

console.log('----------');

const cities = [
  "Seattle",
  "San Francisco",
  "Salt Lake City",
  "Amsterdam",
  "Hong Kong",
];

// print all elements in the array above

let counter = 0;
for (; counter < cities.length; counter++) {
    console.log(cities[counter]);
}

console.log('----------');

let counter2 = 0;
while (counter2 < cities.length) {
    console.log(cities[counter2]);
    counter2++;
}

console.log('----------');

cities.forEach(console.log);

console.log('----------');

cities.forEach(city => console.log(cities));

console.log('----------');

cities.forEach(function (city) {
  console.log(city);
});

console.log('----------');

cities.forEach(city => console.log(city));

console.log('----------');

const arr = [1, 2, 3, 4, 5];

arr.forEach((item) => {
    console.log(item);
});

console.log('----------');

const items = [1, 29, 47];
const squareOfItems = [];

items.forEach(function (item) {
    squareOfItems.push(item * item);
});

console.log(squareOfItems);
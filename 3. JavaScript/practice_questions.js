// 1.
// Write a function multiply that accepts two parameters a and b and
// returns their product. Implement the function using both a
// regular function and an arrow function.
console.log('\n================ 1. Basic function ================');

function multiply(a, b) {
    return a * b;
}
console.log(`Regular function: 2 x 3\nAnswer: ${multiply(2, 3)}`);

const multiply_arrow = (a, b) => a * b;
console.log(`Arrow function: 2 x 3\nAnswer: ${multiply_arrow(2, 3)}`);

// ======================================================================================================

// 2. 
// Create an object person with a property name: "Alex" and a method 
// greet. Use a regular function for greet to log "Hi, I am Alex". 
// Add another method greetArrow using an arrow function. 
// Observe the difference when you call both methods.
console.log('\n================ 2. Scope of `this` in arrow vs. regular ================');

const person = {
    name: 'Kalulu from Honolulu',
    greet: function () {
        console.log(`Regular function: "Ayo I'm ${this.name}"`);
    },
    greet_arrow: random_ass_function_name = () => {
        console.log(`Named arrow method: "Ayo I'm ${this.name}"`)
    },
    greet_arrow_anonymous: () => {
        console.log(`Anonymous arrow method: "Ayo I'm ${this.name}"`)
    }
};

person.greet();
person.greet_arrow();
person.greet_arrow_anonymous();

// ======================================================================================================

// 3. 
// Write a function delayedGreeting that takes a name as an argument 
// and logs "Hello, [name]!" after a 2-second delay using setTimeout. Test it with "Charlie" as the input.
console.log('\n================ 3. Asynchronous using callbacks ================');

function delayed_ass_greeting(random_ass_name) {
    setTimeout(() => {
        console.log(`Hello, ${random_ass_name}!`);
    }, 2000);
}
delayed_ass_greeting('Kalulu from Honolulu')

// ======================================================================================================

// 4.
// Write a function waitAndGreet that returns a promise. The promise
// should resolve after 3 seconds with the message "Hi there!".
// Call the function and use .then() to log the resolved value.

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())  // Convert response to JSON
//     .then(data => console.log("Users:", data))
//     .catch(error => console.log("Error:", error));


fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())  // Convert response to JSON
    .then(data => {
        console.log("Users:", data);
        console.log('-------------');
    })
    .catch(error => console.log("Error:", error));


async function getUsers() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
        console.log("Users:", data);
        console.log('-----97d8ywuidufvsssfsafsf--------');

    } catch (error) {
        console.log("Error:", error);
    }
}

getUsers();

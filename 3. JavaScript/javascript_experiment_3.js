// DATE: SATURDAY 18 JAN 2025
// LESSON: understanding this binding, scope and arrow functions


// ======================================================================


// Example 1. Using regular functions
    // - every thing has to have an key and value in an array like Python. index can be numeric if not stated 
    // - end in commas for the intermediate lines, use; for the final line only
    // - for template literals - if its f'' in Python, it's backticks in JS
    // - similar to C, surround the {} with ${}; allow for multiline strings as well  
    
let peasants = [
    {
        name: 'Kalulu Not Found',
        age: 404,
        location: 'Zootopia',
        random_item: function random_ass_function_name() {
            return `The name is ${this.name}, aged ${this.age} and based in ${this.location}.`;
        },
    },
    {
        name: 'George Washington',
        age: 2,
        location: 'The Buddha temple in a Chinese rainforest',
        random_item: function random_ass_function_name() {
            return `The name is ${this.name}, aged ${this.age} and based in ${this.location}.`;
        },
    },
];

console.log(peasants[0].random_item());
// The name is Kalulu Not Found, aged 404 and based in Zootopia.
console.log(peasants[1].random_item());
// The name is George Washington, aged 2 and based in The Buddha temple in a Chinese rainforest.


// ======================================================================


// Example 2. Using arrow functions
    // - you can have anonymous or named functions, the previous one is harder to debug
    // - arrow function are anonymous by default but you can set a name
    
let commoners = [
    {
        name: 'Ngoc Ngu Ngoc',
        from: 'The Potato Planet',
        key: name_for_a_simple_print_fx = () =>
            `The name is ${this.name}, from ${this.from}.`
        // if it were to be anonymous aka default -> no equal sign:
        // key: () => 'Template literals';
    },
];

console.log(commoners[0].key());
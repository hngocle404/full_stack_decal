// DATE: SATURDAY 18 JAN 2025

// LESSON: this

var 
function Person() {
    this.age = 42;
    setTimeout(() => {
        console.log('this.age', this.age);
    }, 1000);
};

console.log(Person());
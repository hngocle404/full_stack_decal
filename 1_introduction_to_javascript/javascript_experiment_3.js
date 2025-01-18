// DATE: SATURDAY 18 JAN 2025
window.age = 10;

function Person() {
    this.age = 42;
    setTimeout(() => {
        console.log('this.age', this.age);
    }, 1000);
}
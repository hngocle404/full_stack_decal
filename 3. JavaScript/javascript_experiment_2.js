// Date: 10 Jan 2025


// === Understanding global vs local scope ===

console.log('\n--Understanding global vs local scope--');
var carName = 'Chevrolet'
function myFunction() {
    carName = 404;
}
console.log(carName);
// The 404 should have no affect cos you cannot
// change a global var from a local scope.

console.log('\n--var vs. const vs. let--');

if (true) {
    var name = 'Habibi';
    let likes = 'Eating hot tofu';
    const favNumber = 404;
}
console.log('Name:', name)
// console.log(likes)
// console.log(favNumber)
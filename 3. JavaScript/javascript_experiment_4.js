console.log('This is expected to go first');
setTimeout(() => console.log('This is expected to go third'), 2000); // Runs after 2 seconds
console.log('This is expected to go second'); // Runs immediately
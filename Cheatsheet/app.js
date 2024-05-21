
function greet(name, callback) {

    console.log(`Hello, ${name}!`);
    callback(); // Executes the callback function

}

function sayGoodbye() {

    console.log('How are you!');
}

greet('John Doe', sayGoodbye); // Passing sayGoodbye function as a callback

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);

xhr.send();








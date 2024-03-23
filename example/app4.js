
const add = function(a, b) {

    console.log(a + b);
}

//name of the function is add
add(2, 3);

(function sayWelcome() {
     console.log("Welcome!") }
)();

const arrowFunc = (a, b) => a + b;
console.log(arrowFunc(5, 3));
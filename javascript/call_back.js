function greet(callback) {

    console.log("Good Morning");

    callback();

    console.log("Good Night");
}

function sayHello() {
    console.log("Hello!");
}

greet(sayHello);
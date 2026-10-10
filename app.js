function greet(name) {
    return `Hello, ${name}!`;
}

const names = Array.from({ length: 50 }, (_, index) => `Name ${index + 1}`);

names.forEach((name) => {
    console.log(greet(name));
});
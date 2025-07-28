async function makeGreeting(name) {
  await setTimeout(() => {
    return `Hello, my name is ${name}!`;
  }, 0);
}

const name = 'Miriam';
const greeting = makeGreeting(name).then(console.log);
console.log(greeting); // undefined

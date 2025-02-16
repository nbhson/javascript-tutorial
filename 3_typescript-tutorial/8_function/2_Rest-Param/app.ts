function greet(greeting: string, ...names: string[]) {
  return greeting + " " + names.join(", ") + "!";
}

greet("Hello", "Steve", "Bill"); // returns "Hello Steve, Bill!"
greet("Hello");// returns "Hello !"

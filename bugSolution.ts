function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User", "John User"];

// Solution: Iterate through the array and call the function for each element
for (const name of user) {
  console.log(greeter(name));
}

//Alternative Solution: Use a type that accepts an array 
function greeterArray(people: string[]): string[] {
    return people.map(person => "Hello, " + person);
}
console.log(greeterArray(user));
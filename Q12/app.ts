// Store names in an array
let names: string[] = ["Alice", "Bob", "Charlie", "David"];

// Print a personalized message to each person
let message: string = "Hello, {}! How are you today?";
for (let name of names) {
    console.log(message.replace("{}", name));
}
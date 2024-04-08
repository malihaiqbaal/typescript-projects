// Store names in an array
var names = ["Alice", "Bob", "Charlie", "David"];
// Print a personalized message to each person
var message = "Hello, {}! How are you today?";
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log(message.replace("{}", name_1));
}

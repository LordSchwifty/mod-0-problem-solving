// Challenge 1
//Here the goal was to print out only words with over 3 characters
//using an if statement we can restrict the output to words
//over the length of 3 characters.
//The result was printing out all words over 3 characters.
var animals = ["cat", "treefrog", "tabby cat", "fish"] 
for (var i = 0; i < animals.length; i++) {
    if (animals[i].length > 3) {
        console.log(animals[i];)
    }
}

// Challenge 2
//Here I wanted to print out all words that start with s. I found
// the startswith function online and included that in the if 
// statement acheiving the result desired.
var animals =["snake", "sfish", "cat"]
for (var i =0; i < animals.length; i++) {
    if (animals[i].startsWith("s")) {
        console.log(animals[i])
    }
}
//Challenge 4
// This was more complex as we wanted to create a numbered list
// of names in alphabetical order. The .sort function was
// perfect for puting the names in alphabetical order 
// yet acheiving the numbered list was the tricky part. I chose to use
// string interpolation and used "i + 1" before the sort function.
// if i = 0 then the list would start at 1 and add 1 to whatever
// array position that was being printed. This acheived a numbered
// list in alphabetical order!
var names = ["John", "Jack", "Sam", "Alice"];
for (var i = 0; i < names.length; i++) {  ;
 console.log(`${i+1}. ${names.sort()[i]}`)
}


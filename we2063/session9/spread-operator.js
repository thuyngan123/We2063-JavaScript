
// const arr = [7, 8, 9];
//shallow copy va deep copy
const person = {
    name: "Dat",
    age: 20,
    child: {
        name: "Kien",
    },
};
const person2 = {
    ...person,
    // shadow copy và deep copy
    address: "Thai Binh",
};

// Deep copy

// const person2 = JSON.parse(JSON.stringify(person));
// const person2 = structuredClone(person);
// // person2.address = "abc";
// person2.child.name = "Son";

console.log("person", person);
console.log("person2", person2);

function total(...numbers) {
    console.log(numbers);
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
}
total(1, 2, 3, 4, 5);
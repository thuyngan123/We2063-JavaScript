const projects = [
    { id: 1, name: "Dự án 1" },
    { id: 2, name: "Dự án 2" },
    { id: 3, name: "Dự án 3" },
];

let result = "";
//for
for (let i = 0; i < projects.length; i++) {
    result += `${projects.name}`;
}
console.log(result);
//
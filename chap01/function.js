//Function name/function delaration
function sum(a, b) {
    //checking
    if (typeof a === 'string') {

    }
    //processing
    //return
    return a + b;
}
console.log("Function name", sum(20, 30));
//function expresstion
const sum2 = function (a, b) {
    return a + b;
}
console.log("function expresstion", sum2(20, 30));
//arrow function 
const sum3 = (a, b) => a + b;
console.log("arrow function ", sum3(20, 30));
//IIFE(Immediately Invaked Function Expresstion)
//Mặc định tự động gọi hàm
((a, b) => console.log(a + b))(20, 30);
//hoặc
(function (a, b) {
    console.log(a + b);
})(20, 30);


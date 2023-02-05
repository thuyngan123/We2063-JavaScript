
//cú pháp: object ={key:value}
const person = {
    name: "Thuy Ngan",
    age: 20,
    city: "Ha Noi",
    address: {
        street: "Duong Quang Ham",
        number: 79,
    },
};
//destructoring
//destructoring là một cách giải nén các giá trị từ một mảng hoặc một đối tượng thành các biến riêng biệt(phá vỡ cấu trúc dữ liệu phức tạp thành một cấu trúc dữ liệu nhỏ hơn như một biến)
//cách 1
const {
    name: myName, age, city, address: { street }
} = person;
console.log(person)
//cách 2:
// function showInfo(myName, age, city, address: { street }) {
//     console.log(myName, age, city, street);
// }
// showInfo(person)

function useState(intialState) {
    let state = intialState;
    function getState() {
        return state;
    }
    function setState(newState) {
        return (state = newState);
    }
    return [getState, setState];
};
const [number, setNumber] = useState(20);
console.log("number cũ: ", number());
setNumber(30);
console.log("number mới: ", number());

//keyword:tính bất biến,object.assign,

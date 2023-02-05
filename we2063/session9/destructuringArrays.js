const restaurant = {
    name: "Classico Italiano",
    location: 'Via Anglo Tanvanti 23,Firenza,Italia',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    startMenu: ['Focaccia', 'Bruschetta', 'Garlic'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 22,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },
    order: function (startIndex, mainIndex) {
        return [this.startMenu[startIndex], this.mainMenu[mainIndex]];
    },
    //đối với object 
    orderDelivery: function ({ mainIndex, startIndex, time, address }) {
        console.log(`Order recevied! ${this.startMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delevice ${address} at ${time}`);
    }

};
//
restaurant.orderDelivery({
    time: '19:30',
    address: 'Via Anglo 21',
    mainIndex: 1,
    startIndex: 2,

});


//Object destructoring
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
//đặt tên biến mới
const {
    name: restaurantName,
    openingHours: hours,
    categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
// default value
const { menu = [], startMenu: starters = [] } = restaurant;
console.log(menu, starters);
//Mutatting variables
let a = 30;
let b = 10;
const obj = { a: 40, b: 25, c: 50 };
({ a, b } = obj);
console.log(a, b);

//Nested object 
// const { thu } = openingHours;
// console.log(thu);

// const { thu: { open, close } } = openingHours;
// console.log(open, close)

const { thu: { open: c, close: d } } = openingHours;
console.log(c, d);






//array destructoring
//kb mảng
const arr = [2, 3, 4]
//Công việc:Hủy cấu trúc mảng từ phía bên phải (= arr).Khi [] ở bên trái của dấu bằng thì nó đang thực hiện cấu trúc lại.Mảng ban đầu k bị ảnh hưởng
const [x, y, z] = arr;
console.log(x, y, z);

//Hủy cấu trúc mảng categories và lấy một số yếu tố ra khỏi categories.Muốn lấy được Vegetarian thì const [first, , second]
// const [first, second] = restaurant.categories;
// console.log(first, second);


let [main, secondary] = restaurant.categories;
console.log(main, secondary);
//vì không có cấu trúc hủy nên
//Switching varibales:Chuyển đổi các biến.
//Có thể bỏ
// const temp = main;
// main = secondary;
// secondary = temp;


//tạo mảng phụ
[main, secondary] = [secondary, main];
console.log(main, secondary);
//
// console.log(restaurant.order(2, 0));
//Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//==Nester Destructoring
//một mảng bên trong một mảng
const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// const [i1, j2] = nested;
// console.log(i, j);
// console.log(i1, j2);
//phá cấu trúc 2 mảng lồng nhau
const [i, , [j, k]] = nested;
console.log(i, j, k);


//dafault values
const [p, q, r] = [6, 7];
console.log(p, q, r);
//===th2
const [p1 = 1, q1 = 1, r1 = 1] = [6];
console.log(p1, q1, r1);












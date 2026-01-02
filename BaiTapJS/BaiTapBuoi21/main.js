// B1

const classA = ['AN', 'Binh', 'Chi']

 classB = classA
classB[0] = 'An Updated'
console.log(classA)

// classA = ['AN', 'Binh', 'Chi'] dia chi 0x01
// classB = classA dia chi 0x01
// sua B la sua dia chi 0x01

// B2

let x = "10";
let y = 2;

console.log(x + y);
console.log(x - y);
console.log(x * "3");
console.log("Hello" - y);

// phep + trong js vua la phep cong vua la phep noi chuoi nen '10' + 2 => '10' + '2' => '102'
// phep - trong js dung cho phep toan nen '10' - 2 => 10 - 2 = 8
// 'hello' o chuyen dc thanh so => NaN
// Nan - 2 => NaN


// B3
// TH1
// let age = 9
// let mathScore = 10
// let isVIP = false
//
// let canEnter = (age >= 10 && mathScore >= 7) || isVIP
// console.log(canEnter)

// TH2

let age = 9
let mathScore = 10
let isVIP = true

let canEnter = (age >= 10 && mathScore >= 7) || isVIP
console.log(canEnter)

// co tuong duong vi ! la dau phu dinh. age < 10 phu dinh => age >= 10

// B4

const laptop = {
 brand: "Dell",
 price: 1000,
 spec: {
  ram: "8GB",
  ssd: "256GB"
 }
};

const myLaptop = laptop;
myLaptop.brand = "Apple";

const mySpec = laptop.spec;
mySpec.ram = "16GB";

console.log(laptop.brand);
console.log(laptop.spec.ram);

// tai vi: vd laptop la 1 oj co dia chi la 1x01
// trong do co 1 oj con la spec co dia chi la 1x02
// khi mylaptop = laptop thi cung tro toi dia chi bo nho la 1x01 nen khi thay doi brand thi laptop cung thay doi
// o oj 1x02 cung vay nen ca hai deu anh huong den oj laptop ban dau
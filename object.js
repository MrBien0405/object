// // let person = {
// // name: " Vladimir Putin ",
// // YearofBirth: 1952,
// // nationality: "Nga"
// // }
// // // for( let i = 0; i<=person.length -1; i++){
// // console.log(`${person}`)
// // let a = ""
// // // }
// // let usreInput = prompt(" nhập Y/N")
// // if( usreInput==="Y"){
// // let item = prompt(" Bạn muốn nhập thông tin gì, giá trị cụ thể là gì")
// // person.push(item)
// // console.log(person);
// // }else if(usreInput==="N"){
// //     console.log("Good Bye");
// // }else{
// //     console.log("Bạn nhập sai thông tin");
// // }
// //
// //
// //Object - đối tượng

// /* let myInfor = {
//     name: "Javascript",
//     age: "18",
// }; */
// /* console.log(myInfor); */
// /* console.table(myInfor); */
// // gồm những cặp key - value



// // C/R/U/D

// //Create:
// // myInfor.address= "Ha noi";
// // console.log(myInfor);
// // console.table();
// // Ngoài ra có thể thêm bằng 1 biến:
// /* let myEmail = "Email";
// let myInfor = {
//     name: "Javascipt",
//     age: "18",
//     [myEmail]: "tranbien1845@gmail.com",
// };
// console.log(myInfor);
//  */

// // Read:
// //Read one:
// let myInfor = {
//     name: "Javascript",
//     age: "18",
// };
// // console.log(myInfor.name);
// //Read all 
// // Google search for in:
// /* for(key in object){
//     block code
// } */
// // for(let a in myInfor){
// //     console.log(`${a}: ${myInfor[a]}`);
// // }

// //
// //
// for(let i in myInfor){
//     // console.log(i);
//     // console.log(myInfor[i]);
// }
// console.log(myInfor.name);
// console.log(myInfor["name"]);
// let name1 = "name";
// console.log(myInfor[name1]);
//Update 
// let myInfor = {
//     name: "Javascript",
//     age: "18",
// };
/* myInfor.name = "Biên";
console.log(myInfor); */

//Delete:

// delete myInfor.age;
// console.log(myInfor);

//

//kiểm tra kiểu dữ liệu
//type of
// let number ="10"
// let number ={};
// let number = [
//     {id:"phong"},
//     {id: "hoa"},
// ]
// console.log(munber);
// console.log((typeof number));
//
// Array object:
// [{key - value},{},{}]
// Array obj in javascript

//
//
//
//
//Bài tập:
// let dictionary = {
//     agile: "Agile is an iterative approach to project management and software development",
//     scrum: "Scrum is a lightweight framework that helps people, teams and organizations generate value through adaptive solutions for complex problems",
//     aws: "Aws stands for Amazon web services, a cloud solution for web development",
//     pm: "The short version  of Project Manager, the person in charge of the final result of a project",
//     uiux: "UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels",
// }
// alert("Hi there, this is dev dictionary ");
// let keyWord = prompt(" Enter a keyword")
// let b = 0;
// for (let a in dictionary) {
//     if (a == keyWord) {
//         console.log(`${a}: ${dictionary[a]}`);
//         b = 1;
//     }if(b==0){
//         console.log("We could not find your world:dev");
//     }
// }

// let keyWord = prompt("Enter a keyword");
// if(dictionary[keyWord] !== undefined){
//     console.log(dictionary[keyWord]);
// }else{
//     console.log("We could not find your world:dev");
// }


//4.2 Viết một đoạn mã cho phép người dùng có thể thêm từ mới 
// và ý nghĩa của nó nếu chưa có trong developer dictionary
// alert("Hi there, this is dev dictionary ");
// let tumoi = prompt("nhập từ mới vào");
// let ynghia = prompt("nhậy ý nghĩa từ mới");
// let b = 0;
// dictionary[tumoi] = (`${ynghia}`)
// //5 
// for (let tumoi in dictionary) {
//     if (tumoi === dictionary) {
//         console.log("Đã có trong từ điền");
//         b = 1;
//     }
// } if (tumoi !== dictionary) {
//     console.log(dictionary);
// } 

//
//5
//Tạo Array Object
let products = [
    {name: "Tesla model 3",
    Brand: "Tesla",
    Price: "142800",
    Color: "White",
    Category: "SUV",
    },
    {name: "Audi A8",
    Brand: "TAudi",
    Price: "184870",
    Color: "Black",
    Category: "SUV",
    },
    {name: "Vinfast Lux 2.0",
    Brand: "Vin",
    Price: "21490",
    Color: "Gray",
    Category: "SUV",
    },
    {
    name: "HondaCRV",
    Brand: "Honda",
    Price: "284900",
    Color: "Blue",
    Category: "SUHatchbac"
    },
];
//5.1
// for(let i = 0; i < products.length; i++){
//     console.log(`Name: ${products[i].name}`);
//     console.log(`price: ${products[i].Price}`);
//     console.log("---------------------------");
// }
//5.2
//Viết một đoạn mã cho phép người dùng nhập vào vị trí của xe mà họ muốn in ra ở trong bảng trên.
//  Sau đó in toàn bộ thông tin của xe đó ra
// let userInput = Number(prompt("Nhập vị trí muốn lấy"));
// console.log(`Name: ${products[userInput].name}`);
// console.log(`Brand: ${products[userInput].Brand}`);
// console.log(`Price: ${products[userInput].Price}`);
// console.log(`Color: ${products[userInput].Color}`);
// console.log(`Category: ${products[userInput].Category}`);
// console.log("-------------------------------------");
//5.3Viết một đoạn mã cho phép người dùng nhập vào category của xe mà họ muốn in ra ở trong bảng trên. 
// Sau đó in ra toàn bộ thông tin của các xe có category đó. 
// let userInput = prompt("nhập category của xe muốn in");
// for( let i=0; i<= products.length-1; i++){
//     if(userInput == products[i].Category){
//         console.log(`Name: ${products[i].name}`);
//         console.log(`Brand: ${products[i].Brand}`);
//         console.log(`Price: ${products[i].Price}`);
//         console.log(`Color: ${products[i].Color}`);
//         console.log(`Category: ${products[i].Category}`);
//     }
// }
//5.4Thêm providers cho mỗi car
// let userInput = prompt("nhập provides vào car")

products[0].providers= "ZeroAuto VhStore"
products[1].providers= "HAauto VhStore"
products[2].providers= "HAauto"
products[3].providers= "HAauto"
console.log(products);
//
//5.5(Optional) Tìm và in ra car dựa vào provider.
//  Nếu bạn cần thêm gợi ý thì hãy tìm chúng ở cuối file này nhé
let userInput = prompt("nhập pronvider cần in");
for (let i = 0; i <= products.length - 1; i++) {
    let c = products[i].providers.split(" ")
    if (c[0] == userInput || c[1] == userInput ) {
        console.log(`Name: ${products[i].name}`);
        console.log(`Brand: ${products[i].Brand}`);
        console.log(`Price: ${products[i].Price}`);
        console.log(`Color: ${products[i].Color}`);
        console.log(`Category: ${products[i].Category}`);
        console.log(`Providers: ${products[i].providers}`);
        console.log(("----------------------------------"));
    }
}




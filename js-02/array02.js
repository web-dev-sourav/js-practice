const new1 = [ "a", "b", "c" ,"d"]
const new2 = ['1' ,'2', '3']

const Arrayprb = new1.push(new2)

console.log(new1);

// var test1 = new1.length
// console.log(test1);

// // console.log(new1.length());

// var test = new1.concat(new2)
// console.log(test);

//sprade oratator

const allTestmain = [...new1, ...new2 ]
// console.log(allTestmain);
// const allTest = [...new1, ...new2 , ...Arrayprb]
// console.log(allTest);

const multiarray = [1,2,3,4,[88,66,747],5,6,[55,22,99,[333,666,444,555,222]]]

const multiarray2 = multiarray.flat(Infinity)

// console.log(multiarray2);


// console.log(Array.isArray([ "a", "b", "c" ,"d"]));

// console.log(Array.from(typeof "Sourav"));


let num = 102;
let num1 = 103;
let num2 = 104;

// console.log(Array.of(num ,num1 , num2));

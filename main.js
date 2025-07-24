// let arr =[1, 2, 3, 2, 4, 5, 6, 6, 10, 20, 20].sort((a,b) => a-b);
// let natija =[];
// let repeat =[];
// for (let i =0; i<arr.length; i++){
//     if (arr[i] == arr[i+1]){
//         repeat.push(arr[i])
//     } else {
//         natija.push(arr[i]);
//     }
// }

// console.log(natija);


// 2-method


let arr =[1, 2, 3, 2, 4, 5, 6, 6, 10, 20, 20].sort((a,b)=> a- b)
let natija = arr.filter((val, index, arr) =>arr[index + 1] !== val);
console.log(natija);


// 2-chisi

// let fruits =["apple", "kiwi", "potato", "banana"];
// console.log(fruits.sort((a, b) => a.length - b.length));


// let res = fruits.sort((a,b)=> b.length - a.length);
// console.log(res);

// №112
// #1 Выведите в консоль все элементы следующего массива:
let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

for (let elem in arr) {
    console.log(elem)
}

// №113
//#1-2 Выведите в консоль все ключи и его элементов следующего объекта:
let obj = {x: 1, y: 2, z: 3};
for (let key in obj) {
    console.log(key);
    console.log(obj[key]);
}
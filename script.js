let arr = [100, 200, 1488, 1939, 1991]

// for (let el of arr) {
//     console.log(el)
// }


//метод forEach - последователбно перебирает все элементы массива
//метод в параметрах улучшает функцию которая выполняется для каждого элемента массива
// в эту функцию можно передавать три параметра
// Если эти параметры есть(они не обязательны), то в первый - элемент, второй - индекс, третий - массив

// Синтаксис:
//массив.forEach(function(элемент, индекс, массив){
// код для всех элементов
//})

console.log('Метод forEach')
arr.forEach((el, index, massiv) => {
    console.log(el)
    console.log(index)
    el = el * 2
    massiv[index] = el
})
console.log(arr)

console.log('Цикл for')

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2
}

console.log(arr)


// метод map - применяет заданную функцию для каждого элемента массива
// при этом метод не изменяет исходный массив, а возвращает изменённый
// метод в параметре получает функцию, которая выполняется для каждого элемента массива
// То что вернёт эта функция через return для элемента массива, станет новым значением этого элемента

/*
синтаксис:
let новый массив = массив.map(function(элемент, индекс, массив){
    код
    return изменённый элемент
})
*/

let array = [100, 1488, 200, 800]
console.log(array)



mas = array.map((el) => {
    return el / 10
})

console.log(mas)

const list = Array.from(document.querySelectorAll('li'), (el) => { console.log(el) })


// list.forEach((item) => {
//     console.log(item)

// })
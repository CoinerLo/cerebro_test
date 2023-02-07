const arrayA = [1, 3, 7, 8, 10, 12, 14, 15, 16, 19, 30, 33, 34, 35, 38, 44, 44, 49, 51, 51]
const arrayB = [2, 4, 7, 8, 11, 14, 15, 17, 20, 24, 25, 29, 30, 35, 39, 40, 41, 49, 49, 51]

const arrayC = arrayA.filter(element => !arrayB.includes(element)) // Значения есть в arrayA, но нет в arrayB

console.log(arrayC)

const arrayD = [...new Set(arrayA.filter(element => arrayB.includes(element)))] // Значения есть в обоих массивах, дубликаты удалить

console.log(arrayD)

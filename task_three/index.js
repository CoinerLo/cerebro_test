const arrayA = [1, 3, 7, 8, 10, 12, 14, 15, 16, 19, 30, 33, 34, 35, 38, 44, 44, 49, 51, 51]
const arrayB = [2, 4, 7, 8, 11, 14, 15, 17, 20, 24, 25, 29, 30, 35, 39, 40, 41, 49, 49, 51]

const arrayC = arrayA.filter(element => !arrayB.includes(element)) // Значения есть в arrayA, но нет в arrayB

const objA = {}
arrayB.forEach(b => { objA[b] = true })
const arrayC_versionTwo = arrayA.filter(e => !objA[e])

console.log(arrayC, arrayC_versionTwo)

const arrayD = [...new Set(arrayA.filter(element => arrayB.includes(element)))] // Значения есть в обоих массивах, дубликаты удалить

// создать массив в котором содержатся все числа, которые есть в обоих массивах А и В.
// порядок не важен, дубликаты удалить

const setD = new Set([...arrayA, ...arrayB])
const arrayD_versionTwo = Array.from(setD)

console.log(arrayD, arrayD_versionTwo)

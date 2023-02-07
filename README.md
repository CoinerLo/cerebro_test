# Тестовое задание для компании Cerebro

## Задание 1 (task_one)

На HTML реализовать простой флекс-бокс. Использовать CSS-стили. https://drive.google.com/file/d/1RTT5I1Fp16Lj3J5hPUByCz407CZq81-i/view?usp=sharing

## Задание 2 (task_two)

На языке typescript (с использованием типов) реализовать контролируемый react-компонент “строка ввода дробного десятичного числа с разделителем , (запятая)”. Например “23,4”, “-5”

Возможно пустое состояние компонента, это соответствует значению undefined.
Компонент не должен допускать ввод пользователем “плохого числа”, через возврат к предыдущему валидному состоянию.

Интерфейс компонента:
- число-значение
- обработчик на изменение числа-значения. 
- опциональный CSS-класс для передачи внутреннему DOM-элементу `<input />`

### Для запуска:

```
git clone 
cd cerebro_test/task_two
npm i
npm run dev
```

Приложение откроется по адресу http://localhost:5173/

## Задание 3 (task_three)

Имеется 2 больших (многие тысячи элементов) массива чисел A и B.
- из массива A составить массив C, в котором содержатся числа, которых нет в массиве B. Порядок элементов и дублирующие значения должны сохраниться.
- составить массив D, в котором содержатся все числа, которые есть в обоих массивах A и B. Порядок не важен, дубликаты удалить.

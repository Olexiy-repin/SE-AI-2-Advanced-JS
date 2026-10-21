/*
 * Типи для змінних та аргументів
 *
 * Any
 * Unknown
 * Tuple
 * Union Type
 * Literal Type
 * Enum
 */

//* Any
// let firstName: any = 'Oleksii';

// firstName.slice();

// firstName = 100;

// firstName = true;

//* Unknown
// let firstName: unknown = 'Oleksii';

// if (typeof firstName === 'string') {
//   firstName.slice();
// }

// let numbers: unknown = [100, 2, 3];

// if (Array.isArray(numbers)) {
//   numbers.map(() => {});
// }

//* Tuple
//TODO: Типізуй масив userCoordinates за допомогою кортежів.
// const userCoordinates: [number, number] = [10, 20];

/*
TODO: Типізуй функцію isTheSamePoint(firstPoint, secondPoint), яка перевіряє дві точки на їхнє однакове розташування.
*/
// type Point = [number, number, number];

// const isTheSamePoint = (firstPoint: Point, secondPoint: Point) => {
//   return JSON.stringify(firstPoint) === JSON.stringify(secondPoint);
// };

// console.log(isTheSamePoint([1, 3, 4], [1, 3, 4]));
// console.log(isTheSamePoint([1, 3, 4], [0, 8, 4]));

//* Union Type
/*
TODO: Типізуй функцію getIndex(str, char), яка повертає індекс входження символу в рядок або null,
TODO: якщо такого символу немає.
*/
// function getIndex(str: string, char: string) {
//   const indexOfStr = str.indexOf(char);

//   return indexOfStr === -1 ? null : indexOfStr;
// }

// const result1: number | null = getIndex('test', 't');
// const result2: number | null = getIndex('test', 'p');

// console.log(result1);
// console.log(result2);

//* Literal Type
/*
TODO: Опишіть літеральний тип для змінної orderStatus, яка може містити тільки такі значення:
TODO: 'Created', 'Paid', 'Shipped', 'Delivered';
*/
// let orderStatus: 'Created' | 'Paid' | 'Shipped' | 'Delivered' = 'Created';

//* Enum
/*
TODO: Реалізуй enum ModalStatus із двома значеннями: Opened та Closed
TODO:
TODO: Типізуй функцію buildModal(text, status). Вона повертає об'єкт, що описує модальне вікно.
TODO: Параметри функції:
TODO: - text (текст, який має бути всередині вікна після ініціалізації);
TODO: - status (статус, з яким потрібно створити об'єкт вікна).
TODO:
TODO: Функція повертає об'єкт із двома полями: text (тут зберігається переданий текст) та status (тут зберігається переданий статус)
*/
// enum ModalStatus {
//   Opened = 'opened',
//   Closed = 'closed',
// }

// const buildModal = (text: string, status: ModalStatus) => {
//   return {
//     text,
//     status,
//   };
// };

// const modalInstance = buildModal('My amazing modal', ModalStatus.Closed);

// console.log(modalInstance);

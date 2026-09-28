//* Створення нової дати

//~ Поточна дата
// const date = new Date();

//~ Конкретна дата, аргумент у вигляді рядка
// const date = new Date('2026-09-29T12:20:00');

//~ Конкретна дата, числові аргументи
// const date = new Date(2026, 8, 29, 12, 20);

//~ Конкретна дата, від 01 січня 1970 року
// const date = new Date(934242424939);

// console.log(date);

//TODO: Створіть об'єкт date для дати: 10 вересня 2022 року, 3 години 12 хвилин.
// const date1 = new Date('2022-09-10T03:12:00');

// console.log(date1);

// const date2 = new Date(2022, 8, 10, 3, 12);

// console.log(date2);

/*
TODO: Створіть функцію getWeekDay(date), яка показує день тижня у короткому форматі:
TODO: 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'НД'.
*/
// const getWeekDay = date => {
//   const days = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

//   return days[date.getDay()];
// };

// const dateTomorrow = new Date('2026-09-29T00:00:00');

// console.log(getWeekDay(dateTomorrow));

/*
TODO: Створіть функуію getLastDayOfMonth(year, month), яка повертає останнє число місяця. Інколи це 30, 31 або навіть 28/29 у лютому.
TODO: Параметри:
TODO: year – рік з чотирьох цифр, наприклад, 2012.
TODO: month – місяць від 0 до 11.
TODO: Наприклад, getLastDayOfMonth(2012, 1) = 29 (високосний рік, лютий).
*/
// const getLastDayOfMonth = (year, month) => {
//   const date = new Date(year, month + 1, 0);

//   return date.getDate();
// };

// console.log(getLastDayOfMonth(2012, 1));

//TODO: Створіть функцію getSecondsToTomorrow(), яка повертає кількість секунд до завтрашнього дня.
// const getSecondsToTomorrow = () => {
//   const dateNow = new Date();
//   const dateTomorrow = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate() + 1);

//   const diff = dateTomorrow - dateNow;

//   return Math.trunc(diff / 1000);
// };

// console.log(getSecondsToTomorrow());

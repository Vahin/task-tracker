type DateToString = (date: Date) => string;

export const dateToString: DateToString = (date) => {
  const DayToString = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];

  const MonthToString = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  return `${DayToString[date.getDay()]}, ${date.getDate()} ${
    MonthToString[date.getMonth()]
  }`;
};

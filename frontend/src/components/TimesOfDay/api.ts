type TimeOfDayToString = (time: Date) => string;

export const timeOfDayToString: TimeOfDayToString = (time) => {
  const hours = time.getHours();
  const hoursToString = [
    "Доброй ночи",
    "Доброе утро",
    "Добрый день",
    "Добрый вечер",
  ];

  return hoursToString[Math.floor(hours / 6)];
};

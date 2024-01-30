import * as dayjs from 'dayjs';
import 'dayjs/locale/ru'; // import locale

// TODO: проверить правильно ли работает в переменной lastActivity объект и метод  dayjs(date)
export default function dateFormatter(date: string): string {
  const today = dayjs();
  const lastActivity = dayjs(date);
  let lastActivityToShow;

  // check  within the current year
  if (today.year() !== lastActivity.year()) {
    lastActivityToShow = lastActivity.format('MMM DD, YYYY');

    // check if within the current month
  } else if (today.month() !== lastActivity.month()) {
    lastActivityToShow = lastActivity.format('MMM DD');

    //  within the current week
  } else if (
    today.date() - lastActivity.date() > 7 &&
    today.date() !== lastActivity.date()
  ) {
    lastActivityToShow = lastActivity.format('ddd');
  } else {
    //  within the current day
    lastActivityToShow = lastActivity.format('HH:mm');
  }

  return lastActivityToShow;
}

import * as dayjs from 'dayjs';
import 'dayjs/locale/ru'; // import locale

export default function dateFormatter(date: number): string {
  const today = dayjs();
  const lastActivity = dayjs.unix(date);
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

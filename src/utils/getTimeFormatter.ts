import * as dayjs from 'dayjs';
import 'dayjs/locale/ru'; // import locale

export default function getTimeFormatter(date: number): string {
  const lastActivity = dayjs.unix(date);
  const lastActivityToShow = lastActivity.format('HH:mm');

  return lastActivityToShow;
}

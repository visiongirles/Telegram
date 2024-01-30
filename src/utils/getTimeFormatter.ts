import * as dayjs from 'dayjs';
import 'dayjs/locale/ru'; // import locale

export default function getTimeFormatter(date: string): string {
  const lastActivity = dayjs(date);
  const lastActivityToShow = lastActivity.format('HH:mm');

  return lastActivityToShow;
}

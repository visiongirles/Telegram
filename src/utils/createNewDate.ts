import * as dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

export function createNewDate() {
  dayjs.extend(utc);
  // return dayjs().millisecond();
  return dayjs.utc().format();
  // return new Date().toISOString();
}

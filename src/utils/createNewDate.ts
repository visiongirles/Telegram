import dayjs from 'dayjs';

export function createNewDate() {
  return dayjs().millisecond();
}

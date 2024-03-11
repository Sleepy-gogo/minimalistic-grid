import data from './data';

const { clock } = data;

export const clockFormatter = new Intl.DateTimeFormat(clock.clockFormat, {
  timeZone: clock.timezone,
  hour: 'numeric',
  minute: 'numeric'
});
export const dateFormatter = new Intl.DateTimeFormat(clock.dateFormat, {
  timeZone: clock.timezone,
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});



interface ITimestamp {
  'hours': number,
  'minutes'?: number
};


export function makeTimeStamp(input: ITimestamp): number {
  if (!input.minutes) input.minutes = 0;
  return input.hours * 60 + input.minutes;
}

export function PrintHours(input: number): string {
  let hours = Math.floor(input / 60);
  return String(hours).padEnd(2, '0');

}

export function PrintMinutes(input: number): string {
  let hours = Math.floor(input / 60);
  let minutes = Math.round(input - hours * 60);
  return String(minutes).padEnd(2, '0');
}

export const DayTypes = Object.freeze({
  daily: Symbol('daily'),
  weekdays: Symbol('weekdays'),
  custom: Symbol('custom')
});

export function GetDayType(input: number[]): Symbol {
  if (!input || !input.length || input.length == 1 && input[0] == 0) return DayTypes.daily;
  else if (input.length == 5 && !input.includes(6) && !input.includes(7)) return DayTypes.weekdays;
  else return DayTypes.custom;
}
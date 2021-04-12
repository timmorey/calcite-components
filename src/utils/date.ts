import { DateLocaleData, NUMERALS } from "../components/calcite-date-picker/utils";

/**
 * Check if date is within a min and max
 */
export function inRange(date: Date, min?: Date | string, max?: Date | string): boolean {
  const time = date.getTime();
  const afterMin = !(min instanceof Date) || time >= min.getTime();
  const beforeMax = !(max instanceof Date) || time <= max.getTime();
  return afterMin && beforeMax;
}

/**
 * Ensures date is within range,
 * returns min or max if out of bounds
 */
export function dateFromRange(date?: any, min?: Date | string, max?: Date | string): Date | null {
  if (!(date instanceof Date)) {
    return null;
  }
  const time = date.getTime();
  const beforeMin = min instanceof Date && time < min.getTime();
  const afterMax = max instanceof Date && time > max.getTime();
  if (beforeMin) {
    return min as Date;
  }
  if (afterMax) {
    return max as Date;
  }
  return date;
}

/**
 * Parse an iso8601 string (YYYY-mm-dd) into a valid date.
 * TODO: handle time when time of day UI is added
 */
export function dateFromISO(iso8601: string | Date): Date | null {
  if (iso8601 instanceof Date) {
    return iso8601;
  }
  if (!iso8601 || typeof iso8601 !== "string") {
    return null;
  }
  const d = iso8601.split(/[: T-]/).map(parseFloat);
  const date = new Date(d[0], (d[1] || 1) - 1, d[2] || 1);
  date.setFullYear(d[0]);
  if (isNaN(date.getTime())) {
    throw new Error(`Invalid ISO 8601 date: "${iso8601}"`);
  }
  return date;
}

/**
 * Return first portion of ISO string (YYYY-mm-dd)
 */
export function dateToISO(date?: Date | string): string {
  if (typeof date === "string") {
    return date;
  }
  if (date instanceof Date) {
    return date.toISOString().split("T")[0];
  }
  return "";
}

/**
 * Check if two dates are the same day, month, year
 */
export function sameDate(d1: Date, d2: Date): boolean {
  return (
    d1 instanceof Date &&
    d2 instanceof Date &&
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getFullYear() === d2.getFullYear()
  );
}

/**
 * Get a date one month in the past
 */
export function prevMonth(date: Date): Date {
  const month = date.getMonth();
  const nextDate = new Date(date);
  nextDate.setMonth(month - 1);
  // date doesn't exist in new month, use last day
  if (month === nextDate.getMonth()) {
    return new Date(date.getFullYear(), month, 0);
  }
  return nextDate;
}

/**
 * Get a date one month in the future
 */
export function nextMonth(date: Date): Date {
  const month = date.getMonth();
  const nextDate = new Date(date);
  nextDate.setMonth(month + 1);
  // date doesn't exist in new month, use last day
  if ((month + 2) % 7 === nextDate.getMonth() % 7) {
    return new Date(date.getFullYear(), month + 2, 0);
  }
  return nextDate;
}

/**
 * Translate a number into a given locales numeral system
 */
export function localizeNumber(num: number, localeData: DateLocaleData): string {
  return String(num)
    .split("")
    .map((i) => localeData.numerals[i])
    .join("");
}

/**
 * Calculate actual number from localized string
 */
export function parseNumber(str: string, localeData: DateLocaleData): number {
  return parseInt(
    str
      .split("")
      .map((i) => NUMERALS[localeData.numerals.indexOf(i)])
      .filter((num) => num)
      .join("")
  );
}

/**
 * Parse numeric units for day, month, and year from a localized string
 * month starts at 0 (can pass to date constructor)
 */
export function parseDateString(str: string, localeData: DateLocaleData): { day: number; month: number; year: number } {
  const { separator, unitOrder, numerals } = localeData;
  const order = getOrder(unitOrder);

  const values = str.split(separator).map((number) =>
    translateNumerals({
      number: number.trim(),
      from: numerals,
      to: NUMERALS
    })
  );
  return {
    day: parseInt(values[order.indexOf("d")]),
    month: parseInt(values[order.indexOf("m")]) - 1,
    year: parseInt(values[order.indexOf("y")])
  };
}

interface TranslateNumberalsOptions {
  number: string;
  to?: string;
  from?: string;
}

/**
 * Given a number and two numeral sets, translate the number from one to the other
 */
export function translateNumerals({ number, from, to }: TranslateNumberalsOptions): string {
  const destinationNumerals = (to || NUMERALS).split("");
  const sourceNumerals = (from || NUMERALS).split("");
  const dictionary: Record<string, string> = sourceNumerals.reduce((acc, numeral, i) => {
    acc[numeral] = destinationNumerals[i];
    return acc;
  }, {});
  return [...`${number}`].reduce((acc, numeral) => {
    return `${acc}${dictionary[numeral]}`;
  }, "");
}

/**
 * Given a date and a locale, return a correctly formatted string
 */
export function formatDate(date: Date, localeData: DateLocaleData): string {
  if (!date || !localeData) {
    return "";
  }
  const { unitOrder, numerals } = localeData;

  const lookup = {
    DD: date.getDate(),
    MM: date.getMonth() + 1,
    YYYY: date.getFullYear()
  };
  let formattedDate = unitOrder;

  Object.keys(lookup).forEach((key) => {
    const number = translateNumerals({
      number: lookup[key],
      to: numerals
    });
    formattedDate = formattedDate.replace(key, number);
  });
  return formattedDate;
}

type unitOrderSignifier = "m" | "d" | "y";

/**
 * Based on the unitOrder string, find order of month, day, and year for locale
 */
export function getOrder(unitOrder: string): unitOrderSignifier[] {
  const signifiers: unitOrderSignifier[] = ["d", "m", "y"];
  const order = unitOrder.toLowerCase();
  return signifiers.sort((a, b) => order.indexOf(a) - order.indexOf(b));
}

/**
 * Get number of days between two dates
 */
export function getDaysDiff(date1: Date, date2: Date): number {
  const ts1 = date1.getTime();
  const ts2 = date2.getTime();
  return Math.abs(ts1 - ts2) * 1000 * 60 * 60 * 24;
}

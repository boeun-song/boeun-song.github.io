import { differenceInCalendarDays } from "date-fns";
import type { MonthlyPayPromotionList } from "./PayPromotionChart";

export const getAllDaysOfMonth = (year: number, month: number) => {
  const date = new Date(year, month - 1, 1);
  const days = [];
  while (date.getMonth() === month - 1) {
    days.push(new Date(date).getDate());
    date.setDate(date.getDate() + 1);
  }
  return days;
};

export const getFirstDateOfMonth = (year: number, month: number) => {
  return new Date(year, month - 1, 1);
};

export const getLastDateOfMonth = (year: number, month: number) => {
  return new Date(year, month, 0);
};

export const filterCurrentMonthPromotions = (
  promotions: MonthlyPayPromotionList[],
  startOfMonth: Date,
  endOfMonth: Date
): MonthlyPayPromotionList[] =>
  promotions.filter(
    ({ postingBeginAt, postingEndAt }) =>
      postingBeginAt <= endOfMonth &&
      (postingEndAt === null || postingEndAt >= startOfMonth)
  );

export const sortPromotions = (
  promotions: MonthlyPayPromotionList[]
): MonthlyPayPromotionList[] =>
  [...promotions].sort((a, b) => {
    if (a.activated !== b.activated) {
      return a.activated ? -1 : 1;
    }
    return a.postingBeginAt.getTime() - b.postingBeginAt.getTime();
  });

export const calculateLeftAndWidth = (
  eventStart: Date,
  eventEnd: Date | null,
  startOfMonth: Date,
  endOfMonth: Date,
  ratioPerDay: number
): { left: number; width: number } => {
  const start = eventStart < startOfMonth ? startOfMonth : eventStart;
  const end = !eventEnd || eventEnd > endOfMonth ? endOfMonth : eventEnd;

  const left = differenceInCalendarDays(start, startOfMonth) * ratioPerDay;
  const width = differenceInCalendarDays(end, start) * ratioPerDay;
  return { left, width };
};

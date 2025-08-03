import { differenceInCalendarDays } from "date-fns";
import { motion } from "framer-motion";
import {
  getAllDaysOfMonth,
  getFirstDateOfMonth,
  getLastDateOfMonth,
  filterCurrentMonthPromotions,
  sortPromotions,
} from "~apps/components/charts/PayPromotionChart.hooks";
import type { SelectedDate } from "~apps/components/calendar/MonthlyCalendar";
import { useMemo } from "react";

export interface MonthlyPayPromotionList {
  activated: boolean;
  postingBeginAt: Date;
  postingEndAt: Date | null;
  promotionId: number;
  title: string;
}

interface Props {
  data: MonthlyPayPromotionList[];
  selectedDate: SelectedDate;
}

export const PayPromotionChart = ({ data, selectedDate }: Props) => {
  const { year, month } = selectedDate;
  const startDateOfMonth = getFirstDateOfMonth(year, month);
  const endDateOfMonth = getLastDateOfMonth(year, month);

  const promotions = useMemo(() => {
    return sortPromotions(
      filterCurrentMonthPromotions(data, startDateOfMonth, endDateOfMonth)
    );
  }, [data, startDateOfMonth, endDateOfMonth]);

  const today = new Date();

  const days = Array.from(
    { length: getAllDaysOfMonth(year, month).length },
    (_, i) => i + 1
  );
  const ratioPerDay = 100 / days.length;

  const isStartedPreviousThisMonth = (startDate: Date) =>
    differenceInCalendarDays(startDate, startDateOfMonth) < 0;

  const isEndNextThisMonth = (endDate: Date) =>
    differenceInCalendarDays(endDate, endDateOfMonth) > 0;

  const calculateLeft = (eventStartDate: Date) => {
    return isStartedPreviousThisMonth(eventStartDate)
      ? 0
      : differenceInCalendarDays(eventStartDate, startDateOfMonth) *
          ratioPerDay;
  };

  const calculateWidth = (eventStartDate: Date, eventEndDate: Date | null) => {
    const hasNoEndDate = eventEndDate === null;
    const startDate = isStartedPreviousThisMonth(eventStartDate)
      ? startDateOfMonth
      : eventStartDate;
    const endDate =
      hasNoEndDate || isEndNextThisMonth(eventEndDate)
        ? endDateOfMonth
        : eventEndDate;

    return differenceInCalendarDays(endDate, startDate) * ratioPerDay;
  };

  return (
    <div className="relative w-full pb-8">
      <div className="mb-3 pb-2 border-b border-gray-300">
        {promotions.map((event) => {
          const eventStart = new Date(event.postingBeginAt);
          const eventEnd = event.postingEndAt
            ? new Date(event.postingEndAt)
            : null;

          return (
            <div
              key={event.promotionId}
              className="relative h-4 md:h-5 mb-3 md:mb-4 bg-gray-50"
            >
              <motion.div
                initial={{ width: 0, left: 0 }}
                animate={{
                  width: `${calculateWidth(eventStart, eventEnd)}%`,
                  left: `${calculateLeft(eventStart)}%`,
                }}
                transition={{ duration: 1 }}
                className={`absolute flex items-center justify-center h-full text-white text-xs md:text-sm text-center cursor-pointer rounded-sm ${
                  event.activated ? "bg-blue-500" : "bg-gray-300"
                }`}
              >
                <span className="px-2 truncate">{event.title}</span>
              </motion.div>
            </div>
          );
        })}
      </div>

      <div className="hidden md:flex justify-between text-sm text-gray-600 ">
        {getAllDaysOfMonth(year, month).map((day) => {
          const isToday =
            selectedDate.year === today.getFullYear() &&
            selectedDate.month === today.getMonth() + 1 &&
            day === today.getDate();

          return (
            <div
              key={day}
              className={`text-left ${isToday ? "text-blue-500" : ""}`}
              style={{
                width: `${100 / getAllDaysOfMonth(year, month).length}%`,
              }}
            >
              {day}
            </div>
          );
        })}
      </div>

      <div className="flex gap-4 justify-end mt-6 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-blue-500" /> active
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-gray-300" /> inactive
        </div>
      </div>
    </div>
  );
};

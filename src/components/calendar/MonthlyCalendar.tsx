import { useEffect, useState } from "react";
import { InputBox } from "~apps/components/forms/InputBox";
import { CalendarIcon } from "~apps/assets/icons/CalendarIcon";

export interface SelectedDate {
  year: number;
  month: number;
}

interface Props {
  onDateChange?: (selectedDate: SelectedDate) => void;
}

const months = Array.from({ length: 12 }, (_, i) => i + 1);

export const MonthlyCalendar = ({ onDateChange }: Props) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [initialYear, initialMonth] = [
    new Date().getFullYear(),
    new Date().getMonth() + 1,
  ];
  const [selectedDate, setSelectedDate] = useState<SelectedDate>({
    year: initialYear,
    month: initialMonth,
  });
  const [selectedYear, setSelectedYear] = useState<number>(initialYear);
  const [selectedMonth, setSelectedMonth] = useState<number>(initialMonth);

  const toggleCalendarPopup = () => setShowCalendar(!showCalendar);
  const goToPreviousYear = () => setSelectedYear(selectedYear - 1);
  const goToNextYear = () => setSelectedYear(selectedYear + 1);
  const handleMonthClick = (month: number) => setSelectedMonth(month);
  const handleConfirm = () => {
    if (selectedMonth !== null) {
      setSelectedDate({ year: selectedYear, month: selectedMonth });
      setShowCalendar(false);
    }
  };

  useEffect(() => {
    onDateChange?.(selectedDate);
  }, [selectedDate]);

  return (
    <div className="relative inline-block">
      <InputBox
        readOnly
        value={`${selectedYear}.${String(selectedMonth).padStart(2, "0")}`}
        rightComponent={
          <button
            className="m-0 p-0 leading-none bg-transparent border-0 outline-none"
            onClick={toggleCalendarPopup}
          >
            <CalendarIcon />
          </button>
        }
        className="w-[262px] text-[16px] text-center cursor-pointer mb-5"
      />

      {showCalendar && (
        <div className="absolute z-10 top-[46px] left-0 flex flex-col gap-[22px] w-[306px] p-6 bg-white rounded shadow-[4px_20px_38px_0_rgb(82_86_108_/_12%)]">
          <div className="flex justify-between">
            <div className="cursor-pointer" onClick={goToPreviousYear}>
              &lt;
            </div>

            {selectedYear}

            <div className="cursor-pointer" onClick={goToNextYear}>
              &gt;
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {months.map((month) => {
              const isSelected = selectedMonth === month;
              return (
                <div
                  key={month}
                  className={`cursor-pointer relative flex items-center justify-center w-[30px] h-[30px] ${
                    isSelected
                      ? 'before:content-[""] before:absolute before:z-[-1] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-[30px] before:h-[30px] before:bg-blue-100 before:rounded-full'
                      : ""
                  }`}
                  onClick={() => handleMonthClick(month)}
                >
                  <span
                    className={`text-[13px] ${
                      isSelected
                        ? "font-semibold text-blue-500"
                        : "font-normal text-color-default"
                    }`}
                  >
                    {month}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="flex justify-end">
            <button onClick={handleConfirm}>confirm</button>
          </div>
        </div>
      )}
    </div>
  );
};

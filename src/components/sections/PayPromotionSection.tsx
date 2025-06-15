import { useState } from "react";
import {
  MonthlyCalendar,
  type SelectedDate,
} from "~apps/components/calendar/MonthlyCalendar";
import { PayPromotionChart } from "~apps/components/charts/PayPromotionChart";
import { payPromotionMocks } from "~apps/constants/payPromotion";

export const PayPromotionSummarySection = () => {
  const [selectedDate, setSelectedDate] = useState<SelectedDate | undefined>();

  const handleDateChange = (selectedDate: SelectedDate) => {
    setSelectedDate(selectedDate);
  };

  return (
    <>
      <MonthlyCalendar onDateChange={handleDateChange} />
      {selectedDate && (
        <PayPromotionChart
          data={payPromotionMocks}
          selectedDate={selectedDate}
        />
      )}
    </>
  );
};

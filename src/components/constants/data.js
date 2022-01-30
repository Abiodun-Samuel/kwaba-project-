export const FormTitles = [
  "Payment Option",
  "Payment Breakdown",
  // "Pre-Approval",
];
// (12345.67).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
export const monthlyPlan = [
  { month: "1 Month", id: 1 },
  { month: "2 Months", id: 2 },
  { month: "3 Months", id: 3 },
  { month: "4 Months", id: 4 },
  { month: "5 Months", id: 5 },
  { month: "6 Months", id: 6 },
  { month: "7 Months", id: 7 },
  { month: "8 Months", id: 8 },
  { month: "9 Months", id: 9 },
  { month: "10 Months", id: 10 },
  { month: "11 Months", id: 11 },
  { month: "12 Months", id: 12 },
];

export const getInt = (month) => {
  for (var i = 0; i < monthlyPlan.length; i++) {
    if (monthlyPlan[i].month === month) {
      return monthlyPlan[i].id;
    }
  }
};

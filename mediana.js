const expenses = {
  "2023-01": {
    "01": {
      food: [22.11, 43, 11.72, 2.2, 36.29, 2.5, 19],
      fuel: [210.22],
    },
    "09": {
      food: [11.9],
      fuel: [190.22],
    },
  },
  "2023-03": {
    "07": {
      food: [20, 11.9, 30.2, 11.9],
    },
    "04": {
      food: [10.2, 11.5, 2.5],
      fuel: [],
    },
  },
  "2023-04": {},
};

function getMedianUntilFirstSunday(expenses) {
  const firstWeekExpenses = {};
  const medianFirstWeek = {};

  for (const month in expenses) {
    if (Object.keys(expenses[month]).length === 0) {
      firstWeekExpenses[`${month}`] = `Brak danych!`;
    }
    for (const day in expenses[month]) {
      const dayStat = day;
      const date = `${month}-${day}`;
      const dateConvert = new Date(`${month}-${day}`);
      const dayOfWeek = dateConvert.getDate();
      const monthOfYear = dateConvert.getMonth();

      if (dayOfWeek === 0 && day <= 7) {
        firstWeekExpenses[`${month}`] = `${Object.values(
          expenses[month][day]
        )}`;
      } else if (dayOfWeek === 1 && day == 1) {
        firstWeekExpenses[`${month}`] = `${Object.values(
          expenses[month][day]
        )}`;
      } else if (dayOfWeek === 2 && day <= 2) {
        firstWeekExpenses[`${month}`] = `${Object.values(
          expenses[month][day]
        )}`;
      } else if (dayOfWeek === 3 && day <= 3) {
        firstWeekExpenses[`${month}`] = `${Object.values(
          expenses[month][day]
        )}`;
      } else if (dayOfWeek === 4 && day <= 4) {
        firstWeekExpenses[`${month}`] = `${Object.values(
          expenses[month][day]
        )}`;
      } else if (dayOfWeek === 5 && day <= 5) {
        firstWeekExpenses[`${month}`] = `${Object.values(
          expenses[month][day]
        )}`;
      } else if (dayOfWeek === 6 && day <= 6) {
        firstWeekExpenses[`${month}`] = `${Object.values(
          expenses[month][day]
        )}`;
      } else {
        firstWeekExpenses[`${date}`] = `Dzień poza zakresem analizy!`;
      }
    }
  }

  for (const exp in firstWeekExpenses) {
    if (
      firstWeekExpenses[exp] !== "Dzień poza zakresem analizy!" &&
      firstWeekExpenses[exp] !== "Brak danych!"
    ) {
      const split = firstWeekExpenses[exp]
        .split(",")
        .filter(Boolean)
        .slice()
        .sort((a, b) => a - b);
      const mid = Math.floor(split.length / 2);
      firstWeekExpenses[exp] = split;

      if (split.length % 2 === 0) {
        medianFirstWeek[`${exp}`] = (
          (Number(split[mid - 1]) + Number(split[mid])) /
          2
        ).toString();
      } else {
        medianFirstWeek[`${exp}`] = split[mid];
      }
    } else if (firstWeekExpenses[exp] === "Brak danych!") {
      medianFirstWeek[`${exp}`] = "Brak danych";
    }
  }
  console.log(firstWeekExpenses);
  console.log(medianFirstWeek);
}

getMedianUntilFirstSunday(expenses);

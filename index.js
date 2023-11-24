const addDays = require("date-fns/addDays");

const getAfterXDays = (days) => {
  const date = addDays(new Date(2020, 8, 22), days);
  return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
};

module.exports = getAfterXDays;

export const dateFormat = (date) => {
  const formattedDate = date.split("-");

  const year = formattedDate[0];
  const month = formattedDate[1];
  const day = formattedDate[2];
  return { year, month, day };
};

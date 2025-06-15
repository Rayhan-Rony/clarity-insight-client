export const dateFormat = (date) => {
  const formattedDate = date.split("-");
  console.log(formattedDate[0]);
  const year = formattedDate[0];
  const month = formattedDate[1];
  const day = formattedDate[2];
  return { year, month, day };
};

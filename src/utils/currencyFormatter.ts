export const currencyFormatter = (
  locales: string,
  number: number,
) => {
  return number.toLocaleString(locales, {
    style: 'currency',
    currency: 'RUB',
  });
};

export function formatPrice<T extends number | string>(price: T) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 3,
  });
}

export function formatFeeString<T extends string | number>(input: T) {
  const regExp = /\(([^)]+)\)/;
  const matches = regExp.exec(input.toString());

  if (!matches) throw new Error(" input isn't valid ");

  return matches[1];
}

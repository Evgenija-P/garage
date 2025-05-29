function formatEuroPrice(price: number): string {
  return price.toLocaleString('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  });
}

export default formatEuroPrice;

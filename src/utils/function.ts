export function formatPrice(value: any) {
  if (value !== null && value !== undefined) {
    if (value !== undefined || value !== null) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return value;
    }
  } else {
    return value;
  }
}

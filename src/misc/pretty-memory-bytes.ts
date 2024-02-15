const UNITS = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

export default function prettyMemoryBytes(n: number) {
  if (n < 1024) {
    return n + ' KB';
  }
  const exponent = Math.min(Math.floor(Math.log2(n) / 10), UNITS.length - 1);
  n = Number((n / Math.pow(1024, exponent)).toPrecision(4));
  const unit = UNITS[exponent];
  return n + ' ' + unit;
}

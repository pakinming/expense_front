export function fmtDate(date: string | Date) {
  return new Date(date).toLocaleDateString("th");
}

export const fmtDateYYYYMMDD = (date: Date) => date.toISOString().slice(0, 10);

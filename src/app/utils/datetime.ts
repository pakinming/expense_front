export function fmtDate(date: string | Date) {
  return new Date(date).toLocaleDateString("th");
}
export function fmtTime(params:Date) {
  return new Date(params).toLocaleTimeString('th')
  
}

export const fmtDateYYYYMMDD = (date: Date) => date.toISOString().slice(0, 10);

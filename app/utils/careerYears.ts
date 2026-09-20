/** First month of paid engineering work (TechnologyCatalogue). */
export const CAREER_STARTED_AT = new Date(2020, 2, 1)

const YEAR_WORDS = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve"
] as const

export function yearsInCareer(now = new Date()): number {
  let years = now.getFullYear() - CAREER_STARTED_AT.getFullYear()
  const monthDelta = now.getMonth() - CAREER_STARTED_AT.getMonth()
  const dayDelta = now.getDate() - CAREER_STARTED_AT.getDate()
  if (monthDelta < 0 || (monthDelta === 0 && dayDelta < 0)) {
    years -= 1
  }
  return Math.max(0, years)
}

export function yearsInCareerLabel(now = new Date()): string {
  return `${yearsInCareer(now)}+`
}

export function yearsInWords(years: number): string {
  return YEAR_WORDS[years] ?? String(years)
}

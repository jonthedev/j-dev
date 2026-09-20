import { describe, expect, it } from "vitest"
import {
  yearsInCareer,
  yearsInCareerLabel,
  yearsInWords
} from "../../../app/utils/careerYears"

describe("yearsInCareer", () => {
  it("is 0 before the first anniversary", () => {
    expect(yearsInCareer(new Date(2021, 1, 28))).toBe(0)
  })

  it("ticks on 1 March", () => {
    expect(yearsInCareer(new Date(2026, 2, 1))).toBe(6)
    expect(yearsInCareer(new Date(2026, 1, 28))).toBe(5)
  })

  it("is 6+ in September 2026", () => {
    expect(yearsInCareer(new Date(2026, 8, 20))).toBe(6)
    expect(yearsInCareerLabel(new Date(2026, 8, 20))).toBe("6+")
  })
})

describe("yearsInWords", () => {
  it("uses words for common counts", () => {
    expect(yearsInWords(6)).toBe("six")
    expect(yearsInWords(13)).toBe("13")
  })
})

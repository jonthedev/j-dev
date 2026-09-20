import { test, expect } from "@playwright/test"

test.describe("homepage", () => {
  test("frontend view loads and matches snapshot", async ({ page }) => {
    await page.goto("/")
    await expect(page.getByRole("heading", { name: "Jonathan Kaonga", level: 1 })).toBeVisible()
    await expect(page.getByText("Full Stack Engineer").first()).toBeVisible()
    await expect(page).toHaveScreenshot("homepage-frontend.png", { maxDiffPixelRatio: 0.02 })
  })
})

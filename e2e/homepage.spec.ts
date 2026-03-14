import { test, expect } from "@playwright/test"

test.describe("homepage", () => {
  test("frontend view loads and matches snapshot", async ({ page }) => {
    await page.goto("/")
    await expect(page.getByRole("heading", { name: "Full-Stack Web Applications", level: 1 })).toBeVisible()
    await expect(page).toHaveScreenshot("homepage-frontend.png", { maxDiffPixelRatio: 0.02 })
  })
})

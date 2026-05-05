import { test, expect } from "@playwright/test"

test("has title and main content", async ({ page }) => {
  await page.goto("/")
  await expect(page).toHaveTitle(/Jonathan Kaonga|AI Product Engineer/i)
  await expect(
    page.getByRole("link", { name: /view case studies/i })
  ).toBeVisible()
})

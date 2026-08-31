import { test, expect } from "@playwright/test"

test("has title and main content", async ({ page }) => {
  await page.goto("/")
  await expect(page).toHaveTitle(/Jonathan Kaonga|Senior Full-Stack Engineer/i)
  await expect(
    page.getByRole("link", { name: /view case studies/i })
  ).toBeVisible()
})

import { test, expect } from "@playwright/test"

test("has title and main content", async ({ page }) => {
  await page.goto("/")
  await expect(page).toHaveTitle(/jdev|full-stack|web applications/i)
  await expect(page.getByRole("link", { name: /view services|case studies/i })).toBeVisible()
})

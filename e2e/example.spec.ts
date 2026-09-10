import { test, expect } from "@playwright/test"

test("has title and main content", async ({ page }) => {
  await page.goto("/")
  await expect(page).toHaveTitle(/Jonathan Kaonga|Full Stack Engineer/i)
  await expect(page.getByRole("heading", { name: "Full Stack Engineer", level: 1 })).toBeVisible()
})

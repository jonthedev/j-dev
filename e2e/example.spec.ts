import { test, expect } from "@playwright/test"

test("has title and main content", async ({ page }) => {
  await page.goto("/")
  await expect(page).toHaveTitle(/Jonathan Kaonga|Software Engineer/i)
  await expect(page.getByRole("heading", { name: "Software Engineer", level: 1 })).toBeVisible()
})

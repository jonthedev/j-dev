import { test, expect } from "@playwright/test"

test("has title and main content", async ({ page }) => {
  await page.goto("/")
  await expect(page).toHaveTitle(/Jonathan Kaonga|Full Stack Engineer/i)
  await expect(page.getByRole("heading", { name: "Jonathan Kaonga", level: 1 })).toBeVisible()
  await expect(page.getByText("Full Stack Engineer").first()).toBeVisible()
})

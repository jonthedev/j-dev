export interface PageSpeedCategory {
  id: string
  label: string
  score: number
}

/** Lab scores from PageSpeed Insights (mobile). Re-run after a deploy and update here. */
export const PAGE_SPEED_REPORT_URL
  = "https://pagespeed.web.dev/analysis/https-j-dev-online/wanuzb015o?form_factor=mobile"

export const PAGE_SPEED_FORM_FACTOR = "mobile" as const

export const pageSpeedCategories: PageSpeedCategory[] = [
  { id: "performance", label: "Performance", score: 91 },
  { id: "accessibility", label: "Accessibility", score: 100 },
  { id: "best-practices", label: "Best Practices", score: 100 },
  { id: "seo", label: "SEO", score: 100 }
]

// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt({
  rules: {
    "quote-props": "off",
    "quotes": ["error", "double", { avoidEscape: true }],
    "@stylistic/quotes": ["error", "double", { avoidEscape: true }],
    "vue/attribute-hyphenation": ["warn", "always", {
      ignore: [":whileInView", ":inViewOptions"]
    }]
  }
})

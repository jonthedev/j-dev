export default defineAppConfig({
  ui: {
    colors: {
      primary: "vue",
      lab: "lab",
      neutral: "slate"
    },
    // vue-500 (#42b883) + white is ~2.5:1. vue-700 + white meets WCAG AA.
    button: {
      compoundVariants: [
        {
          color: "primary",
          variant: "solid",
          class: "text-white bg-vue-700 hover:bg-vue-800 active:bg-vue-800 disabled:bg-vue-700 aria-disabled:bg-vue-700 focus-visible:outline-vue-700"
        }
      ]
    }
  }
})

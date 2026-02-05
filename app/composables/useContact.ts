/**
 * Contact information management composable
 * Centralizes contact details and form handling logic
 */
export function useContact() {
  // Contact information
  const contactInfo = {
    email: 'jonathan@j-dev.online',
    github: 'https://github.com/jonthedev',
    linkedin: 'https://www.linkedin.com/in/jonathan-kaonga-5a04871b5/',
    portfolio: 'https://j-dev.online',
    kvk: '93792670', // Dutch business registration
    availability: 'Available from March 2026',
    location: 'Amsterdam, Netherlands',
    status: 'Freelance'
  }

  // Contact methods with descriptions
  const contactMethods = [
    {
      name: 'Email',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      icon: 'lucide:mail',
      description: 'Send me an email for inquiries',
      color: 'blue'
    },
    {
      name: 'GitHub',
      value: 'jonthedev',
      href: contactInfo.github,
      icon: 'simple-icons:github',
      description: 'View my code and projects',
      color: 'gray'
    },
    {
      name: 'LinkedIn',
      value: 'jonathan-kaonga',
      href: contactInfo.linkedin,
      icon: 'simple-icons:linkedin',
      description: 'Connect with me professionally',
      color: 'blue'
    }
  ]

  // Professional information
  const professionalInfo = {
    title: 'Freelance Vue/Nuxt Frontend Engineer',
    experience: '5+ years',
    specialization: 'Vue.js, Nuxt.js, TypeScript, Component Architecture',
    services: [
      'Frontend Development',
      'Component Architecture',
      'Performance Optimization',
      'Code Review & Refactoring',
      'Technical Consulting',
      'Mentoring & Training'
    ],
    techFocus: [
      'Vue 3',
      'Nuxt 4',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'Pinia',
      'Vue Router'
    ]
  }

  // Form validation rules
  const formRules = {
    name: {
      required: true,
      minLength: 2,
      maxLength: 100,
      message: 'Name must be between 2 and 100 characters'
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email address'
    },
    subject: {
      required: true,
      minLength: 5,
      maxLength: 200,
      message: 'Subject must be between 5 and 200 characters'
    },
    message: {
      required: true,
      minLength: 10,
      maxLength: 2000,
      message: 'Message must be between 10 and 2000 characters'
    }
  }

  // Contact form reactive state
  const contactForm = reactive({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  // Form validation state
  const formErrors = reactive({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  // Form submission state
  const formState = reactive({
    isSubmitting: false,
    isSubmitted: false,
    error: ''
  })

  // Validate single field
  const validateField = (field: keyof typeof contactForm) => {
    const rules = formRules[field]
    const value = contactForm[field]

    // Reset error
    formErrors[field] = ''

    if (rules.required && !value) {
      formErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`
      return false
    }

    if ('minLength' in rules && rules.minLength && value.length < rules.minLength) {
      formErrors[field] = rules.message
      return false
    }

    if ('maxLength' in rules && rules.maxLength && value.length > rules.maxLength) {
      formErrors[field] = rules.message
      return false
    }

    if ('pattern' in rules && rules.pattern && !rules.pattern.test(value)) {
      formErrors[field] = rules.message
      return false
    }

    return true
  }

  // Validate entire form
  const validateForm = () => {
    const fields = Object.keys(contactForm) as (keyof typeof contactForm)[]
    const isValid = fields.every(field => validateField(field))

    return isValid
  }

  // Reset form
  const resetForm = () => {
    Object.assign(contactForm, {
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    Object.assign(formErrors, {
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    Object.assign(formState, {
      isSubmitting: false,
      isSubmitted: false,
      error: ''
    })
  }

  // Submit form (placeholder for actual implementation)
  const submitForm = async () => {
    if (!validateForm()) {
      return
    }

    formState.isSubmitting = true
    formState.error = ''

    try {
      // Simulate API call - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 2000))

      formState.isSubmitted = true
      resetForm()
    } catch {
      formState.error = 'Failed to send message. Please try again.'
    } finally {
      formState.isSubmitting = false
    }
  }

  return {
    // Data
    contactInfo,
    contactMethods,
    professionalInfo,
    contactForm,
    formErrors,
    formState,
    formRules,

    // Methods
    validateField,
    validateForm,
    resetForm,
    submitForm
  }
}

/**
 * Contact presets for different contexts
 */
export const contactPresets = {
  // Quick contact methods (for hero section)
  quick: () => {
    const { contactMethods } = useContact()
    return contactMethods.slice(0, 2) // Email and GitHub
  },

  // All contact methods (for contact section)
  all: () => {
    const { contactMethods } = useContact()
    return contactMethods
  },

  // Professional summary (for about section)
  professional: () => {
    const { professionalInfo, contactInfo } = useContact()
    return {
      ...professionalInfo,
      availability: contactInfo.availability,
      location: contactInfo.location
    }
  }
}

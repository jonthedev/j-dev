/**
 * Animation composable for VueUse Motion
 * Consolidates 35+ v-motion patterns with optimized delays for better performance
 */
export function useAnimation() {
  /**
   * Fade in and slide up animation (most common pattern)
   * Used for: Hero sections, About, Contact, etc.
   */
  const fadeInUp = (duration = 500, delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    visibleOnce: {
      opacity: 1,
      y: 0,
      transition: { duration, delay }
    }
  })

  /**
   * Fade in and slide left animation
   * Used for: Left-side elements
   */
  const fadeInLeft = (duration = 500, delay = 0) => ({
    initial: { opacity: 0, x: -24 },
    visibleOnce: {
      opacity: 1,
      x: 0,
      transition: { duration, delay }
    }
  })

  /**
   * Fade in and slide right animation
   * Used for: Right-side elements
   */
  const fadeInRight = (duration = 500, delay = 0) => ({
    initial: { opacity: 0, x: 24 },
    visibleOnce: {
      opacity: 1,
      x: 0,
      transition: { duration, delay }
    }
  })

  /**
   * Staggered animation for grid items with optimized delays
   * Optimized from 100-120ms increments to 50ms for smoother flow
   * Used for: TechStack, Projects, Clients, etc.
   */
  const staggeredAnimation = (baseDelay = 150, increment = 50) => {
    return (index: number) => ({
      initial: { opacity: 0, y: 20 },
      visibleOnce: {
        opacity: 1,
        y: 0,
        transition: { duration: 400, delay: baseDelay + index * increment }
      }
    })
  }

  /**
   * Staggered animation for hero sections (faster impact)
   * Used for: Hero content, important CTAs
   */
  const heroStaggered = (baseDelay = 100, increment = 25) => {
    return (index: number) => ({
      initial: { opacity: 0, y: 30 },
      visibleOnce: {
        opacity: 1,
        y: 0,
        transition: { duration: 600, delay: baseDelay + index * increment }
      }
    })
  }

  /**
   * Scale in animation for special elements
   * Used for: Icons, badges, featured items
   */
  const scaleIn = (duration = 400, delay = 0) => ({
    initial: { opacity: 0, scale: 0.8 },
    visibleOnce: {
      opacity: 1,
      scale: 1,
      transition: { duration, delay }
    }
  })

  /**
   * Fade in animation only (no movement)
   * Used for: Background elements, subtle reveals
   */
  const fadeIn = (duration = 500, delay = 0) => ({
    initial: { opacity: 0 },
    visibleOnce: {
      opacity: 1,
      transition: { duration, delay }
    }
  })

  /**
   * Slide up from bottom (for elements that enter from below viewport)
   * Used for: Footer elements, bottom panels
   */
  const slideUp = (distance = 50, duration = 500, delay = 0) => ({
    initial: { opacity: 0, y: distance },
    visibleOnce: {
      opacity: 1,
      y: 0,
      transition: { duration, delay }
    }
  })

  /**
   * Hover animation definitions for interactive elements
   * These are combined with CSS transitions for smooth hover effects
   */
  const hoverAnimations = {
    scale: 'transform scale-110',
    lift: 'transform -translate-y-2',
    glow: 'shadow-2xl',
    bright: 'brightness-110'
  }

  /**
   * Preset animation combinations for common use cases
   */
  const presets = {
    // Hero section entrance
    heroEntrance: heroStaggered(100, 25),

    // Section content reveal
    sectionReveal: fadeInUp(600, 100),

    // Grid items (projects, tech stack, clients)
    gridItems: staggeredAnimation(150, 50),

    // Card hover effects
    cardHover: {
      initial: { opacity: 0, y: 24 },
      visibleOnce: { opacity: 1, y: 0, transition: { duration: 500 } }
    },

    // Icon and badge animations
    iconEntrance: scaleIn(400, 200),

    // Navigation elements
    navItem: fadeIn(300, 0),

    // Contact form elements
    formField: fadeInUp(400, 100)
  }

  return {
    // Basic animations
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    fadeIn,
    slideUp,

    // Advanced animations
    staggeredAnimation,
    heroStaggered,

    // Hover effects
    hoverAnimations,

    // Presets
    presets
  }
}

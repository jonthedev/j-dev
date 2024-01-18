export type CssPropertyName = string

export type PropertyValue = Record<string, string>

export type MergedCssProperty<T extends CssPropertyName> = Record<T, string>

export interface GenerateAnimationStringProps {
  name: string
  duration?: string
  timing?: string
  iterationCount?: string
  direction?: string
}

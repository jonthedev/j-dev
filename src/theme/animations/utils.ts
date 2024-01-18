export type CssPropertyName = string

export type PropertyValue = Record<string, string>

export type MergedCssProperty<T extends CssPropertyName> = Record<T, string>

export const mergeCssValues = <T extends CssPropertyName>(
  cssPropertyName: T,
  property1: PropertyValue,
  property2: PropertyValue,
): MergedCssProperty<T> => {
  if (property1[cssPropertyName] && property2[cssPropertyName]) {
    return {
      [cssPropertyName]: `${property1[cssPropertyName]} ${property2[cssPropertyName]}`,
    } as MergedCssProperty<T>
  }
  throw new Error(
    `Property ${cssPropertyName} is missing in one of the objects`,
  )
}

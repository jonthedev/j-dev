import {
  CssPropertyName,
  PropertyValue,
  MergedCssProperty,
  GenerateAnimationStringProps,
} from "@src/types/animations/util.type"

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

export const generateAnimationString = ({
  name,
  duration = "1s",
  timing = "ease",
  iterationCount = "infinite",
  direction = "alternate",
}: GenerateAnimationStringProps): string =>
  `${name} ${duration} ${timing} ${iterationCount} ${direction}`

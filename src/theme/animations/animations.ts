export interface GenerateAnimationStringProps {
  name: string
  duration?: string
  timing?: string
  iterationCount?: string
  direction?: string
}

const generateAnimationString = ({
  name,
  duration = "1s",
  timing = "ease",
  iterationCount = "infinite",
  direction = "alternate",
}: GenerateAnimationStringProps): string =>
  `${name} ${duration} ${timing} ${iterationCount} ${direction}`

const generateAnimation = (
  name: string,
  duration?: string,
): Record<string, string> => ({
  [`${name}Default`]: generateAnimationString({ name }),
  [`${name}Slow`]: generateAnimationString({
    name,
    duration: duration ?? "3s",
  }),
})

const animations = {
  ...generateAnimation("fadeIn"),
  ...generateAnimation("moveLeft"),
  ...generateAnimation("moveUp"),
  ...generateAnimation("moveDown"),
  ...generateAnimation("moveRight"),
  ...generateAnimation("moveUpAndLeft"),
  ...generateAnimation("moveUpAndRight"),
  ...generateAnimation("moveDownAndRight"),
  ...generateAnimation("moveDownAndLeft"),
}

export default animations

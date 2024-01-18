import { generateAnimationString } from "./utils"

// Updated consistent names
const fadeInDefault = generateAnimationString({ name: "fadeIn" })
const fadeInSlow = generateAnimationString({ name: "fadeIn", duration: "3s" })

const moveLeftDefault = generateAnimationString({ name: "moveLeft" })
const moveLeftSlow = generateAnimationString({
  name: "moveLeft",
  duration: "3s",
})

const moveUpDefault = generateAnimationString({ name: "moveUp" })
const moveUpSlow = generateAnimationString({ name: "moveUp", duration: "3s" })

const moveDownDefault = generateAnimationString({ name: "moveDown" })
const moveDownSlow = generateAnimationString({
  name: "moveDown",
  duration: "3s",
})

const moveRightDefault = generateAnimationString({ name: "moveRight" })
const moveRightSlow = generateAnimationString({
  name: "moveRight",
  duration: "3s",
})

const moveUpAndLeftDefault = generateAnimationString({ name: "moveUpAndLeft" })

const moveUpAndRightDefault = generateAnimationString({
  name: "moveUpAndRight",
})

const moveDownAndRightDefault = generateAnimationString({
  name: "moveDownAndRight",
})

const moveDownAndLeftDefault = generateAnimationString({
  name: "moveDownAndLeft",
})

export default {
  fadeInDefault,
  fadeInSlow,
  moveLeftDefault,
  moveLeftSlow,
  moveRightDefault,
  moveRightSlow,
  moveUpDefault,
  moveUpSlow,
  moveDownDefault,
  moveDownSlow,
  moveUpAndLeftDefault,
  moveUpAndRightDefault,
  moveDownAndRightDefault,
  moveDownAndLeftDefault,
}

import { mergeCssValues } from "./utils"

type Axis = "x" | "y"

export interface GenerateXYKeyframeProps {
  axis: Axis
  startDistance: number
  endDistance: number
}

export type Keyframe = Record<string, Record<string, string>>
const fadeIn = {
  "0%": { opacity: "0" },
  "100%": { opacity: "1" },
}

const generateXYKeyframe = ({
  axis,
  startDistance,
  endDistance,
}: GenerateXYKeyframeProps): Keyframe => ({
  "0%": {
    transform: `translate${axis.toUpperCase()}(${startDistance}%)`,
  },
  "100%": {
    transform: `translate${axis.toUpperCase()}(${endDistance}rem)`,
  },
})

export const generateCornerKeyframe = (
  axisX: Keyframe,
  axisY: Keyframe,
): Keyframe => ({
  "0%": mergeCssValues("transform", axisX["0%"], axisY["0%"]),
  "100%": mergeCssValues("transform", axisX["100%"], axisY["100%"]),
})

const moveLeft = generateXYKeyframe({
  axis: "x",
  startDistance: 0,
  endDistance: -1.6,
})

const moveRight = generateXYKeyframe({
  axis: "x",
  startDistance: 0,
  endDistance: 1.6,
})

const moveUp = generateXYKeyframe({
  axis: "y",
  startDistance: 0,
  endDistance: -1.6,
})

const moveDown = generateXYKeyframe({
  axis: "y",
  startDistance: 0,
  endDistance: 1.6,
})

const moveTopLeft = generateCornerKeyframe(moveUp, moveLeft)

const moveTopRight = generateCornerKeyframe(moveUp, moveRight)

const moveBottomRight = generateCornerKeyframe(moveDown, moveRight)

const moveBottomLeft = generateCornerKeyframe(moveDown, moveLeft)

export default {
  fadeIn,
  moveLeft,
  moveRight,
  moveUp,
  moveDown,
  moveTopLeft,
  moveTopRight,
  moveBottomRight,
  moveBottomLeft,
}

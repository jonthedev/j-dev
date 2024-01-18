type Axis = "x" | "y"

export interface GenerateXYKeyframeProps {
  axis: Axis
  startDistance: number
  endDistance: number
}

export type Keyframe = Record<string, Record<string, string>>

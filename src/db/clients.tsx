import { nanoid } from "nanoid"
import React from "react"

import LogoANWB from "~assets/anwb.svg"
import LogoVanLanschot from "~assets/van-lanschot-kempen.svg"

interface Client {
  id: string
  img: React.ReactElement
}

const clients: Client[] = [
  {
    id: nanoid(),
    img: <img src={LogoANWB} alt="anwb logo" width={200} height={200} />,
  },
  {
    id: nanoid(),
    img: (
      <img
        src={LogoVanLanschot}
        alt="van lanschot kempen logo"
        width={200}
        height={200}
      />
    ),
  },
]

export default clients

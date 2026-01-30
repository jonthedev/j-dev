interface Client {
  id: string
  img: string
  alt: string
  width?: number
  height?: number
}

const clients: Client[] = [
  {
    id: 'anwb',
    img: '/anwb.svg',
    alt: 'ANWB logo',
    width: 200,
    height: 200
  },
  {
    id: 'van-lanschot',
    img: '/van-lanschot-kempen.svg',
    alt: 'Van Lanschot Kempen logo',
    width: 200,
    height: 200
  },
  {
    id: 'dpg-media',
    img: '/dpg-media.svg',
    alt: 'DPG Media logo',
    width: 200,
    height: 200
  }
]

export default clients

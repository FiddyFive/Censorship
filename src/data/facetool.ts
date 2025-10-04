type FaceData = {
  path: string
  name: string // Unique Identifier.
  gender: "male" | "female" // This is just for appearance don't get on my ass about it pls.
  direction: "left" | "right" | "up" | "down" | "forward" // From the viewers perspective.
  mouth: "open" | "closed"
  eyes: "open" | "closed"
}

export const faces: FaceData[] = [
  {
    path: "/FaceTool/Male01ForwardClosedOpen.jpg",
    name: "Sam Porter",
    gender: "male",
    direction: "forward",
    mouth: "closed",
    eyes: "open"
  },
  {
    path: "/FaceTool/Male01ForwardOpenClosed.jpg",
    name: "Sam Porter",
    gender: "male",
    direction: "forward",
    mouth: "open",
    eyes: "closed"
  },
  {
    path: "/FaceTool/Male01ForwardClosedClosed.jpg",
    name: "Sam Porter",
    gender: "male",
    direction: "forward",
    mouth: "closed",
    eyes: "closed"
  },
  {
    path: "/FaceTool/Male01DownClosedOpen.jpg",
    name: "Sam Porter",
    gender: "male",
    direction: "down",
    mouth: "closed",
    eyes: "open"
  },
  {
    path: "/FaceTool/Male01RightClosedOpen.jpg",
    name: "Sam Porter",
    gender: "male",
    direction: "right",
    mouth: "closed",
    eyes: "open"
  },
  {
    path: "/FaceTool/Male01LeftClosedOpen.jpg",
    name: "Sam Porter",
    gender: "male",
    direction: "left",
    mouth: "closed",
    eyes: "open"
  }
]
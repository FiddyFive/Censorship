import { useState } from "react"
import { MdKeyboardArrowUp, MdKeyboardArrowDown, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineCircle } from 'react-icons/md';

import "./FaceTool.css"

type GenderUnion = "Male" | "Female"
type DirectionUnion = "Forward" | "Up" | "Down" | "Left" | "Right"

function FaceTool() {
  // This is for looks, not gender identity. Remember that we're trying to defeat an image recognition program here. 
  // Further options can be added if they do turn out to be needed.
  const [gender, setGender] = useState<GenderUnion>("Male")
  const [variant, setVariant] = useState(1)
  const [direction, setDirection] = useState<DirectionUnion>("Forward")
  
  function faceString() {
    return "FaceTool/" + gender + variant + direction + "ClosedOpen.jpg"
  }
  
  return (
    <div className="faceToolBody">
      <img src={faceString()}/>
      <button className="up" onClick={() => setDirection("Up")}>
        <MdKeyboardArrowUp />
      </button>
      <button className="left" onClick={() => setDirection("Left")}>
        <MdKeyboardArrowLeft/>
      </button>
      <button className="center" onClick={() => setDirection("Forward")}>
        <MdOutlineCircle />
      </button>
      <button className="right" onClick={() => setDirection("Right")}>
        <MdKeyboardArrowRight />
      </button>
      <button className="down" onClick={() => setDirection("Down")}>
        <MdKeyboardArrowDown />
      </button>
    </div>
  )
}

export default FaceTool
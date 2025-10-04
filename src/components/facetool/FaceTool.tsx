import { useState } from "react"
import { MdKeyboardArrowUp, MdKeyboardArrowDown, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineCircle } from 'react-icons/md';

import "./FaceTool.css"

function FaceTool() {
  const [image, setImage] = useState("FaceTool/Male01ForwardClosedOpen.jpg")
  
  return (
    <div className="faceToolBody">
      <img src={image}/>
      <MdKeyboardArrowUp className="up" />
      <MdKeyboardArrowLeft className="left" />
      <MdOutlineCircle className="center" />
      <MdKeyboardArrowRight className="right" />
      <MdKeyboardArrowDown className="down" />
    </div>
  )
}

export default FaceTool